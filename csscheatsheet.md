## Selectors
```#``` The pound or hashtag represents an ID. ```#bob``` would select ```<div id='bob'></div>``` or any element with the ID **bob** -- IDs must be unique (occuring only once per page). Having duplicate IDs can lead to unexpected and/or erroneous behavior

```.``` The period represents classes. ```.bob``` would select ```<div class='bob'></div>``` or any element with the class **bob** -- Classes are used to group elements. Elements can have an infinite number of classes and a class can occur as many times as needed on a single page

```TAG``` CSS can be used to style base tags as well. ```div``` would apply styles to every **div** on the page

### You can also combine selectors

```TAG.CLASS``` would allow you to select all elements with a specific tag AND a specific class. 

```<div class='bob'></div> <img class='bob' />``` 

to select the div with the class **bob** in the above code you would select

````div.bob````

This would select the div and ignore the image.

```.bob``` would select BOTH the div AND the image

###Chaining

Sometimes you want to select a finite group or even singular elements. IDs are one way to select a single element, but not every element will have an ID so we should get creative.

````
<div class='students'>

<div class='female brunette'></div>

<div class='female brunette'></div>

<div class='female blonde'></div>

<div class='male brunette'></div>

<div class='female blonde'></div>
````

To select only elements which have both **female** AND **brunette** as classes we chain their selectors

```.female.brunette```

If we wanted **female** OR **brunette** we would use a comma between the selectors

```.female, .brunette```

### Finding children

When an element is inside of another it's called **nesting**

We represent nested elements with spaces when selecting a DOM element.

```<div class='spice-girls'><div class='geri'></div></div>```

To select the element with the class **geri** that's inside of the element with the class **spice-girls** we use selectors and spaces.

```.spice-girls .geri``` is how you select all elements with the class **geri** inside all elements with the class **spice-girls**


## Color and background

```color``` Sets the color for text. This property does not work on any other element besides text. The value can either be a hex value, color name or rgba.

```background-color``` Sets the background color for the element. This property does not work on any other element besides text. The value can either be a hex value, color name or rgba.

```background-image``` Uses an image to set the background of an element. Value is a URL.

```background-position``` The x, y coordinates of the background image that you want to make the center. Useful when you want alter the default background position (e.g. use the rule of thirds to position a background photo)


## Text styles

```font-family``` Allows a developer to control the font face. Any selected fonts must be available on a users device to work as expected to make this choice carefully.

```font-style``` Can be set to italicize font. Options: normal, italic

```font-weight``` Used for bolding. Options: normal, bold, 100, 200, 300 ,400, 500, 600, 700, 800, 900

```font-size``` Controls the font size. Options: <numerical value>(px, pt, em, %)

```text-decoration``` Allows you to underline or strikethrough text. Values: underline, strikethrough