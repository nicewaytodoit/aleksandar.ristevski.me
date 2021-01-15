---
title: Converting Inline SVG to File
date: "2019-04-01T09:22:18.141"
layout: post
draft: false
path: "/posts/2019-04-01---svg-to-file/"
category: "Manual"
tags:
  - "HTML"
  - "SVG"
  - "file"

description: "Quick snippet for converting inline SVG to embeddable file."
---

It is amazing how small things tend to get forgotten.
This time question is if you have an inline SVG file how would you convert it into the file?


Take for instance this arrow: 
<p>
  <svg 
      fill="currentColor"
      height="50"
      width="50"
      viewBox="0 0 512 512"
  >
      <path d="M322.2,349.7c-3.1-3.1-3-8,0-11.3l66.4-74.4H104c-4.4,
      0-8-3.6-8-8c0-4.4,3.6-8,8-8h284.6l-66.3-74.4c-2.9-3.4-3.2-8.
      1-0.1-11.2c3.1-3.1,8.5-3.3,11.4-0.1c0,0,79.2,87,80,88s2.4,2.
      8,2.4,5.7s-1.6,4.9-2.4,5.7s-80,88-80,88c-1.5,1.5-3.6,2.3-5.
      7,2.3C325.8,352,323.8,351.2,322.2,349.7z"></path>
  </svg>
</p>

```xml
<svg 
    fill="currentColor"
    height="50"
    width="50"
    viewBox="0 0 512 512"
>
    <path d="M322.2,349.7c-3.1-3.1-3-8,0-11.3l66.4-74.4H104c-4.4
    ,0-8-3.6-8-8c0-4.4,3.6-8,8-8h284.6l-66.3-74.4c-2.9-3.4-3.2-8
    .1-0.1-11.2c3.1-3.1,8.5-3.3,11.4-0.1c0,0,79.2,87,80,88s2.4,2
    .8,2.4,5.7s-1.6,4.9-2.4,5.7s-80,88-80,88c-1.5,1.5-3.6,2.3-5.
    7,2.3C325.8,352,323.8,351.2,322.2,349.7z"></path>
</svg>

```

If you just try to convert it to the text file by simple copy/past action creating ```arrow.svg``` file, embedding into the HTML will not work.

In order to make it work you need to add two additional lines:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<svg 
    fill="currentColor"
    height="50"
    width="50"
    viewBox="0 0 512 512"
    xmlns="http://www.w3.org/2000/svg"
>
    <path d="M322.2,349.7c-3.1-3.1-3-8,0-11.3l66.4-74.4H104c-4.4,
    0-8-3.6-8-8c0-4.4,3.6-8,8-8h284.6l-66.3-74.4c-2.9-3.4-3.2-8.
    1-0.1-11.2c3.1-3.1,8.5-3.3,11.4-0.1c0,0,79.2,87,80,88s2.4,2.
    8,2.4,5.7s-1.6,4.9-2.4,5.7s-80,88-80,88c-1.5,1.5-3.6,2.3-5.
    7,2.3C325.8,352,323.8,351.2,322.2,349.7z"></path>
</svg>

```

Now, such a file (having in mind that in this example we placed it in `img` folder), can be imported in the following ways:

```html
  <img src="/img/arrow.svg" alt="Arrow" />
  <embed src="/img/arrow.svg" title="Arrow"  />
```

As a bonus tip, SVG file can get sluggish at load, you can preload it in the following way:
```css
.some-not-usedclass{
    background-image: url('../img/arrow.svg');
}
```

For a few more cool ways to cache SVG files in a browser check this [article](https://css-tricks.com/inline-svg-cached/).

That is all, I wish you good luck and happy coding.

