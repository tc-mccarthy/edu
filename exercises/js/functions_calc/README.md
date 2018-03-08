# Functions, Comparisons and a Calculator

This exercise leverages data attributes, html and javascript to build a simple calculator that can be used to relate current events to the average user.

## Exercise
In the interest of time, the stylesheet and a skeleton of the HTML has been provided for you. We will go over the styles in class so make sure you add comments to your copy of the project to remind yourself about the finer points of the page. This exercise is based on data found in [the New York times](https://www.nytimes.com/2018/03/05/us/politics/trump-tariffs-steel-aluminum-nafta.html) about a 25-percent tariff President Trump would place on steel along with a 10-percent tariff he would place on aluminum. The pretext of this exercise is that you are an interactive journalist working for a construction trade magazine and have been tasked with helping readers calculate the impact this would have on their cost.

1. Within the calculator is a table. Tables are made up of rows `tr` and cells `td`. Header rows are made up of `th`. We'll need a way to tell javascript which rows are items vs. which rows are not. Add an add `.item` to each row that our javascript will need to evaluate.

2. Javascript is also going to need to know the tariff value for specific items. We can do this by attaching a `data-tariff-percent` to each `.item`. Every item will need one of these, even those that don't have a proposed tariff

3. Javascript is also going to need to know which cells contain quantity values and which are cost values. Assign them `.qty` and `.cost` respectively.

4. We also want to make sure a user doesn't enter a non-numeric value for cost or quantity. We can do that by assigning the inputs `[type='number']` for all `.qty` and `.cost`.

5. The labor row is a bit different because it deals with people instead of materials. We can let the user know they need to enter the number of workers in the quantity field and the wage they'll pay each worker in the cost field by adding a `[placeholder]` attribute.

6. Preview the page on mobile. Does it look ok? Perfect.

7. Before we tell javascript to start listening for things on the page, it needs to wait for the DOM to be ready.

8. Once the DOM is ready we want to listen to all of our inputs for `keyup keydown keypress change` -- because different browsers fire different events as values are added to `input` fields.

9. Every time there is a change we want to fire a function that captures the tariff for the item, the cost of the item and the quantity of the item. We then want calculate the total cost and display it to the user. Then we want to add on the tariff and display that to the user as well. We only want to do this though, when BOTH a cost and quantity are provided, otherwise javascript does weird things with math. We'll create a function to check that both fields contain numbers and a separate one to add a tariff onto a total.

10. Once step 9 is complete the user will be able to see their individual totals as they enter values. In order for them to see the grand totals and compare them, we'll need to sum up both the pre-tariff cost and the post-tariff cost and display them when the user indicates they are ready. We will do this by finding every pre_cost and post_cost cell in every `.item` row and total them up.



## Homework
1. Remove the need for the "compare" button by having the totals update as the user adds values.
2. Make every other row gray in background color to improve legibility.
3. Place the pre and post totals next to each other on desktop.
4. Make the page prettier.
