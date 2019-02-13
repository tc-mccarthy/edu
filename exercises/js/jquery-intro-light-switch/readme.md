# Intro to jQuery

This exercise leverages clever CSS and jQuery to have a light switch toggle the "lights" on and off. The solution is provided as a guide -- don't peak!

### Instructions

1.  Set up a container and allow it to expand to be no wider than 800px. It should also center itself, have 5px of padding all around and the text it contains should be centered.

2.  Add two H2s to the container that each have the `.light` class. The first should also have an `.on` class and the second an `.off` class. The first should read Lights on and the second, lights off.

3.  Add a paragraph that reads `If the lights are turning on and off your javascript works!`.

4.  Nest a second container within the first and give it a second `.img` class. There should be overriding styles for the `.img.container` element that limits it to `300px` wide, `position: relative` and min-height of `100vh`.

5.  Inside of `.img.container` add two `img` tags, the first with `.light.on` and pointing to `img/light-on.png` and the second with `.light.off` and pointing to `img/light-off.png`.

6.  All `img` tags should have a `width: 100%;`. If the have the class `.light` they should be `display: block`, `position: absolute;` and be vertically centered.

7.  Anything with `.light.off` should not be displayed by default. When the body class has `.light-off` anything with `.light.on` should be hidden and anything with `.light.on` should be displayed.

8.  When `body` has `.light-off` text should be white and the background black.

9.  Finally, the following statements should be added to the top of your stylesheet to load the electrolize font.

`@import url('https://fonts.googleapis.com/css?family=Electrolize');`

and

`font-family: 'Electrolize', sans-serif;`
