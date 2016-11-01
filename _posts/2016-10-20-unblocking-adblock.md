---
layout: post
title: Unblocking Adblock
date: 2016-10-20
tags: [technology]
img: block-ads.jpg
---

I love [AdBlock](https://getadblock.com/), advertisers do not. I just don't like ads, but websites do. Advertisements make money for sites so it makes sense that some have started to try and get their users to stop using services like AdBlock. Some sites do this in a nice way, and this works every now and then.

<amp-twitter width="486" height="657" data-tweetid="787893895271186432" layout="responsive"></amp-twitter>

However, other websites are less tactful and simply lose visitors.

<amp-twitter width="486" height="657" data-tweetid="788818055254122496" layout="responsive"></amp-twitter>

> For the sake of readability, I will refer to any ad blocking service as AdBlock

The thing about AdBlock is that it's no longer used just for removing pesky ads from your peripheral vision. AdBlock also [deals with malware](http://www.makeuseof.com/tag/adblock-protect-browser-malware/) and turning it off can be dangerous.

For example, in December 2015 [Forbes started experimenting with blocking visitors using AdBlock](http://www.wsj.com/articles/forbes-tests-new-tactics-to-combat-ad-blocking-1463133628). With Forbes taking such a hard stance against AdBlock it had the potential to set the precedent for how websites balanced AdBlock users and revenue generated from ads. The problem was that once you did turn off AdBlock, you were immediately served with [ads filled with Malware](http://www.networkworld.com/article/3021113/security/forbes-malware-ad-blocker-advertisements.html). This eventually led to Forbes becoming [more lenient with AdBlock](http://www.niemanlab.org/2016/06/forbes-has-quit-bugging-some-people-about-their-adblockers/).

However, this has not stopped other sites from trying to enforce the disabling of AdBlock. For example, [Wired gives two options](https://www.wired.com/how-wired-is-going-to-handle-ad-blocking/), either add Wired to the AdBlock's whitelist or pay for the privilege of not seeing ads through a weekly subscription.

The whole _Disable AdBlock_ or _Pay Money_ decision is incredibly unappealing to me. Other sites have realized this and are taking different approaches. One such website is Narcity, who changes the option from _Pay Money_ to _Give Us Data_. So instead of disabling AdBlock, they simply ask you to sign up through Facebook. [This gives them data](http://www.narcitymedia.com/blog/addressed-ad-blockers-happened/) and lets them customize your future experiences. I'm not a fan.

I didn't like it when Facebook, Twitter or Instagram changed from [chronological feeds to algorithmic feeds](http://www.makeuseof.com/tag/how-and-why-to-disable-algorithmic-feeds-on-twitter-instagram-and-facebook/). This effectively means that some content is hidden from your view. I know that these companies want you to enjoy your time using their platform, so they'll serve content that makes you happy. This can lead to your view of social media being exclusively [people that share your views](http://www.forbes.com/sites/stevenrosenbaum/2016/05/31/the-facebook-curation-controversy/#28a5f8f34207). If that's what floats your boat then so be it, but I prefer to choose what I read and believe myself.

This still leaves us with another option. Don't go to that website. It's a very easy principle to practice. When a website asks you to turn off AdBlock, just close that tab and never look back. Unsurprisingly, [this is happening to a lot of sites that are using this strategy](https://thestack.com/world/2016/04/21/sites-that-block-adblockers-seem-to-be-suffering/). However, it may hard for some sites. Brand loyalty is still a thing that exists, so giving up on a trusted news source could be a challenging decision.

There is still one more option.

If these are your goals, then perhaps I can help:

- Always keep AdBlock on
- Read stuff on the internet
- Don't pay for the privilege of not seeing ads
- Don't give your data away willy nilly

All that you need to do is right click and select Inspect. If you decide to go through the DOM elements, you'll see that some are there to prevent you seeing the rest of the site. Since each site does this differently, I can't provide a one-size-fits-all solution... but I can show you how I dealt with a specific website.

Let's look at Narcity, because this was the first site that I encountered anti-AdBlock measures. If we Inspect and start looking through the elements, we see the following:

```html
...
<nav class="top-nav"></nav>
<header class="header ablk-slid">...</header>
<div class="ablk-login-slide-back shown" style="display: block;"></div>
<div class="ablk-login-slide shown" style="display: block;">...</div>
<div class="ad-bottom-floater">...</div>
<div id="container" class="ablk-slid">...</div>
...
```

My first instinct was to simply delete

```html
<div class="ablk-login-slide-back shown" style="display: block;"></div>
<div class="ablk-login-slide shown" style="display: block;">...</div>
```

since they were very obviously the divs that were obstructing my vision. If you actually go to [the Narcity article that I'm using](http://www.narcity.com/toronto/24-midterm-struggles-that-have-all-students-in-tears-right-now/) and test out what I'm doing, you'll see that this doesn't quite solve the problem. First of all, the content is slid to the right making most of it unreadable. Also, scrolling is disabled.

On further inspection I noticed that there was a class called `ablk-slid`. Thank you for the informative name! You can double click on the element and edit the text, so I removed that class. Lo and behold, the content went back to it's proper place on the page! But scrolling still didn't work.

After a quick google search, I found that a way to disable scrolling is with the css `overflow: hidden;` applied to `html` and `body`. So I went to `html` and `body` and sure enough, I found `style="overflow:hidden;"` in both of them. Double click, mash the backspace key, and voilà!

The website is back to normal! No whitelisting, payments or data needed.

Check it out in action:

<amp-youtube
    data-videoid="755IosqbMZ8"
    layout="responsive"
    width="480" height="270"></amp-youtube>
