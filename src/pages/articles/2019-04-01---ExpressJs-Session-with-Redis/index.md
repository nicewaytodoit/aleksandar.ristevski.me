---
title: Express.js Session with Redis
date: "2019-04-17T19:26:34.987"
layout: post
draft: false
path: "/posts/2019-04-17---expressjs-session-with-redis/"
category: "Manual"
tags:
  - "Redis"
  - "JavaScript"
  - "Node.js"
  - "Express.js"
  - "Session"

description: "This is a tutorial how to setup a session with the Node.js/Express.js and Redis."
---

Issue with managing session in memory even in local environment is that each time there is a memory leak or application crashes users will need to log on again, which is not a good user experince.

A better way to deal with session is to have a Redis NoSql server that will manage those sessions.

First we will explore how to install on Windows 10 and then we will deal with Linux version. Please have in mind that Redis does not officially support Windows port and that version we are going to install is 4 years old but it is still usable for local purposes.

## Redis on Windows 10

To install Windows version of Redis go to Microsoft archive: [https://github.com/microsoftarchive/redis/releases](https://github.com/microsoftarchive/redisrangeses)

From there click on the Assets link and download [zip file](https://github.com/microsoftarchive/redis/releases/download/win-3.2.100/Redis-x64-3.2.100.zip)

After downloading unzip package to you custom folder.

To run Redis server simply double click on `redis-server.exe` file.

If you want to for instance to setup authntication then you will need to modify `redis.windows.conf` file. 

Remove `#` to uncomment line with `requirepass` line and for the second word set whatever you would like to be your password. 

```conf
requirepass foobarpass
```

To run redis after modifying file you will need to run `redis-server.exe redis.windows.conf`, do not turn off command prompt windows, just leave it be as it is nor running as as service but on demand.

If everything is done correctly Redis will show message that it is running on the localhost address 127.0.0.1, and port 6379.

At this point this is enough to try out Redis client. Just double click on `redis-cli.exe` and command prompt will show with prompt.
```bash
127.0.0.1:6379>
```

First thing you can do is to type command `ping` and Redis service will respond with `PONG` message, meaning service is listening.  

If password is changed one you will need to enter a authentication command before doing anything else.
```bash
AUTH foobarpass
```

We can now enter few commands in order to check is Redis working.

First we will try to list all keys with `keys *`.

Next we will create a new key: 
```bash
SET testKey "Hello"
```
And check is it there with:
```bash
GET testKey
```

Next let's enter an array:
```bash
lpush cars Tesla Nissan Toyota
```

To retrieve values:
```bash
lrange cars 0 -1
```

## Express.js session with Redis
Having in mind that you already have application with Express.js in memory application I will jump straight to important bits you need to add.

First you need to install additional redis packages for the node project, saving dependencies into `package.json` file.

```bash
npm install --save redis connect-redis
```

After that you need to add bellow code to your `server.js` application file.

```javascript
const redisConnection  = {
    host: '127.0.0.1',
    port: 6379,
    ttl: 86400,
    no_ready_check: true,
    password: 'foobarpass', 
}

const redis = require('redis');
const redisClient = redis.createClient({...redisConnection});
const redisStore = require('connect-redis')(session);

let app = express();

redisClient.on('error', (err) => {
    console.error('Redis error: ', err);
});
redisClient.on('connect', () => {
    console.log('Redis connected!');
});

app.use(
    session({
        name: 'SessionIdName',
        secret: 'SomeSessionPasswordForRedis',
        resave: false,
        saveUninitialized: true,
        cookie: { secure: false },
        store: new redisStore({...redisConnection, client: redisClient }),
    })
);
```

Above code will initialize redis client and sesson management with Redis. 

Good thing about this approach is that it can save even if you scale your project to the multiple machine. One more thing to remember is that Redis can run purelly In-Memory mode, that means that although your application is fail safe when it crushes, unfortunatelly if Redis crashes you will loose you sessions. That being said it is possible to adjust Redis to save keys to the hard drive at the cost of little bit of speed.


## GUI for Redis on Windows
If you need GUI version of CLI tool for redis you can check [Another Redis Desktop Manager](https://github.com/qishibo/AnotherRedisDesktopManager)


## Installing Redis on Linux and Continous runner

First thing we need to do is to update our local apt package cache and then install Redis:

```bash
sudo apt update
sudo apt install redis-server
```

After Redis is installed we will need to do few tweeks in `redis.conf` file.

```bash
sudo nano /etc/redis/redis.conf
```

First we need to password as like in Windows example:
```bash
requirepass foobarpass
```

And then chenge `supervised` parameter from:
```bash
supervised no 
```
to 
```bash
supervised systemd
```

After we save `redis.conf` file we need to restart redis service and check status:
```bash
sudo systemctl restart redis.service
sudo systemctl status redis
```

If service is running correctly we can fireup Redis client 

```bash
redis-cli
```
and check as previous few commands `ping`, `set`, `get`, `keys` as before.


Finally we need to check that Redis is only running on the localhost with:
```bash
sudo netstat -lnp | grep redis
```

If not we need to make sure that bind in `redis.conf` is set to `127.0.0.1:: 1`. 

For more check this Digital Ocean [article](https://www.digitalocean.com/community/tutorials/how-to-install-and-secure-redis-on-ubuntu-18-04). 

