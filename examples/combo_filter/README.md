# Building filters

At this point, you know quite a bit about selecting, toggling classes and mobile first design.

The pretext of this exercise is: you are a developer working for "Dining and Cooking" a fictitious but delicious trade magazine, and you are developing an app that is helping people to diversify their palette. They can choose between fruits, vegetables or meat.

While I wasn't especially imaginative in the choices here, you need to develop on top of the existing skeleton to allow users to filter their options.

This is a collaborative exercise but the prompts will be nearly identical to how they would be delivered in a newsroom, and we'll work through them together.

## Preflight

You know the drill.
1. Create a repo should be called `filter_foods`
2. I will provide you with a skeleton that includes some markup and rudamentary CSS. Copy/paste the files into your newly-cloned repo
3. Before you begin, commit what you have (from the copy/paste) so that you have a clean skeleton to reset to should you need to

## Preview

https://tc-mccarthy.github.io/edu/exercises/js/filter_foods/solution/

## Getting started

The editor of this piece, world-renowned food critic Anton Ego, has worked with the design team to lay out the application in a grid powered by flex box. You'll notice that when the page loads initially all of the choices are visible. Ego has asked that you keep this, but that you make it so that when a user chooses a category from the filter dropdown, the visible choices are narrowed only to those that fit within the selection.

This means you'll probably need some styles to show and hide each item and update the HTML to further classify each item so you can easily select it.

Fewer items on mobile... or more items on not mobile?
