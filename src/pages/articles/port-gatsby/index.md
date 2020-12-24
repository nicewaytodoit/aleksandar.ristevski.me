---
title: How to change a port number in Gatsby
date: "2020-12-24T10:23:00.000Z"
layout: post
draft: false
path: "/posts/2020-12-24---pm2-to-the-rescue/"
category: "Tutorials"
tags:
  - "NodeJS"
  - "Free"
  - "Deployment"
  - "Learning"
  - "Tutorial"
  - "AWS"
  - ""

description: "How to use and install PM2 advanced process manager that can keeps alive your application in case of crash."
---


How to change a port number in Gatsby

In this tutorial, we are going to learn about how to change a default port number (8000) in gatsby project.

reactgo.com recommended course
Gatsby Tutorial and Projects Course
Changing the port number
Open the gatsby project in your favorite code editor.
Navigate to package.json file and add the following config to gatsby develop command.
package.json
{
  "name": "gatsby-starter",
  "private": true,
  "description": "A starter for Gatsby",
  "version": "0.1.0",
  "license": "0BSD",
  "scripts": {
    "build": "gatsby build",
    "develop": "gatsby develop -p 3500",
Here I set a port number 3500 using -p flag.

Start the development server by running the npm run develop command, your port number is changed successfully.
You can now view gatsby-starter in the browser.
⠀
  http://localhost:3500/
⠀
View GraphiQL, an in-browser IDE, to explore your site's data and schema
⠀
  http://localhost:3500/___graphql
⠀
Note that the development build is not optimized.
To create a production build, use gatsby build
If you want to change a port number temporarily, you need to add a -p flag with the port number to the gatsby develop command.

gatsby develop -p 3500
or
gatsby develop --port 3500
