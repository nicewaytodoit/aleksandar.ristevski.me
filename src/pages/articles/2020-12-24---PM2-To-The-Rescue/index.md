---
title: PM2 to the rescue
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
  - "PM2"

description: "How to use and install PM2 advanced process manager that can keeps alive your application in case of a crash."
---

First, we need to ask what is PM2? 

In their makers own words: 'PM2 is a daemon process manager that will help you manage and keep your application online' or in other the words it is an app which is used to keep your Node.js application server (web app) alive even in the case when something goes wrong as application crash server is restarted and similar. 

PM2 has: load balancer, logs facility, startup script, microservice management and many other easily accessible functionalities necessary for the production environment.

Considering that you already have a web application up and running let's switch to PM2, if not there is a tutorial on how to create an [Express.js web app running on Nginx](/posts/2020-11-19---expressjs-web-app-running-on-nginx/) you can quickly go through.

## Basic Setup 

So, to install PM2 run the following:

```bash
$ npm install -g pm2@latest
```

[comment]: # (+ pm2@4.5.1 > added 198 packages from 195 contributors in 5.628s)

After PM2 is installed, a new folder `.pm2` will appear in our `/home/<user>` folder. In it there will be logs, and other PM2 files. Remember this we will need it later. 

Being globally available (`-g` flag), at your exposal there are the following commands:

From within the folder of your application you can simply start your application by typing: 
```bash
$ pm2 start app.js -i 0
```

To check all running processes you can use:
```bash
$ pm2 list
```
which will give you something like:
![Process list](./1.jpg)

To get application console logs and errors we can use:
```bash
$ pm2 logs
```

To monitor a process, which will give us more details:
```bash
$ pm2 monit
```
It has a bit more functionality and it is possible to see logs, but those logs are not persistent as soon as we switch to other process logs will be wiped out, generally used to replicate some issue. 


To stop all applications:
```bash
$ pm2 stop all
```

To delete all currently running processes, which is useful if you running your apps from the `ecosystem` file:
```bash
$ pm2 delete all
```

It is possible to delete a specific process using its name:
```bash
$ pm2 delete letit.buzz
```

And of course if processes are stopped we can use the following command to run them again:
```bash
$ pm2 start all
```

This, apart of `start-up` we will cover later, above is enough for the basic scenario, so now let explore a bit more.  


## A Little Bit More Complex Setup
Usually, when we are running in production, we will need to deal with multiple applications running at the same time, and each application will have different requirements, so let's explore a more complex scenario. 

First of all, it is out of the question to run all the time a bunch of Linux commands, so we will need to automate a process we need some kind of config. 


If we run:
```bash
$ pm2 ecosystem 
```
it will generate an example `ecosystem.config.js` in our case we do not need *deploy* config block for now - we will cover it some other time. 

It is important to emphasize that location from where you are running pm2 and where the ecosystem file is placed is also important. The general advice is to keep an ecosystem file in the web content root `/var/www`.


```js
module.exports = {
    apps: [
        {
            name: 'letit.buzz',
            script: './letit.buzz/app.js',
            args: 'LetITbuzz',
            instances: 1,
            exec_mode: 'fork',
            env: {
                NODE_ENV: 'development',
                PORT: 8007,
            },
        },
        {
            name: 'abc.com',
            script: './abc.com/app.js',
            args: 'ABC-1',
            instances: 2,
            watch: true,
            watch_delay: 1000,
            ignore_watch: ['.git', 'node_modules'],
            exec_mode: 'cluster',
            env_production: {
                NODE_ENV: 'production',
                PORT: 8005,
            },
            env: {
                NODE_ENV: 'development',
                PORT: 8005,
            },
        }
    ]
}
```


args works for arguments in ecosystem!

pm2 start env.js --watch --ignore-watch="node_modules"





#### Startup
Type following command without `sudo` and it will spill out exactly what you need to execute next: 
$ pm2 startup

$ sudo env PATH=$PATH:/home/<user>/.nvm/versions/node/v12.7.1/bin /usr/lib/node_modules/pm2/bin/pm2 startup systemd -u <user> --hp /home/<user>


$ pm2 save

Will create `.dump` file 
files are in ~/.pm2 folder but we will go back to that log files ...

Then upgrading to newer Node.js version, update the PM2 startup script! Use `pm2 unstartup` and then repeat
$ pm2 unstartup systemd

[PM2] Saving current process list...
[PM2] Successfully saved in /home/<user>/.pm2/dump.pm2

$ shutdown -r now





#### passing parameters 
https://github.com/Unitech/pm2/issues/13

$ pm2 start app.js -- aa bb cc
$ pm2 restart app.js -- 11 22 33

good idea ...
So you have a configuration file config.json:
```json
{
   "dev": {
        "db": {
            "hosts":["localhost"],
            "database": "api"
        },
        "redis": {
            "hosts": ["localhost"]
        }
   },
   "production": {
        "db": {
            "hosts":["1.1.1.1", "1.1.1.2", "1.1.1.3"],
            "database": "api"
        },
        "redis": {
            "hosts": ["2.2.2.2", "2.2.2.3"]
        }
   }
}
```

```js
var config=require('./config.json')[process.env.NODE_ENV || 'dev'];
db.connect(config.db.hosts, config.db.database);
```

Then you'd set the variable in your environment via shell:

export NODE_ENV=staging
pm2 start app.js

or in the case of our ecosystem file your would define `NODE_ENV` in `env` config block:

            env: {
                NODE_ENV: 'development',
            },

and then as usual 
$ pm2 delete all 
$ pm2 start ecosystem.config.js.

Important to do if you want to apply new changes in ecosystem file.
Remember that pm2 save does not start from ecosystem.config.js but from the dump file. so each time you make change you will need to save `pm2 save` current state of processes to update .dump file.

#### deployment 



#### log rotation
? pm2 advanced ... (log rotation and files)
> https://pm2.keymetrics.io/docs/usage/log-management/
