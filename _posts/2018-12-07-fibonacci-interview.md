---
layout: post
title: Cracking the Fibonacci Interview Question
date: 2018-12-07
tag: Computer Science
img: "https://images.unsplash.com/photo-1448454050639-2f8d4bf26975?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjExNzczfQ"
---

Fibonacci numbers are the defacto example for recursive programming, but is there a better way to generate them?

First of all, fibonacci numbers are really really cool. 0, 1, 1, 2, 3, 5, 8, ... you know the pattern. Did you know that if you take two consecutive terms in the sequence and divide them, you get an approximation for phi ($$\phi$$ = 1.618...). $$\phi$$ deserves a post onto itself, so instead of talking about $$\phi$$, let's look at different ways to generate the fibonacci sequence.

For consistency, we will call the fibonacci term $$0$$ the $$0^{th}$$ element and 1 the first etc. So the fibonacci sequence is defined by this formula

$$F(0) = 0, F(1) = 1, F(n) = F(n-1) + F(n-2) \text{ for } n >= 2$$

All it says is that the first two terms are 0 and 1, and every term after that is the sum of the previous two. Since this is a recursive definition, it seems fitting to start with a recursive programming solution.

> In order to understand recursion, you must understand recursion!

## Recursive Solution

```python
def fib(n):
    if (n < 2):
        return n
    return fib(n - 1) + fib(n - 2)
```

Pretty straight forward right? For the $$n^{th}$$ fibonacci number, this function works like a charm.

However, it's really inefficient. Consider calling fib(10), it will then call fib(9) and fib(8), so far so good. However, fib(9) will call fib(8) as well, duplicating the work that needs to be done. This problem only gets exacerbated the farther we go down, as fib(3) will be called a bunch. If you want to do the math, we wind up with an $$O(2^n)$$ runtime. This is because we recalculate values we've already dealt with. Let's try it again, but with memoization!

## Memoized Solution

```python
def fib_recursive(n, memo):
    if n in memo:
        return memo[n]
    return fibr(n-1, memo) + fibr(n-2, memo)

def fib(n):
    memo = { 0: 0, 1: 1 }
    return fib_recursive(n, memo)
```

This code stores the solution for fib(n) so that if it ever needs to be used again, it does not have to be recalculated. This is still a recursive solution though, so the call-stack is $$O(n)$$... we can do better.

By the Church-Turing thesis (glossing over a lot, but you get the point), every recursive solution has an iterative solution as well. For this next solution, we'll take a hint from dynamic programming and iterate backwards, from $$1$$ all to way to $$n$$.

## Dynamic Programming Solution

```python
def fib(n):
    vals = [0, 1]
    for i in range(2, n+1):
        vals.append(vals[i-1] + vals[i-2])
    return vals[len(vals) - 1]
```

This is cool and all, totally eliminating the call-stack that the recursive solutions created (even with memoization), but can we do better? We have $$O(n)$$ space complexity, because we are creating a list that will eventually contain $$n$$ entries... but do we need all those entries? After we calculate fib(3) and fib(4), we really don't need the value of fib(2) anymore.

## Iterative Solution

```python
def fib(n):
    if (n < 2):
        return n
    two_before = 0
    one_before = 1
    result = 1
    for i in range(2, n+1):
        result = one_before + two_before
        two_before = one_before
        one_before = result
    return result
```

We now have $$O(n)$$ runtime, and $$O(1)$$ space complexity. Amazing!
Yeah but, can we do better?

## Cold Hard Math Solution

If you do a little digging on the internet you might come across Binet's Formula for the $$n^{th}$$ number of the fibonacci sequence.

$$Fib(n) = \frac{1}{\sqrt{5}}\Bigg(\Bigg(\frac{1 + \sqrt{5}}{2}\Bigg)^n - \Bigg(\frac{1 - \sqrt{5}}{2}\Bigg)^n\Bigg)$$

When I first saw this, I didn't believe that it would only produce integers. Where does the $$\sqrt{5}$$ come from you might ask? $$\phi$$, it's all because of $$\phi$$. $$\phi = \frac{1 + \sqrt{5}}{2}$$ and $$\phi^{-1} = \frac{1}{\phi} = \phi - 1 = \frac{-1 + \sqrt{5}}{2} $$. This means that the above equation can be rewritten as

$$Fib(n) = \frac{\phi^n - (-\phi)^n}{\sqrt{5}}$$

The fact that this equation uses irrational numbers and square roots and always produces an integer for every integer input is truly astounding. This leads us to the most performant fibonacci solution:

Shoutout to my $$10^{th}$$ grade math teacher for blowing my mind with Binet's Formula.
