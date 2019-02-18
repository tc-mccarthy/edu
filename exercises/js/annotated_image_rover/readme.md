# Annotated images

Annotated images are a subtle enhancement to your stories that can really go a long way to helping users understand your story. By adding "hotspots" to the images users can choose to interact with the image to learn more details about parts you have chosen to highlight.

### Preview

<https://tc-mccarthy.github.io/edu/exercises/js/annotated_image_rover/solution/>

### Preflight

Please create and clone a new repo called annotated-image-rover. Copy the `index.html`, `main.js`, and `styles.css` from this directory to your newly-cloned repo.

### Instructions

1.  Each marker will be `div.dot` so we should set up three of them as siblings following `.container.photo img`.
2.  The first `.dot` should also have `.orange` and `.wheels`.
3.  The second `.dot` should also have `.blue` and `.camera`.
4.  The third `.dot` should also have `.green` and `.solar`.
5.  Each `.dot` needs a child, `div.inner`.
6.  Each `div.inner` needs two children: `a.close[href='#']` and `div.content`.
7.  `div.wheels .content` gets a `p` that reads
```
Opportunity drove 28 miles throughout its 15-year tenure on the red planet
```
8.  `div.camera .content` gets a `p` that reads

```
Opportunity sent back many images of rock formations with distinct, defined textures and patterns, indicating water was present on Mars at one time.
```

9.  `div.solar .content` gets a `p` that reads

```
Opportunity was solar powered. She is believed to have run out of power in the darkness of a dust storm on Mars and now has dust-covered panels, preventing her from recharging.
```

10. `.dot.orange` gets a background color of `rgba(255, 133, 25, 0.65)`
11. `.dot.blue` gets a background color of `rgba(0, 93, 255, 0.65)`
12. `.dot.green` gets a background color of `rgba(12, 232, 196, 0.65)`
13. Using the inspector, you can set left, right, top or bottom values to position the dot over the correct place in the image. These values should be percentages so that they work across all devices.
14. For each custom position, we must also put in a `transform` that has a value of `translate(horizontal, vertical)`, this way the transition works from center out. You can use the following logic to calculate the translate:

```
horizontal = right OR horizontal = (left x -1)
vertical = bottom OR vertical = (top x -1)

examples

.dot.wheels {
    left: 42%;
    bottom: 27%;
    transform: translate(-42%, 27%);
}

or

.dot.wheels {
    left: 42%;
    top: 27%;
    transform: translate(-42%, -27%);
}
```

15. Instead of waiting for DOM ready, we can just listen to the `body` for all clicks and check if the click happened on a `.dot` using the following syntax

```
$("body").on("click", ".dot", function(e){
  // on click add an active class to the dot that was clicked
});
```

16. When `.dot .close` is clicked, remove the active class from the `.close`'s parent `.dot`
