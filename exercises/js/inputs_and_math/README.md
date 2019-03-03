# Functions, Comparisons and a Calculator

This exercise leverages data attributes, html and javascript to build a simple calculator that can be used to relate current events to the average user.

## Preflight

You know the drill.
1. Pull an update for `edu`
2. Your repo should be called `inputs_and_math`
3. Copy/paste the skeleton (no `readme` or `solution`) into your newly-cloned repo
4. Before you begin, commit what you have (from the copy/paste) so that you have a clean skeleton to reset to should you need to
5. No peeking at the solution

## Preview

https://tc-mccarthy.github.io/edu/exercises/js/inputs_and_math/solution/

## Exercise
In the interest of time, the stylesheet and a skeleton of the HTML has been provided for you. We will go over the styles in class so make sure you add comments to your copy of the project to remind yourself about the finer points of the page. This exercise is based on data found in [the New York times](https://www.nytimes.com/2018/03/05/us/politics/trump-tariffs-steel-aluminum-nafta.html) about a 25-percent tariff President Trump placed on steel along with a 10-percent tariff he would place on aluminum. He recently held off on implementing tariffs on additional Chinese imports in a show of good faith in trade talks with China.

The pretext of this exercise is that you are an interactive journalist working for a construction trade magazine and have been tasked with helping readers calculate the impact this would have on their cost.

1. Within the calculator is a table. Tables are made up of rows `tr` and cells `td`. Header rows are made up of `th`. We'll need a way to tell javascript which rows are items vs. which rows are not. __Hint: We did something similar in handling filters.__

2. Javascript is also going to need to know the tariff value for specific items. We can do this by attaching a `[data-tariff-percent]` to each item. Every item will need one of these, even those that don't have a proposed tariff, we'll need mathematically sensible way to handle this.

3. Our JS is also going to need to know which cells contain quantity values and which are cost values. Assign them `.qty` and `.cost` respectively.

4. All `.qty` and `.cost` fields will need to be numeric and only positive (or 0).

5. The labor row is a bit different because it deals with people instead of materials. We can let the user know they need to enter the number of workers in the quantity field and the wage they'll pay each worker in the cost field by adding a `[placeholder]`.

6. Preview the page on mobile. Does it look ok? **Perfect.**

7. We want to listen to all of our inputs for `keyup keydown keypress change` -- because different browsers fire different events as values are added to `input` fields.

8. Every time there is a change we want to fire a function that captures the tariff for the item, the cost of the item and the quantity of the item. We then want calculate the total cost and display it to the user. Then we want to add on the tariff and display that to the user as well. We only want to do this though, when BOTH a cost and quantity are provided, otherwise javascript does weird things with math. We'll create a function to check that both fields contain numbers and a separate one to add a tariff onto a total.

9. Once step 8 is complete the user will be able to see their individual totals as they enter values. In order for them to see the grand totals and compare them, we'll need to sum up both the pre-tariff cost and the post-tariff cost and display them when the user indicates they are ready. We will do this by finding every pre_cost and post_cost cell in every item row and total them up.



## Homework
1. Remove the need for the "compare" button by having the totals update as the user adds values.
2. Make every other row gray in background color to improve legibility.
3. Place the pre and post totals next to each other on desktop.
4. Make the page prettier.
