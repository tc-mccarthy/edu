# Using Comparisons to Balance the Budget

This exercise leverages html and javascript.

## Exercise
In the interest of time, the stylesheet and a skeleton of the HTML has been provided for you. We will go over the styles in class so make sure you add comments to your copy of the project to remind yourself about the finer points of the page. The pretext of this exercise is that you are an interactive journalist working for a political publication doing a story about how difficult it can be to balance the federal budget.

1. We are going to want a running total to be available to the user so we'll be injecting into `.total_budget` as we go. We'll need to make an adjustment in the HTML to make that safe.
2. The calculator is long, and we want to make sure the total stays with the user as they scroll.
3. Every time the user updates a particular department's budget we want to redo the math to ensure they haven't gone over budget
4. If they HAVE gone over budget, we should alert them.
5. All of the data should be in the HTML. This means we'll need to set the overall budget in our markup and get its value.




## Homework
1. Alerts stop JavaScript. Instead, let's apply a class to the `.total_budget` that will turn it red.
2. Establish a low-end value for each of the budget lines and enforce it using conditionals and a modal. Update the interactive's language to explain to the user that they need to balance the budget and that the low-end and high-end values are the minimum values they're allowed to assign a specific department.
