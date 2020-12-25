---
title: Express.js web app running on Nginx
date: "2020-11-19T09:47:00.000Z"
layout: post
draft: false
path: "/posts/2020-11-19---expressjs-web-app-running-on-nginx/"
category: "Tutorials"
tags:
  - "NodeJS"
  - "ExpressJS"
  - "Nginx"
  - "Learning"
  - "Linux"

description: "Quick tutorial on how to set up a web application with Node.js and Express.js running on Nginx."
---

Without too many introductory words, let quickly jump onto necessary steps to make an Express.js web application up and running on Nginx.

In the `/var/www` or whatever is your web applications content folder, create a folder with the name of your web application `letit.buzz` and then clone `Starter ExpressJS app` we will use to test. 

```bash
$ mkdir letit.buzz/
$ git clone https://github.com/nicewaytodoit/expressjs-starter-app.git ./
$ npm install
```

After the application is cloned and built we need to configure our Nginx server. Jump to `/etc/nginx/` and find the `nginx.conf` file.

```bash
$ cd /etc/nginx/
$ nano /etc/nginx/nginx.conf
```

Use your favorite text editor and add the line `server 127.0.0.1:8001;` to the `upstream nodes` block, which is part of the `http` configuration block.
Notice the line before last `include sites-available/*;` - it is an instruction to link other config files, this is in case that you are running multiple web sites on your server.  

```config
http {
  ...

  upstream nodes {
      # letit.buzz
      server 127.0.0.1:8001;
      ...
  }
  include sites-available/*;
}
```


Now, let's jump to the `/etc/nginx/sites-available/` folder and create an Nginx config file for the "Let It Buzz" web application, we will name it `letit.buzz.conf`. Keep the Nginx config name similar to the folder name. 

```bash
$ cd sites-available/
$ touch letit.buzz.conf
$ nano letit.buzz.conf
```

Inside of the Nginx config file `/etc/nginx/sites-available/letit.buzz.conf` enter the following:

```config
server {
   listen 80;
   server_name letit.buzz www.letit.buzz;
   
   access_log /var/log/nginx/letit.access.log;
   error_log /var/log/nginx/letit.error.log error;
   
   root /var/www/letit.buzz;

   location / {
       proxy_set_header Host letit.buzz;
       proxy_pass http://localhost:8001;
       proxy_http_version 1.1;
       proxy_set_header Upgrade $http_upgrade;
       proxy_set_header Connection 'upgrade';
       proxy_set_header Host $host;
       proxy_cache_bypass $http_upgrade;
   }
}
```

Notice that we use port: 8001. Save the changes and do not forget to restart Nginx server `sudo service nginx restart`. 

All is done, so let's test the application. Go to the application root folder and run 'npm start' additional param can be anything it is just there if we want to test multiple application on different ports, testing with the same example, in that way we can distinguish them.

```bash
$ cd /var/www/letit.buzz/
$ npm start -- LetITbuzz
```

Now, while the application is running you will get the log message that the application is 'Listening on the port 8001' if that is not the case, you will need to change the port to correspond to the one you have set in the Nginx config files. 
So, in your application folder edit the `/var/www/letit.buzz/app.js` file and change the following line `const port = process.env.PORT || 3000;` instead of 3000 enter 8001. Save changes and re-run the application with the `npm start`.

Now, hopefully, if the application is running, how to test it?

Leave the SSH shell as it is (running the app). If you running GUI in your Linux distribution you can open the browser and type `http://localhost:8001` if not then try `wget http://localhost:8001` which will download the index.html file. Both in the browser or after opening the downloaded file with `cat index.html` you will find the message similar to:

> Hello World ExpressJS: App  <b>"LetITbuzz"</b> : 25/12/2020 18:53

Leave the `npm start`-ed application running.

If DNS settings for the A record (* and @) of your domain provider are set correctly to the public IP address *(`101.102.103.105`) of your server as: 

```text
A * 101.102.103.105 15 Minutes
A @ 101.102.103.105 15 Minutes
```

You are all good to go if everything is correctly done after typing http://www.letit.buzz in any browser in the world you should get the same message.

Now, this is a temporary setup just to quickly check that the entire structure is running. For the more permanent solution you will need some kind of tool to ensuring that a given web application running continuously - check [Forever](https://www.npmjs.com/package/forever).
