---
title: Multiple apps with Forever using bash
date: "2020-11-04T07:11:00.000Z"
layout: post
draft: false
path: "/posts/2020-11-19---expressjs-web-app-running-on-nginx/"
category: "Tutorials"
tags:
  - "NodeJS"
  - "ExpressJS"
  - "Forever"
  - "Bash"
  - "Linux"

description: "This small article tends to solve how to start multiple apps with Forever continuous process runner using Bash."
---

![Forever](https://www.npmjs.com/package/forever) is a simple CLI (command-line interface) tool for ensuring that a given Node.js script is running continuously. As this article is long overdue, and in authors own words "For new installations we encourage you to use `pm2` or `nodemon`" there are much better tool on the market, I deceded to share a simple automation bash script used to start multiple forever processes.  

First, you need to have globally installed Forever, which I assume you already have if you reading this lines.

```bash
$ [sudo] npm install forever -g
```

So, cerate a file and name it for instance ```run-it-forever.sh``` and as a content paste the following script:

```bash
#!/bin/bash

forever stopall

arr=("over-priced.io" "123you-n-me.com" "letit.buzz" "fu-with-bars.org" "gov.is.coo")
for i in "${arr[@]}"
do
   eval "forever -o out.log -e err.log start -c node $i/bin/www "
done
```

To have an executable script you will need to have `#!/bin/bash` at the top. And you will need to run command ```chmod u+x run-it-forever.sh```.

You have to follow the rule that each application has a folder and that usual `server.js` or `app.js` file is placed in bin/www.

```
$ over-priced.io/bin/www
$ 123you-n-me.com/bin/www
...
```

When executing bash script with `./run-it-forever.sh` first it will stop all existing applications with `forever stopall` and then re-run all in array. Please have in mind that this is not an ideal solution for a production environment where you have high number of users that depend on server memory sessions, as they may loose their work. 

At the end it is worht mentioning that there is a global log for forever, but each application will have it's own log in Apache or Nginx config files for finegrain logs.









