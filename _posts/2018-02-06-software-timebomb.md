---
layout: post
title: Software Timebomb
date: 2018-02-06
---

On a Monday evening, I received a complaint from a customer using [Doctor Volleyball](https://doctorvolleyball.com). The site was broken. He couldn't navigate around or create a new scouting report. Since I was in the middle of a volleyball practice at the time, I asked for a video of him demonstrating the problem. 

It wasn't that I didn't _believe_ him... it was that I last updated the site on January 30th, and had recently used it to scout UofT vs Western on February 2nd, and none of the issues described were present. 

So imagine my surprise when I receive a video of him demonstrating a clearly broken site. 

![broken](/images/broken_drvb.png)


I noticed he was using Chrome on Windows, and I use Chrome on Mac. That was my first thought. However, it was also broken when I opened it using Chrome. Perhaps it's a Chrome issue. So I brushed the dust off of Safari and loaded Doctor Volleyball. Everything rendered correctly: 

![broken](/images/normal_drvb.png)

I then opened up my Chrome settings to see if it had updated since February 2nd... and it had not. **This was weird**. 

My next plan of attack was typing everything I could think of into Google. At first all the results for `bootstrap navigation bar broken` were articles from 2014-2017, nothing recent. I then started to investigate the `react-bootstrap` library that I was using for the navigation bar and the modal popups. On the [Pulse](https://github.com/react-bootstrap/react-bootstrap/pulse) page, which showed everything from January 30th to February 2nd, so I started to look through the issues. 

Issue [#2983](https://github.com/react-bootstrap/react-bootstrap/issues/2983) proved to be useful. In a nutshell, `react-bootstrap` had instructed its users to included the `latest` version of bootstrap's css in their code. However, when `bootstrap` updated itself to `v4` which is *not* fully backwards compatible, a whole lot of stuff broke in the `react-bootstrap` library. 

> Including third party libraries without specifying the exact version number is like having a timebomb in your codebase.

The solution was changing 

```html
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css">
```

to

```html
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
```

A lot of other people have been [pulling their hair out](https://github.com/react-bootstrap/react-bootstrap/issues/2984) over this issue. This has made me comb through the repositories that I manage in search of other timebombs. I hope it inspires you to do the same. 