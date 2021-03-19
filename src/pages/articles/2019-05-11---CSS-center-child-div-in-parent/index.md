---
title: Center child div using CSS
date: "2019-05-11T21:22:12.145"
layout: post
draft: false
path: "/posts/2019-05-11---css-center-child-div-in-parent/"
category: "Tips"
tags:
  - "styles"
  - "CSS"

description: "Few ways of centring the child div within a parent div using CSS."
---

If I could get a pence for each time someone has googled how to centre elements in CSS I would have been a millionaire. So, I guess you saw through my cunning plan - I just need to set a google adds on this page, and I'll be set for life. 😜

Anyhow lets start:

We have two divs, the parent and child, and we want to centre the child within that parent.
```html
<div class="parent">
  <div class="child"></div>
</div>
```

What are our options then, to make it stick to the center ?

1. Using display 'table-cell'
With display 'table-' we make elemenst such as ```<div>``` tags to behave like ```<table>``` and ```<td>``` tags.
So, we can you following 

```css
.parent {
    display: table-cell; 
    width: 1200px; /* (x)px but cannot be % */
    height: 600px; 
    text-align: center; /*horizontal align*/
    vertical-align: middle; /*vertical align*/
}

.child {
    width: 250px;
    height: 120px;
    display: inline-block;
}
```

This method will work only for the parent with fixed values. Child can have dimensions in percent (%).


2. Using Flexbox
The Flexible Box Layout module, makes it a bit easier.

```css
.parent {
    display: flex;
    justify-content: center;
    align-items: center;
}
```


3. Using Flexbox focusing on child (half-way)
Sometimes when using Flexbox parent needs to stay as it is while we need to adjust child only.

```css
.parent {
    display: flex;
}
.child {
    align-self: center;
    /* justify-self will not work in this case */
}
```


4. Flexbox and margin
In this case margines will push so to say object in the middle.

```css
.parent {
    display: flex;
}
.child {
    margin: auto;
}
```

Another useful option if se have need to adjust offset can be:

```css
.child {
    margin: calc(50% - 100px) calc(50% - 100px); /* instead of auto */
}
```

How many pixels need to be deducted depends on the width and height of the child object.


5. Using Position

```css
.parent {
    position: relative; 
}
.child {
    position: absolute;
    top: 50%; 
    left: 50%; 
    -moz-transform: translateX(-50%) translateY(-50%);
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translate(-50%, -50%);
}
```


6. Using CSS grid
The Grid Layout offers a grid-based layout system containing rows and columns.

```css
.parent {
    display: grid; 
    justify-content: center; /*horizontal*/ 
    align-content: center; /*vertical*/
}
```


7. Using CSS grid but with child classes
This is similar case as number 3. but in this case both vertical and horizontal child self-alignement are working.

```css
.parent {
    display: grid; 
}
.child {
    justify-self: center; /*horizontal*/ 
    align-self: center; /*vertical*/
}
```


That's it, I wish you happy coding and styling...


