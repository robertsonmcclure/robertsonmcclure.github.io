---
layout: post
title: Starting a Company?
date: 2017-04-07
---

> I have no idea what I'm doing.

That being said, what am I doing?

I have been playing volleyball for close to 8 years now, and coaching for 4. During this time I've had a lot of exposure to statistics. During the summer of 2015 I had to opportunity to volunteer for the Toronto 2015 Pan Am & Parapan Am Games. My role was Results Associate for Indoor Volleyball and Sitting Volleyball. In other words, I recorded stats. These were used live in TV broadcasts and were the basis for some tournament awards, such as MVP.

We were trained in using software created by [Atos](https://atos.net/en/olympic-games) to log every action on the court. There were three teams, two positioned at each end of the court and one behind the referee's stand. On each end the team was comprised on three people. Each end-line team only recorded actions for the team on their side of the court. The Scout watched the game and said every action that occurred. For example, a rally could sound like "five receive continue two set continue eighteen attack continue two block continue six dig plus two set plus eighteen attack plus". The Scribe wrote down with pen and paper what they heard the Scout say. The Data Enterer would type what they heard into Atos software. This information is transferred from the Data Enterer's computer to the team behind the referees stand, who's job it is to make sure the stats coming from both side agree with each other and to make corrections as need be.

It wasn't easy work but I enjoyed it. We had the opportunity to try each role and I gravitated towards the Scout because they were the only ones who could actually watch the game, the other two had their heads down most of the time. The Scout was also the most difficult role because you had to process and evaluate every touch of the ball, I like a challenge. However as I became more and more familiar with the system, I would do Data Entry and attempt to look up and type at the same time. This sets the stage for what's to come.

At this time I'm an assistant coach with the Men's Volleyball Program at UofT. The Women's Volleyball Program had hired [Vincenzo Mallia](http://www.varsityblues.ca/news/2014/9/25/WVB_0925142347.aspx) as an assistant coach. He is an expert in using DataVolley, world class scouting software created by [Data Project](http://www.dataproject.com/Products/EN/en/Volleyball/DataVolley4). Using DataVolley requires an enormous time commitment, equivalent to learning a new language. Since I was a full time student, I did not have the abundance of free time necessary to master DataVolley. It's also not worth it to only casually use DataVolley as the annual license for the software is $1400 CAN.

Fast forward to February 2017. I decide to try and make some software that helps me take stats. A tool that did exactly what I wanted and was easy to use. I pick Python because I was taking two machine learning courses at the time and both used Python. After tinkering around with an `while True` loop and a token parsing method, I end up with a 250 line monolithic file (excerpt below).

```python
def process_stat(sn, pn, act, deg):
    if act in ('k', 'b') or (act == 's' and deg == 0):
        stats[pn]["+/-"] += 1
    if act in ('e', 'x', 'u') or (act == 'r' and deg == 0):
        stats[pn]["+/-"] -= 1
    try:
        if act in COUNTABLE_STATS:
            stats[pn][act] += 1
        elif act in LISTABLE_STATS:
            stats[pn][act][1].append(deg)
            avg = sum(stats[pn][act][1]) / len(stats[pn][act][1])
            stats[pn][act] = (avg, stats[pn][act][1])
        else:
            print "INVALID ACTION"
    except KeyError:
        print "PLAYER DOES NOT EXIST"

def play_set(mid, sn):
    file_path = "./matches/match" + str(mid) + ".txt"
    f = open(file_path, "a")
    toronto_score = 0
    opponent_score = 0
    while True:
        print "Toronto: ", toronto_score, " | Opponent: ", opponent_score
        if set_over(sn, toronto_score, opponent_score):
            break
        raw_string = get_tokens()
        for token in raw_string.split():
            history.append(token)
            if token == 'T':
                toronto_score += 1
            elif token == 'O':
                opponent_score += 1
            else:
                (pn, act, deg) = process_token(token)
                process_stat(sn, pn, act, deg)
        f.write(raw_string + "\n")
        f.flush()
    return { 't': toronto_score, 'o': opponent_score }

def play_match(mid):
    toronto_sets = 0
    opponent_sets = 0
    scores = [(0,0), (0,0), (0,0), (0,0), (0,0)]
    set_index = 1
    while toronto_sets < MAX_SETS and opponent_sets < MAX_SETS:
        score = play_set(mid, set_index)
        if score['t'] > score['o']:
            toronto_sets += 1
        else:
            opponent_sets +=1
        print "Set ", set_index, " is over. The set count is now ", toronto_sets, "-", opponent_sets
        scores[set_index-1] = (score['t'], score['o'])
        set_index += 1
    winner = "TOR" if toronto_sets > opponent_sets else "OPP"
    return { 'winner': winner, 'scores': scores, 't_sets': toronto_sets, 'o_sets': opponent_sets }

if __name__ == "__main__":
    print "Welcome to DataRob"
    stats = initStats()
    history = initHistory()
    print "Please enter your opponent"
    opponent_name = raw_input("> ")
    match_id = setup_match(opponent_name)
    print "Your match ID is", match_id
    result = play_match(match_id)
    save_stats(match_id)
    print "Winner is ", result['winner'], ". With the score of ", result['t_sets'], "-", result['o_sets']
    print "Thank you for using DataRob. Goodbye"
```

This took me less than an hour to throw together but it did it's job, as ugly as it was. Now that I had something that sort of worked, I set about refactoring and adding features.

I added Classes and split up my monolith into modular files. I created persistent storage using an SQLite database instead of a python object. I utilized PonyORM instead of writing plain SQL commands. I created an Express server hosted on Heroku that serves a webpage from the SQLite database, this allowed players to view their stats online after a game.

Up until this point, entering the data was entirely in the command line and processed using a Python script that stored it in the database. I was not satisfied. I had played around with DataVolley and I wanted a Graphical User Interface for my own little pseudo application. I looked into TKinter and QT but the learning curve was shallow and I was having a hard time seeing them do what I wanted. Thankfully I spent the past summer [working with a startup](http://stockrender.com/) using React and Redux. I was comfortable developing for the web so I decided to try and recreate my Python App as a Web App.

After much trial and error, googling everything and starting from scratch who knows how many times, I eventually settled on a choice of frameworks that did everything I wanted.

- [Create React App](https://github.com/facebookincubator/create-react-app)
- [React](https://facebook.github.io/react/)
- [Redux](http://redux.js.org/)
- [Firebase](https://firebase.google.com/)
- [Material UI](http://www.material-ui.com/#/)

It was at this point when I realized the potential for the tool I had been building. I created this app because I wanted to use it as a coach. I wanted a fully customized experience, an app that did exactly what I wanted, so I made it. However, other people might want to use my tool too.

Discovering [Firebase](https://firebase.google.com/) was one of the best thing that happened to this project. It allows me to host my site, have a realtime database, easily integrate user authentication and even store files like athlete headshots. After I got user authentication up and running was the time I actually came to grips with the fact that I could have other people using my application.

I'm writing this post today, because yesterday I purchased the domain name [doctorvolleyball.com](https://doctorvolleyball.com). I've decided to go as far as I can with this project. Am I making a company? I don't think of it like that. I'm making a tool, that is primarily designed for my own use, but has a wider audience as well.

When will I release this "product"? I don't know. The application is functional at the moment, but is nowhere near where I want it to be. There are still so many features that I still want to implement, and every day I dream up more.

Short term goals:

- Robust realtime web application for taking stats
- Optimized for myself

Medium term goals:

- Scout your opponent
- Customizable for any user

Long term goals:

- Have every graph possible representing the game state (praise be to [Chart.js](http://www.chartjs.org/))
- Create an cross platform desktop application for an offline version using [Electron](https://electron.atom.io/)
- Add accompanying iOS and Android apps using [React Native](https://facebook.github.io/react-native/)
- Implement complex features like Time Travel Review, inspired by [Redux Time Travel](https://onsen.io/blog/react-redux-devtools-with-time-travel/)
- Profit??

Why am I sharing all this?

> To hold myself accountable to this idea

I've never done anything like this before. This is a first and I believe that documenting firsts is interesting. This blog partly serves as a time capsule. Every post I write captures a part of me in every word, and archives them conveniently with a date. Looking back at old posts of mine, I'm able to read the words and remember who I was when I wrote them.

Regardless of what happens going forward, I want to capture my current self in this blog post. I want to capture the carefree optimism of embarking on a completely foreign adventure. I want to capture how proud I feel for making a tool that does what I want. I want to capture the hint of nervousness that exists on the perimeter, not knowing what's going to happen next. I want to capture the joy that comes with something new.

The joy of a first.
