---
layout: post
title: "I Love Atom"
date: 2016-05-22T00:00:00.000Z
tags: [technology]
excerpt: Just last week I started working for StockRender, a start up based in Toronto.
---

Just last week I started working for [StockRender][1], a start up based in Toronto. This is a big moment for me because it's the first time that I've been paid to write code. Part of me wishes that I could have started sooner, been involved more, attended Hackathons, committed daily on Github or anything really. However I'm glad I have the experiences that I've garnered over the years, and wouldn't change it even if I could. That being said, I am a bit behind the times when it comes to professionally developing.

At UofT, I recently finished a course that was taught in C. We were encouraged to use the command line for everything and write all our programs in [Vim][2]. I never really took to [Vim][2] shortcuts, it was just too hard to break away from my old habits. Since the only time I wrote code was for school, I never really had a developing environment set up on my laptop. I used [Vim][2] when I needed to make some changes and that was about it. Upon joining [StockRender][1], I knew I needed to make some changes.

I had used [Sublime][3] before, but was annoyed at the popups asking for money. What I was really looking for, was a fully customizable text editor that was a cross between [Vim][2] and [Sublime][3]. Enter [Atom][4].

I stumbled across [Atom][4] completely by accident. I don't remember where I first saw it, or why it looked intriguing enough to click through. However, once I began reading about [Atom][4], it seemed to be exactly what I was looking for. Additionally, when I brought up the topic of developing environments to the [StockRender][1] team, one of the senior developers was using [Atom][4], and would be able to mentor me in using the editor. Little did I know that in only a few days of using [Atom][4], I would be sharing tips and tricks for workflow optimization with him.

# Getting Started with Atom

If you visit [Atom][4], you'll be greeted with their slogan _A hackable text editor for the 21st Century_. Hackable is exactly the way to put it. Everything in [Atom][4] is customizable, but we'll get into that in more detail later. They provide an amusing advertisement for their product with a [video](https://www.youtube.com/watch?v=Y7aEiVwBAdk) embedded on the site.

I would recommend downloading [Atom][4] if you haven't yet, as it is completely function out of the box for those who don't have the time or desire for customizations. However, if you're interested in making [Atom][4] your one stop shop for everything, read on.

## Themes

Atom has a couple of default themes available out of the box. Personally, I really enjoy the [One Dark UI Theme](https://github.com/atom/one-dark-ui). There are also a ridiculous number of user created themes that can be easily downloaded through the package manager that can be found under Settings.

A few blogs recommended [Monokai](https://atom.io/themes/monokai), and I like the look. Themes aren't all that important to me, I just like light text on a dark background paired with an easy to read font.

### But I don't like X, Y, Z ...

[Atom][4] has got you covered, you unhappy with pre-existing styles complainer. Any feature a theme that you've installed can be over written by going to the Config Folder, a link can be found in the Settings Page, and simply editing the code that runs [Atom][4]. Yes, [Atom][4] was built using HTML, CSS, JavaScript and Node.js. You can very well change how [Atom][4] functions by simply editing the code that runs it. This is why they advertise [Atom][4] as **_a hackable editor_**.

## Packages

There are so many packages available, I didn't know where to start. After reading blog post after blog post, and conferring with my colleagues, I believe I've found the most useful (to me at least) packages currently available on Atom.

### [color-picker](https://atom.io/packages/color-picker)

For anyone that deals with web applications, or any sort of UI, this is a must have. I used to open up a hex code generator in my browser to determine what color I needed. Now it's a simple double click away. Combined with next package, using colors in my projects is fast and simple

### [pigments](https://atom.io/packages/pigments)

Pigments goes hand in hand with color-picker as the best way to manage your color scheme. It highlights any hex code, or representation of color, with the corresponding color. Now you can tell at a glance what color is being used, and can change it in a heart beat.

### [git-plus](https://atom.io/packages/git-plus)

git-plus has replaced all the tiny scripts I created to automate the tedious task of adding, committing and pushing updates. I frequently use _Git Plus: Add All, Commit and Push_, which does exactly what it sounds like. It opens up a small window that allows you to type a commit message, and then does all the grunt work for you, eventually returning a small status update in the form of an inconspicuous box at the bottom of your screen.

### [terminal-plus](https://atom.io/packages/terminal-plus)

For all the other tasks that you need to do using a CLI, terminal-plus is there for you. After I discovered this feature, and demonstrated how amazing it was to my colleagues, it convinced every single one of them to switch to using [Atom][4]. It creates a small terminal window at the bottom of your screen, completely within [Atom][4]. Gone are the days when switching between windows was a necessity. Opening and closing the terminal is as easy as a convenient shortcut, which I'll cover in more depth later. It allows you to name your tabs in terminal, color code them, and much more.

### [minimap](https://atom.io/packages/minimap)

The package that makes old [Sublime][3] users feel more at home.

### [editorconfig](https://github.com/sindresorhus/atom-editorconfig)

Finally, editor config is just so useful when working in a large team. Coding styles debates can create [decade long conflicts](https://www.jwz.org/doc/tabs-vs-spaces.html) about just about anything.

### et cetera

There are so many more packages out there, that I have neither the time, nor will, to document. I hope I have encouraged you to go exploring yourself, to find the ones that benefit you the most.

## Keyboard Short Cuts

I am in love with keyboard short cuts. I own a 13 inch Macbook Air from early 2014, that I got for going off to university. It was small, light and did everything that I needed it to. I also just love the aesthetics of [Apple](http://www.apple.com/ca/) products. I've never owned a desktop computer so a mouse is not my preferred interface. Keyboard short cuts allow my fingers never to leave the home row, creating an efficient experience. The track pad is used if necessary, but if I'm working on anything text based, keyboard short cuts are going to be created and used often. The fact that everything in [Atom][4] can be given a shortcut, and the fact that most everything already has one, was so appealing that I dived straight into learning, and creating the most useful ones for me. The following are the ones I use on a daily basis that I believe could be useful for anyone using [Atom][4].

### Command-Shift-P

If you use [Atom][4] at all, you need to know this command. This opens up the Command Palette which gives you access to the rest of these commands. I'm going to refer to the full name of the commands from now on, so you can easily see which one I'm referring to in the Command Pallete.

### Pane: Split Right and Move Active Item

This was one of the first commands that I began using frequently. Like most commands, it's aptly named. Long story short, if you have two files opened as tabs, simply enter this command and it'll be split side by side, allowing your eyes to dart back and forth. The more I use this command, the more the Command Palette suggests it to me, so much so that I can type "srm" and it will auto suggest exactly what I want.

### Markdown Preview: Toggle

Excellent for previewing what your README.md will look like. Automatically opens in a pane to the right of your current Markdown file, eliminating the need for my above command. Very useful for anybody who doesn't write Markdown files often.

### Dealing with terminal-plus

The two commands that I use to deal with terminal-plus are Control-backtick and Command-Shift-X. Control-backtick opens and minimizes the window, while Command-Shift-X closes the active tab of the terminal. If you use multiple tabs in the terminal and need to switch between them quickly, the keyboard shortcuts for this action actually take inspiration from [Vim][2]. Use Command-Shift-J and Command-Shift-K to shift left and right respectively between the active tabs.

### Command-\

Toggles the tree view. I need to maximize my screen space, as 13 inches can be quite restrictive at times. Although I do enjoy having the tree view visible most of the time, because it highlights files with respect to the git status of my directory. Files that have not been added yet are green and modified ones are yellow. I believe this functionality came from the package [git-diff](https://github.com/atom/git-diff), which also shows which lines have been added, modified and deleted from each file elegantly.

### Command-/

Comments out the line you're on by adding "// " before it. Also works for any highlighted section. This doesn't really require any futher explanation.

### Command-L

Highlights the line you're currently on, and if you continue to tap the L key while holding Command, it continues to grab one more line below. Paired with Command-/, this is an extremely fast way to comment out large sections of code.

### Command-,

Opens up Settings, very useful when you're first learning everything

### And more ...

There are way too many to comprehensively list here. I highly suggest checking out the keybinding section of the Settings page, which gives an exhaustive list to all the keyboard shortcuts **currently** installed on [Atom][4]. Of course, you can edit the current ones are add completely new ones by either downloading packages or writing your own lines of code in the keymap.cson file that is linked in the Keybindings section of Settings and has a comprehensive guide to writing your own keybindings commented out at the top of the file.

## Wrapping up

I am very new to [Atom][4], so this is a snapshot of my current state of mind towards my text editor. Over the coming months and years I'll continue to develop my workflow, and hopefully it'll be nice to look back on my current thoughts about [Atom][4]. If you're reading this, I hope I've conveyed exactly why I love [Atom][4] so much. If you find any awesome packages that you think I should know about, please let me know.

[1]: http://stockrender.com/ "StockRender"
[2]: http://www.vim.org/ "Vim"
[3]: http://www.sublimetext.com/ "Sublime"
[4]: https://atom.io/ "Atom"
