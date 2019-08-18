---
layout: post
title: How to Tweak the Theme of a Ghost Blog
date: 2019-02-12
tag: February Challenge
img: "https://images.unsplash.com/photo-1549871306-587d56d36b2d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjExNzczfQ"
---

Welcome to my journey learning how to update this blog's theme.

The first thing I have to do is install [Ghost locally](https://ghost.org/docs/install/local/) so I can run a development build. After running `ghost install local` in a new directory, I found myself a fully functional new blog running locally on my laptop at `http://localhost:2368`.

I'm going to skip over describing how annoying sorting out the versions of `node`, `npm`, `yarn`, and `ghost-cli` was.

My goal for this exercise is to change the _reading time_ displayed in the bottom right hand corner of a post-card to the _date_ that the article was published.

![Ghost post original](/images/ghost_post_original.png)

After skimming the details on how [a Ghost file system is structured](https://ghost.org/docs/api/v2/handlebars-themes/structure/), I copied the default theme Casper (what I'm currently using) into a new theme that I renamed Scrooge. The first file to peek into is `index.hbs`. The home page is generated from this file, so it makes sense to start here. It took me a couple of seconds to realize that this isn't what I wanted. Here's the snippet that caught my eye.

```
\{\{#foreach posts}}
\{\{!-- The tag below includes the markup for each post - partials/post-card.hbs --}}
\{\{> "post-card"}}
\{\{/foreach}}
```

I love comments that tell me exactly what I want to know! On to partials/post-card.hbs. Immediately the line that I wanted to change jumped out at me:

```
<span class="reading-time">{{reading_time}}</span>
```

Alrighty... now how do I change it. First of all, I have no idea where reading_time comes from, and what other variables I might have access to. Instead of wading through documentation, I could probably check out post.hbs to see how the date is displayed on the post page itself. It can probably be done in the same way.

```html
<time class="post-full-meta-date" datetime="\{\{date format="YYYY-MM-DD"}}">\{\{date format="D MMMM YYYY"}}</time>
```

Superb! That's exactly what I wanted. What happens if I just directly copy and paste that into the `post-card.hbs` file?

![First idea](/images/ghost-post-first-idea.png)

However, I'm not sure I like the blue colour, or the placement of the date in the bottom right hand corner. Now that I think about it, switching the date and the primary tag would probably look better. The date makes sense to be paired with the title, and the tag is extra information and doesn't need to be so physically close to the title.
Updated Post-Card template!

![Second idea](/images/ghost-post-second-update.png)

Okay, I really like that. This looks production ready to me! Ghost encourages you to run a program called `gscan` to ensure there are no errors in the theme.

> 108 Passed Rules ~GScan Results

Amazing! Now I need to figure out how to use this newly edited theme on my actual blog. Thankfully Ghost makes this process super easy. First I compressed my new theme's folder to a file called `scrooge.zip` and then uploaded using the Ghost Admin App.

![Upload a theme](/images/upload-a-theme.png)

At first glance, everything seemed to be OK.

![Theme options](/images/theme-options.png)

But if I've learned anything... it's that you've always got to follow up and verify that everything actually works. When I navigated to my live website: this is what I saw.

![Website broken](/images/website-broken.png)

Oh no! The entire site header, which included the navigation, just straight up vanished! Now I have to figure out what went wrong. Can I reproduce this issue on the local development copy (did I really not notice it missing when I checked if the date worked)?

No, that's not it. Everything, including the header and navigation, shows up correctly on the local copy... so something is amiss. Time to do some random googling to see what shows up.

Nothing showed up from googling.

After a little bit of fruitless efforts, I finally discovered what the issue was. I was poking around and this section of my Ghost App caught my eye.

![There's an issue](/images/option-issues.png)

The version of Casper that I copied to adjust was version 2.9.2, but the version of Casper running on my website right now is version 2.6.3.

I'm assuming that the variable names to reference the header and navigation were changed between these two versions, and that is the reason why I can't just seamlessly switch.

What do I do now? I'm going to hit the **download** button to get version 2.6.3, and then modify the two lines I have to so that the date goes above the title, and the primary tag goes in the bottom right.

After that I simply zipped the folder and uploaded it again. Did it work this time?

![It works now!](/images/updated-website.png)

That was a fun little foray into developing a Ghost Theme. I set out with a very specific goal, and wrote this blog in tandem with the development. You got to see the very real issues I faced, and how I overcame them. I'm including screenshots of all of this incase I continue to mess with this theme in the future.

The Moral of the Story? Double, no, triple check your version numbers, they're kind of important.

PS. Did you notice the npm version number foreshadowing at the beginning? Me neither, and that actually happened.

PPS. There are always more bugs. I went to my site to see how this very article turned out and noticed something funky with the images.

![Website images not aligned](/images/other-website-bugs.png)

It took me a second, but I realized the mistake that I made. After I downloaded Casper version 2.6.3, I copied the file I had first used and replaced the Casper version 2.6.3 post-card.hbs with a modified version of Casper version 2.9.2 post-card.hbs. This is why the styles for just the post-card is different. Instead of just copying the file in, I need to edit the post-card.hbs file from Casper version 2.6.3.

![Fully fixed blog post](/images/fully-fixed-blog-posts.png)

Finally, my blog's theme is done.
