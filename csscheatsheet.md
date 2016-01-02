## Selectors
```#``` The pound or hashtag represents an ID. ```#bob``` would select ```<div id='bob'></div>``` or any element with the ID **bob** -- IDs must be unique (occuring only once per page). Having duplicate IDs can lead to unexpected and/or erroneous behavior

```.``` The period represents classes. ```.bob``` would select ```<div class='bob'></div>``` or any element with the class **bob** -- Classes are used to group elements. Elements can have an infinite number of classes and a class can occur as many times as needed on a single page

```TAG``` CSS can be used to style base tags as well. ```div``` would apply styles to every **div** on the page

### You can also combine selectors

```TAG.CLASS``` would allow you to select all elements with a specific tag AND a specific class. 

```
<div class='bob'></div> 
<img class='bob' />
``` 

to select the div with the class **bob** in the above code you would select

```
div.bob```

This would select the div and ignore the image.

```
.bob``` 

would select BOTH the div AND the image

### Chaining

Sometimes you want to select a finite group or even singular elements. IDs are one way to select a single element, but not every element will have an ID so we should get creative.

```<div class='students'>
<div class='female brunette'></div>
<div class='female brunette'></div>
<div class='female blonde'></div>
<div class='male brunette'></div>
<div class='female blonde'></div>
```

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

```text-transform``` Allows you to control the casing on your text. Values: Capitalize (just does the first letter), Uppercase, Lowercase, None

```text-align``` Aligns text within its parent element. Values: Left, Center, Right, Justify

```letter-spacing``` Controls the spacing between individual letters. Values are numeric and are followed by a unit (pt, px, em and % are accepted). ```e.g. letter-spacing: 5px;```

```line-height``` Controls the vertical space between lines. Values are numeric and are followed by a unit (pt, px, em and % are accepted)

## Box properties
### The basics
```width``` Defines the width of your element. This is a numerical value followed by a unit (px, pt, em and % are accepted). For most elements, if this is not defined the element will only be as wide as its content. **Div** elements are an exception to this rule. A div will be as wide as its container (parent) by default unless otherwise specified

```height``` Defines the height of your element. This is a numerical value followed by a unit (px, pt, em and % are accepted). For most elements, if this is not defined the element will only be as high as its content.

```float``` Allows you position elements relatively to one another. Values are: left, right, none. If you float an element left, the elements that follow it will be pulled up next to it as opposed to appearing beneath it. Float usually needs to be combined with width and margin to have the desired styling. When you float an element right the same applies as left but the element will be pulled up next to the things that come BEFORE it on the page.

```display``` Controls how an element behaves. Values: block, inline-block, inline, table, table-cell, none. All HTML elements have a default value for this, and can differ. Display: none will hide an element on your page.

### Margin
*Controls the distance between elements (used to prevent elements from running in to each other or moving too far apart).*

```margin```  This is a shortcut element that has four numerical values, each followed by a unit (pt, px, em and % are accepted). The four number start with the margin-top value and work their way around the box in a clockwise direction. ```e.g. margin: top right bottom left = margin: 1em 2em 3px 4%``` If you only define one value for margin that value will be applied to all four. ```e.g. margin: 1em = margin: 1em 1em 1em 1em;```

```margin-top``` Changes the top margin value of an element only. This is a numerical value followed by a unit (pt, px, em and % are accepted).

```margin-right``` Changes the right margin value of an element only. This is a numerical value followed by a unit (pt, px, em and % are accepted).

```margin-bottom``` Changes the bottom margin value of an element only. This is a numerical value followed by a unit (pt, px, em and % are accepted).

```margin-left``` Changes the left margin value of an element only. This is a numerical value followed by a unit (pt, px, em and % are accepted).

### Padding
*Controls the distance between content and its container (used to prevent text and multimedia from bleeding to the edge of the div, span, etc. that they're contained in).*

```padding```  This is a shortcut element that has four numerical values, each followed by a unit (pt, px, em and % are accepted). The four number start with the padding-top value and work their way around the box in a clockwise direction. ```e.g. padding: top right bottom left = padding: 1em 2em 3px 4%``` If you only define one value for padding that value will be applied to all four. ```e.g. padding: 1em = padding: 1em 1em 1em 1em;```

```padding-top``` Changes the top padding value of an element only. This is a numerical value followed by a unit (pt, px, em and % are accepted).

```padding-right``` Changes the right padding value of an element only. This is a numerical value followed by a unit (pt, px, em and % are accepted).

```padding-bottom``` Changes the bottom padding value of an element only. This is a numerical value followed by a unit (pt, px, em and % are accepted).

```padding-left``` Changes the left padding value of an element only. This is a numerical value followed by a unit (pt, px, em and % are accepted).

### Borders

*By default all elements have a border that is not visible. Simply increasing a borders stroke will reveal it*

```border``` This is a shortcut element that allows you define the border's stroke, style and color in one property. The stroke is a numerical value followed by a unit (px, pt, em and % are accepted), the style can be solid, double, groove, ridge, inset, outset, dashed or dotted, and the color is a hexadecimal value, color name or rgba definition. 

`border: 1px solid #000;` would create a 1px solid black border around my element

## Position properties
```position``` When position is defined it takes the element out of the normal flow of the page. Values: **static**, **relative**, **fixed**, **absolute**. I have borrowed the explanation for this from [w3schools](http://www.w3schools.com/css/css_positioning.asp) as I have never found a clearer explanation -- the more you work with this property the more intuitive it becomes.

##### Static
When you statically position something you're telling it to behave as it usually would -- allowing the browser to place it the way it would by default

##### Relative
An element with position: relative; is positioned relative to its normal position.

Setting the top, right, bottom, and left properties of a relatively-positioned element will cause it to be adjusted away from its normal position. Other content will not be adjusted to fit into any gap left by the element.

##### Absolute
An element with position: absolute; is positioned relative to the nearest positioned ancestor (instead of positioned relative to the viewport, like fixed).

However; if an absolute positioned element has no positioned ancestors, it uses the document body, and moves along with page scrolling. (Take a look at the w3schools page to see the example)

##### Fixed
An element with position: fixed; is positioned relative to the viewport, which means it always stays in the same place even if the page is scrolled. The top, right, bottom, and left properties are used to position the element.

A fixed element does not leave a gap in the page where it would normally have been located.

```top``` When the position is anything but static this property allows you to control the distance between an element and the top of its container. The value is numeric followed by a unit (px, pt, em and % are accepted)

```left``` When the position is anything but static this property allows you to control the distance between an element and the left of its container. The value is numeric followed by a unit (px, pt, em and % are accepted)

```z-index``` When the position is anything but static this property allows you to place elements on top of one another, stacking them on the page. The value is numeric has no unit.