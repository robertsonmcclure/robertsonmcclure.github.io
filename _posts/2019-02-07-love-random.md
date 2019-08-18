---
layout: post
title: How I Learned to Stop Worrying and Love Randomness
date: 2019-02-07
tag: February Challenge
img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjExNzczfQ"
---

Sometimes you don't need a definite plan. Sometimes it's better that way.

While taking CSC473: Advanced Algorithms at the University of Toronto, we learned about Randomized Algorithms. These algorithms are different from our common notion because they employ an element of randomness and may not work every time. However, using probability we can determine what the likelihood of not working is, which allows us to get the probability of failure below an arbitrarily small threshold.

There are two flavours of Randomized Algorithms: Las Vegas algorithms and Monte Carlo algorithms. These differ by which part of the algorithm the probability plays a part in.

| Algorithm Type | Running Time  | Correctness   | Example                                                                      |
| -------------- | ------------- | ------------- | ---------------------------------------------------------------------------- |
| Las Vegas      | Finite        | Probabilistic | [Quicksort](https://en.wikipedia.org/wiki/Quicksort)                         |
| Monte Carlo    | Probabilistic | Definite      | [Monte Carlo Algorithm](https://en.wikipedia.org/wiki/Monte_Carlo_algorithm) |

One of the first algorithms examined was Closest Pair of Points. This problem is simple to state and understand

> Given a set of points in a plane, find the two points that are closest.

Two years prior in CSC373: Algorithms, we discussed this very problem and solved it using a technique called Divide-and-Conquer. As the name suggests the idea of the algorithm is to divide the plane in two sections and then check each side separately. This process is continued until there are only two points in the area that you are checking and thus those must be the closest, and you compare them to the other plane you were checking. The catch comes that the closest pair might exists on either sides of the divide you inserted, so you have to cleverly check for that case. The exact details can be found elsewhere on the internet, or hinted at in [this Wikipedia article](https://en.wikipedia.org/wiki/Closest_pair_of_points_problem).

Why did we use Divide-and-Conquer in the first place? Well the naive solution would be to check every pair of points in the plane, which would take time on the order of $$n^2$$. The Divide-and-Conquer algorithm on the other hand, runs in time $$O(n\text{log}(n))$$, which is a significant increase for large values of $$n$$.

Now you might be asking, is there a way to do better... perhaps with a randomized algorithm?

The randomized algorithm for Closest Pair of Points is a Monte Carlo type algorithm, meaning that it always finds the closest pair but has an expected running time instead of a definite running time. The crux is that the expected running time is linear, which means in runs in proportion to the number of points, $$O(n)$$. It's done by doing a technique called randomized incremental construction. That means that it iteratively builds a solution, and at the end the answer can be extracted.

Instead of giving the whole proof in details, I'll give an overview with [a link to the full solution with analysis](https://www.cs.umd.edu/~samir/grant/cp.pdf). First you order your points in a uniformly random order. This is the only spot where randomness comes into play, but it is important. Next you take the first two (random) points and pretend like they are the only two points you need to worry about. You make note of their distance so that if the algorithm stops now, you can return the "closest pair" distance. One last thing you do is to draw a grid around those points that guarantees they are not in the same square (you can do this by choosing the grid gap width to be half of the distance between the points) which will help you out later.

Now we just take the next random point and try to insert it into the grid. The grid helps us detect if the new point is closer to one of the existing points in the grid than the previous "closest pair". If so, we insert it and redraw the grid. If not we simply insert it and then take the next random point and repeat.

The analysis for why this algorithm runs in linear time can be summarized by claiming that every operation runs in constant time except for redrawing the grid. However, the more items there are in the grid the less likely it is to be redrawn, this balances out perfectly and the entire operation runs in linear time because every point gets inserted into the grid.

Aside from using the grid to bookkeep, this is a fairly intuitive concept. I remembered it while watching a recent CGP Grey video about boarding airplanes.

<figure class="kg-card kg-embed-card"><div class="fluid-width-video-container"><div class="fluid-width-video-wrapper" style="padding-top: 56.25%;"><iframe src="https://www.youtube.com/embed/oAHbLRjF0vo?feature=oembed" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" name="fitvid0" frameborder="0"></iframe></div></div></figure>

In the video, CGP Grey shows that the neat and ordered algorithm that airplanes currently use to board (back-to-front) actually performs worse than the randomized algorithm of first come first enter. It seems crazy but the math backs it up.

Here's the part where I make the jump and imply that this philosophy can also apply to your life. You do not need a concrete plan that takes everything into account. It's impossible and will probably perform worse than taking randomness in stride and going with the flow.

Enjoy chaos and let your overarching plan guide you instead of confine you.
