# Annotated Image

This exercise leverages CSS positioning and jQuery to help you tell a story by equipping an image with 'hotspots' that users can click on to get more information.

## Exercise
1. Set up a mobile first HTML document, complete with a CSS file called `style.css` and a Javascript file called `main.js`
2. Place a headline on the page, using the proper tag, called `Curbside Produce`
3. Beneath the headline, create a `div.hotspot` and inside of that div nest `img/fruit.jpg`
4. Beneath `div.hotspot` create a paragraph that reads
>Pictured above is your typical manhattan fruit stand.
>Click on any the spots to learn more about the fruit highlighted.

5. Beneath the paragraph create `div.modal div.inner`
6. We need some styles to make this work.
    - `h1` and `p` should have `text-align: center;`
    - `div.hotspot` should be `position: relative; max-width: 980px; margin: 0 auto;`.
    - `div.hotspot img` should have a `width: 100%;`
    - `div.modal` should have a `height: 100vh; width: 100vw; position: fixed; top: 200%; left: 0; padding: 1em; background-color: rgba(0,0,0,0.65); transition: top 0.5s ease-in-out;` this way, our info window is only as big as our users' screens but is out of view.
    - `div.modal.active` should be `top: 0;`
    - `div.modal div.inner` should have `height: 100%; width: 100%; background-color: #FFFFFF; padding: 1em;`
    - `.spot` should have `position: absolute; height: 50px; width: 50px; border-radius: 50%; background-color: #000000;` so that all spots are the same size, circular and ready to be placed anywhere within `div.hotspot`
7. Create a `.spot` for each of the fruits in the table below, complete with an ID

8. Now you can view your page in your browser to figure out the positioning for each hotspot. For example if you inspect `#bananas` you can set your styles to be `right: 10%; top: 25%; background-color: #FF9900;` and you will have a yellow dot over the bananas. You should work in `%` so that you don't have to make many changes for different device sizes. Remember to copy/paste the styles you work out for each fruit into your stylesheet as you go.

9. Each of your `.spot` elements should also get a data-description attribute. You can pull the description from the table below.

10. Now that your HTML is complete we move on to the JavaScript. All you need is about 10 lines and the whole project will come together. Your savvy instructor will walk you through this :)

| fruit | id | description |
| ----- | -- | ----------- |
| Bananas | `#bananas` | Bananas are highly available and rich in potassium
| Peaches | `#peaches` | The peach pit is a thing of wonder and is even the subject of a beloved children's book
| Grapes  | `#grapes`  | Grapes have seeds in the wild but modern science has been able to remove them
| Plums   | `#plums`   | Plums are purple
| Apples  | `#apples`  | Apples are widely available in the big apple

## Homework
Repeat this exercise, without copy/pasting, using the `img/hiv.jpg`. The image is of school kids who are HIV positive coming home from school in an ambulance. Your assignment should feature 5 points, each containing a fact about HIV and its treatment in third-world countries. You should create a git repository for this assignment and submit the link to Sandeep and I as your assignment turn-in. Remember to check your work on mobile, tablet and desktop.
