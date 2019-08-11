---
layout: post
title: A Bit of Binary Fun
date: 2018-12-10
tag: Computer Science
img: "https://images.unsplash.com/photo-1505946061903-08cfdc4028d3?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjExNzczfQ"
---

Many educators justify teaching binary (base 2) because it's how computer represent numbers. As compelling as this argument may sound, I believe that binary numbers are much more interesting.

Binary numbers can be used to solve certain logic problems, and I believe that they truly shine in this capacity. For example, a previous post about combinatorics can be seen as a binary counting problem. Instead of rehashing it, I will present two very different problems that admit elegant binary solutions.

## A Poisoned Bottle of Wine

> You have 1,000 bottles of wine, and exactly one bottle is poisoned. You need to find the poisoned wine before your party starts in an hour. You have 10 rats to test on to find out which bottle is deadly. The poison takes effect after an hour of consumption, so you only have one chance to run your rat poison experiment, meaning you can't feed some rats wine and wait an hour before feeding them more wine. Assume each rat can drink as much wine as you feed it. How do you find the poisoned wine?

The exact wording of this question was taken from Curiosity.com, but I first encountered a very similar variation back in high school math class.

When I first encountered this problem, it asked how many bottles of wine we could confidently drink. My first solution was to number all the bottles, and then give a drop of the wine from each of the bottles 1 - 100 to rat #1, a drop from bottles 101-200 to rat #2, and so on. That way when one of the rats died, we could drink from 900 of the bottles confidently.

However, this is not the best solution. There is a way to confidently drink from 999 of the bottles. This is where binary numbers come into play. If we once again label every bottle from 1 to 1,000, but this time write each number as it's binary representation, the answer appears. 1,000 is less than 1,024, which is $$2^{10}$$. If we arrange the rats in a line, and then feed them from each bottle in a way that corresponds to the binary representation of the number, when some of them die after one hour we can know exactly which bottle was poisoned. For example, for bottle number #835, which is 1101000011 in binary, we would give a drop of that bottle to the first, second, fourth, ninth and tenth rat. Then if those five rats died, we would know for sure that the poison was in bottle #825 because that is the only bottle that those particular five rats drank from and the other five did not.

Binary numbers are a great fit for this solution because the problem deals with simple binary questions: is the wine poisoned or not. For every rat we have, we double the number of bottles we could check. This property is also why binary is used by computers, because our hardware can only check if a current exists or it doesn't. It does not have the capacity to detect more fine grained differences. As humans we can use non-binary systems of counting because we can differentiate between 1 and 7 visually.

Other variations to this question could be:

-   How many rats are needed to find the poisoned bottle of wine in 1,000,000 bottles?
-   How many rats would you need to find two poisoned bottles of wine in 1,000?

## The Lonely Integer

> You have a list of numbers. Every item in this list occurs twice except for one of them, the lonely integer. For example: [1,3,4,1,8,3,8] is a list of pairs of duplicates where the lonely integer is 4. How do you find the lonely integer in a list of arbitrary length?

A possible solution would be to iterate through the list and check the rest of the list for its duplicate.

```python
def lonely_int(arr):
    for index, num in enumerate(arr):
        if num not in arr[:index] and num not in arr[index+1:]:
            return num
    print("No lonely integer!")
```

However, the astute observer will notice that the runtime is $$O(n^2)$$. We can do better. Perhaps your next idea involves a hash map or something, but the title of the post might have given away the solution I'm about to present.

If we take the binary representation of all these numbers, and stack them on top of each other like we're adding in grade school, something might jump out at you. For example: [5,13,2,3,13,5,2] would look like

```
5  -> 00101
13 -> 01101
2  -> 00010
3  -> 00011
13 -> 01101
5  -> 00101
2  -> 00010
```

If we count the number of 1s in every column, we can see that there is an even number of 1s in every column except for the two columns on the far right. This is because the binary representation of every number appear twice, except for 3, which only appears once. Also 00011 is the binary representation of 3!

The bitwise operator XOR toggles a bit to 1 if the bits are different in the two arguments. Thus if we XOR all the numbers in the list together, our result will be the lonely integer!

```python
def lonely(arr):
    result = 0
    for num in arr:
        result ^= num
    return result
```

The properties of binary numbers can be used quite successfully to represent some complex logic problems. So instead of instinctually reaching for your hash map next time you need to optimize a solution, take a second to consider if the humble 0 and 1 could help you out.
