---
title: 'Contact'
layout: page
path: '/contact'
---

-   Email
    Form that will subscribe users and send email
-   Address
-   Twitter etc.



    <a href='mailto:Aleksandar Ristevski<nice@ristevski.me>,Aleksandar Ristevski<nicewaytodoit-wuwu@yahoo.com>'>Email Us <i class="icon-mail"></i></a>

all dynamic ...
<br />
<hr />
<p>Or you can send us message with the following form:</p>
<form class="email" action="https://formspree.io/f/xjvppeza" method="post">
    <h3 class="email__title">Contact Form</h3>
    <div class="email__group">
        <label class="email__group-title" labelFor="name">Your name:</label>
        <div class="email__controls">
            <input type="text" name="name" placeholder="eg. John Smith">
        </div>
    </div>
    <div class="email__group">
        <label labelFor="_replyto">Your email:</label>
        <div class="email__controls">
            <input type="text" name="_replyto" placeholder="your@email.com">
        </div>
    </div>
    <div class="email__group">
        <label class="email__group-title" labelFor="message">Your message:</label>
        <div class="email__controls">
            <textarea name="message"  rows="8" cols="50" maxlength="1000"></textarea>
        </div>
    </div>
    <div class="email__group">
        <button class="email__button" type="submit">Send</button>
    </div>
</form>
