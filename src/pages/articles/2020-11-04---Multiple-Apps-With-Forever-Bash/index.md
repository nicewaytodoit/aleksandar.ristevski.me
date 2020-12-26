---
title: Multiple apps with Forever using bash
date: "2020-11-04T07:11:00.000Z"
layout: post
draft: false
path: "/posts/2020-11-04---multiple-apps-with-forever-bash/"
category: "Tutorials"
tags:
  - "NodeJS"
  - "ExpressJS"
  - "Forever"
  - "Bash"
  - "Linux"

description: "This small article explains how to start multiple apps with Forever continuous process runner using Bash."
---

[Forever](https://www.npmjs.com/package/forever) is a simple CLI (command-line interface) tool made to ensure that a given Node.js app is running continuously. As this article is long overdue, and in the author's own words "For new installations we encourage you to use `pm2` or `nodemon` ", obviously there are a much better tool out there, anyway I decided to share a simple automation bash script used to start multiple forever processes.  

First, you need to have globally installed Forever, which, if you reading these lines I assume, you already have.

```bash
$ [sudo] npm install forever -g
```

So, create a bash `.sh` file and name it for instance `run-it-forever.sh` and as a content paste the following script:

```bash
#!/bin/bash

forever stopall

arr=("over-priced.io" "letit.buzz" "fun-with-bars.org")
for i in "${arr[@]}"
do
   eval "forever -o out.log -e err.log start -c node $i/bin/www "
done
```

To have an executable script you will need to have `#!/bin/bash` at the top. And you will need to run command ```chmod u+x run-it-forever.sh``` to make a `.sh` file executable.

In order to run this successfully each application will need to have its own folder (as normally it should be) and the usual `server.js` or `app.js` main file needs to be placed in `bin/www`. Notice that the last `www` is not a folder but JavaScript `.js` file without extension. Why did I name it like that? To be honest, I do not know, it was a long time ago and at the time I think I had some "good" reason to do it. 

```
$ cd /var/www/over-priced.io/bin/www
$ cd /var/www/123you-n-me.com/bin/www
...
```

Run bash script with `./run-it-forever.sh` or `sudo ./run-it-forever.sh`. 

The script will stop all existing applications first with the `forever stopall` command and then restart all apps listed in the array. 
Please have in mind that this is not an ideal solution for a production environment, especially when you have a high number of users that depend on server memory sessions (as they may lose their work if you do not have implemented some persistent session solution using Redis or similar). 

In the end, it is worth mentioning that there is a global log for forever, but each application will have its own log in Apache or Nginx config files for fine-grain logs.
