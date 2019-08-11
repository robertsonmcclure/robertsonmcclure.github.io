---
layout: post
title: Sinking your teeth into combinatorics
date: 2018-11-25
tag: Math
img: "https://images.unsplash.com/photo-1525678642543-94522bc9fdb2?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjExNzczfQ&s=3ce89e62ea887b8baace3a5ccb06b11f"
---

Not many people would describe high school math as memorable. However, my grade 12 teacher once posed a problem that has stuck in my head ever since. It's memorable for two reasons: the absurdity of the scenario, and the two solutions that were shown to us.

The problem was as follows:

> Imagine an island that has a bunch of castaways on it. Because they are castaways, they have varying levels of dental health. A human typically has 32 teeth, and on this island there is a castaway for every configuration of missing teeth. For example, there is exactly one person with all their teeth, 32 people with exactly one tooth missing (each in a different spot), and so on until we get to the last person, the only person on the island with zero teeth. If the island had a person with every single possible tooth combination, how many castaways are on the island?

It is a very weird question. I know. But interesting none-the-less.

This problem was introduced to us right at the same time we were learning "choose numbers" (also called combination numbers). It's an expression for the idea of: if I have N objects, how many different ways can I choose K of them. The notation for this is $$\binom{N}{K}$$. Whenever you see $$\binom{N}{K}$$, just read it as "N Choose K". So $$\binom{5}{0}$$ equals 1, because there is exactly 1 way to choose zero objects from a collection of 5. $$\binom{5}{1}$$ equals 5 because there are 5 ways to choose 1 object from a collection of 5.

There is an equation for Choose Numbers and it is:

$$\binom{N}{K}=\frac{N!}{K!(N−K)!}$$

Remember that $$!$$ is the factorial symbol, so $$X!$$ means $$X!=(X)(X−1)(X−2)...(3)(2)(1)$$. For example $$5!=(5)(4)(3)(2)(1)=120$$.

Choose numbers seemed like a fitting solution to this problem. We just have to sum $$\binom{32}{0}+\binom{32}{1}+...+\binom{32}{31}+\binom{32}{32}$$. Intuitively, this makes sense, and this was the solution that we arrived at in class. However, actually calculating that number would be arduous to do by hand.

This is when our teacher told us there was an easier way. To introduce this other method, he asked us to imagine that humans only had one tooth (ew). How many people would be on the island then? Easy: two. One person with, one person without. What about if humans only had two teeth (again, ew)? Still easy: four. If we consider every space where a tooth could go as being either filled or unfilled, we can see that the number of different combinations ends up being 2 to the power of the number of spaces.

Therefore, the solution to the original problem is $$2^{32}$$. So much easier! This also gives us the neat relation that if we sum $$\binom{N}{0}+...+\binom{N}{N}$$, we get $$2^N$$, which was super unexpected.

Combinatorics is a lot of fun because of the many different ways to solve the same problem, and that if you do it right: every method should give the same answer!
