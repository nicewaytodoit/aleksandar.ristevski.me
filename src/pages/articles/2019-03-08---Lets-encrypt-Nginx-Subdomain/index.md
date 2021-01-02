---
title: Let's Encrypt Nginx Subdomain
date: "2019-02-13T13:27:33.158"
layout: post
draft: false
path: "/posts/2019-02-13---lets-encrypt-nginx-subdomain/"
category: "Manual"
tags:
  - "letsencrypt"
  - "certificate"
  - "installation"
  - "maintenance"
  - "nginx"
  - "errors"

description: "Installing certificate can sometimes get a wrong turn, I hope this article can help just a bit."
---


As on my server there was already installed version of the `letsencrypt` and `certbot`, that helps installing certificate, I tried following command first:  

```bash
$ sudo letsencrypt certonly -a webroot --webroot-path=/var/www/ristevski.me/ -d *.ristevski.me
```

And got the following error:<br>
"Client with the currently selected authenticator does not support any combination of challenges that will satisfy the CA. 
You may need to use an authenticator plugin that can do challenges over DNS."

**Solution:**
First we need to check what is the installed version of the Certbot:
```bash
$ certbot --version || /path/to/certbot-auto --version
```
In my case, it was version 0.27 so I need to upgrade Certbot first. It is best to go to https://certbot.eff.org/ and check instructions for your OS and web server I am using AWS EC2 Ubuntu 18.04 and Nginx.

In addition to an old version I had `certbot` installed both with apt-get and snap, so it was necessary to remove both versions.

```bash
$ sudo snap install core; sudo snap refresh core
$ sudo apt-get remove certbot
$ sudo snap remove certbot
```

Then, installing new version in this case using snap. The second step to create a hard link in `snap` case is necessary, as it will make `certbot` available. 
```
$ sudo snap install --classic certbot
$ sudo ln -s /snap/bin/certbot /usr/bin/certbot 
```
After try running:
```bash
$ certbot --version
```
If everything is ok, you will get installed `certbot` version.

For `ristevski.me` domain I want to install a wildcard certificate, and for that type of certificate LetsEncrypt accepts only the DNS-01 challenge read more [here](https://letsencrypt.org/docs/challenge-types/). 

To install a certificate we will choose to run the certbot in the manual mode.
```bash
$ sudo certbot certonly --manual 
```

The prompt will ask to enter the domain, so in our case:
```
*.ristevski.me
```
and press enter, at this point the `certbot` will generate a code. We should not press enter, before we confirm that DNS records were updated.
So, we need to open got to GoDaddy, Namecheap, HostGator, 123-reg.co.uk or whatever else is our domain provider/registrar, and update DNS records adding TXT as suggested by the certbot. 

In my case that was:   

```
type: TXT 
name: _acme-challenge
content: Oa4uYiiR3kDJrFQR5j1ihP5sjlI_TdDdc8-h4Kgd_5E 
time: 15 Minutes
```

```bash
Before continuing, verify the record is deployed.
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Press Enter to Continue
```

Note: Please mind the message, and do not press enter until you confirm DNS records are updated. So, type:

```bash
$ dig -t txt _acme-challenge.ristevski.me
```

And check that TXT is the same, as on in the cerbot, sometimes an update can take a bit longer, between 5 and 20 minutes depending on DNS settings and propagation of the records.

After confirming that records are the same proceed by pressing enter, and you will get the following message.

```bash
Waiting for verification...
Cleaning up challenges

IMPORTANT NOTES:
 - Congratulations! Your certificate and chain have been saved at:
   /etc/letsencrypt/live/ristevski.me/fullchain.pem
   Your key file has been saved at:
   /etc/letsencrypt/live/ristevski.me/privkey.pem
   Your cert will expire on 2021-04-01. To obtain a new or tweaked version 
   of this certificate in the future, simply run certbot again. 
   To non-interactively renew *all* of your certificates, run
   "certbot renew"
 - If you like Certbot, please consider supporting our work by:
   Donating to ISRG / Let's Encrypt:   https://letsencrypt.org/donate
   Donating to EFF:                    https://eff.org/donate-le
```

After getting success message only left is to adjust Nginx config file.
So use your favorite editor and edit nginx config file you have made previously for `http`.

```bash 
$ nano /etc/nginx/sites-available/ristevski.nginx.config
```

So, the configuration file for `aleksandar.ristevski.me` subdomain should look something like the following:

```nginx
server {
   listen 80;
   listen [::]:80;
   server_name *.ristevski.me;
   return 301 https://$host$request_uri;
}

server {
   listen 443 ssl;
   listen [::]:443 ssl;

   server_name aleksandar.ristevski.me;

   ssl_certificate /etc/letsencrypt/live/ristevski.me/fullchain.pem;
   ssl_certificate_key /etc/letsencrypt/live/ristevski.me/privkey.pem;
   ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
   ssl_ciphers  HIH:!aNULL:!MD5;

   access_log /var/log/nginx/ar.ristevski.access.log;
   error_log /var/log/nginx/ar.ristevski.error.log error;

   root /var/www/aleksandar.ristevski.me;
   index index.html;

   location / {
       try_files $uri $uri/ =404;
   }

   error_page 404 /404.html;
   location = /404.html {
       internal;
   }
}
```


Lastly, as Let's Encrypt certificate expire every 3 months, we need to set up a renewal procedure with the `cron` job.

First, let's do the test that renewal is working.
```
$ sudo certbot renew --dry-run
```

If the test succeeds then we may create a `cron` job that will run a renewal script in specified times.

