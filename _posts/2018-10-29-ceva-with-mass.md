---
layout: post
title: "Weight for It: An Alternative Proof for Ceva's Theorem"
date: 2018-10-29
tag: Math
img: "https://images.unsplash.com/photo-1487266659293-c4762f375955?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjExNzczfQ&s=c329fbc11063a42b722fc2b7a9484e6c"
---

Math is unreasonably effective. It continues to surprise me by proving amazing results with relatively little to work with. I am going to attempt to convey one such proof here.

## Ceva's Theorem

Ceva's Theorem concerns triangles in "Euclidean plane geometry". That just means it deals with the triangles that we are all used to, elementary school stuff. I'll first formally state the theorem, and then try to provide insights into what the funky letters actually mean.

> Given a triangle $$ABC$$, let $$A'$$ be a point on the line $$BC$$, $$B'$$ be a point on the line $$CA$$, and $$C'$$ be a point on the line $$AB$$. Then the three lines $$AA'$$, $$BB'$$, and $$CC'$$ all intersect at the same point if and only if $$\frac{CA′}{A′B} \times \frac{AB′}{B′C} \times \frac{BC′}{C′A} = 1$$

What does that mean? First let's see an image of the setup.

![Ceva Triangle](/images/ceva-triangle.svg)

Now that we understand what we are dealing with... what does that formula mean? Lets look at one of the parts on the left hand side. What does $$\frac{CA′}{A′B}$$
represent? Well it's the ratio that the point $$C'$$ splits the line $$AB$$. You might ask why is it $$\frac{CA′}{A′B}$$ instead of $$\frac{BA′}{A′C}$$? Well it could be... but we have to be consistent as we do this for all three sides. If you look at the triangle, all the ratios have to be oriented in the same direction. That is, if you walked around the outside of the triangle, you would encounter the section on the top first every time you got to a new line segment. Therefore we actually have two different, but equivalent, formulas.

$$\frac{CA′}{A′B} \times \frac{AB′}{B′C} \times \frac{BC′}{C′A}=1 \text{ and } \frac{BA′}{A′C}  \times \frac{CB′}{B′A} \times \frac{AC′}{C′B}=1$$

## Proving Ceva's Theorem

When I was first taught Ceva's, the proof involved a clever use of areas. However I later learned an entirely different proof that used a concept called the Center of Mass. This is the proof that I will outline here.

The Center of Mass is a physical phenomena that we can intuitively understand. Take a ruler and try to balance it on the end of your finger. If you can do this, congratulations, you have found the center of mass. If you were to balance an eraser on one end of the ruler, your finger would have to move along the ruler to find the new center of mass (probably closer to the end with the newly added weight). This can be expressed as an equation quite nicely: For point $$R$$ to be the center of mass between two points $$P$$ and $$Q$$, and $$m_P$$,$$m_Q$$ be the two masses at $$P$$ and $$Q$$ respectively, then $$m_P \times PR = m_Q \times RQ$$. We will be using both this formula, and the notation $$m_P$$ for the mass at point P for the rest of this proof.

We need to start with a triangle $$ABC$$, and let's put arbitrary points on each side named $$A'$$, $$B'$$, and $$C'$$. Instead of trying to find Ceva's Theorem immediately, let's construct a few things. Let's put masses on $$A$$, $$B$$, and $$C$$ and then see where the center of mass would be. Since we are choosing the masses, we can make the center of mass align with the given points on each line.

So let's put a mass of 1 on point $$A$$ ($$m_A=1$$). What weight should we place on point $$B$$ such that the center of mass of the line $$AB$$ is exactly at point $$C'$$? If $$C'$$ was the midpoint, we could put a weight of 1 and be done with. However, $$C'$$ is an arbitrary point so the weight is going to be related to where $$C'$$ is put on $$AB$$. Using our formula we can see that $$m_A \times AC′= m_B \times C′B$$. If we substitute $$m_A=1$$ and rearrange we get $$m_B=AC′C′B$$.

The same argument can be made for what weight we should put on point $$C$$ such that $$A'$$ is the center of mass for the line $$BC$$. We get $$m_C=\frac{AC′}{C′B} \times \frac{BA′}{A′C}$$.

Now we have placed a mass at each point of the triangle. Here's a bold claim: if $$B'$$ is the center of mass between the points $$A$$ and $$C$$.... then the three lines $$AA'$$, $$BB'$$, and $$CC'$$ all intersect. This is because that point of intersection is the center of mass for the entire triangle. Since $$C'$$ is the center of mass of $$A$$ and $$B$$, then the center of mass of the triangle has to lie on the line connecting $$C$$ and $$C'$$. The same argument can be made for $$A'$$ and $$B'$$, illustrating my claim.

Now, $$B'$$ may not be the center of mass of points $$A$$ and $$C$$. We have $$m_A=1$$ and $$m_C=\frac{AC′}{C′B} \times \frac{BA′}{A′C}$$. Therefore $$B'$$ is the center of mass if and only if $$m_A \times B′A=m_C \times CB′$$. If we sub in the values for $$m_A$$ and $$m_C$$ and rearrange this equation we get $$\frac{CA′}{A′B} \times \frac{AB′}{B′C} \times \frac{BC′}{C′A}=1$$. There we have it!

The lines $$AA'$$, $$BB'$$, and $$CC'$$ intersect if and only if $$\frac{CA′}{A′B} \times \frac{AB′}{B′C} \times \frac{BC′}{C′A}=1$$. All of this was proved only using the concept of the center of mass, and some cleverly chosen weights.
