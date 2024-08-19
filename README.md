# aleksandar.ristevski.me

Live version:
https://aleksandar.ristevski.me/

## Deployment
Run first:
```bash
$ npm run deploy:ec2
```
And then in EC2 serve folder:
```bash
sudo git pull origin gh-pages
sudo service nginx restart
```
## Gatsby
Website created by mixing:  
    - [Gatsby blog starter](https://github.com/gatsbyjs/gatsby-starter-blog)  
    - [Gatsby v2 starter Lumen](https://github.com/GatsbyCentral/gatsby-v2-starter-lumen)  
    - [Gatsby starter 2column portfolio)](https://github.com/praagyajoshi/gatsby-starter-2column-portfolio)  
    - [Gatsby starter CV](https://github.com/santosfrancisco/gatsby-starter-cv)  
    - [Gatsby starter strata](https://github.com/codebushi/gatsby-starter-strata)  
    - [Gatsby starter personal blog](https://github.com/greglobinski/gatsby-starter-personal-blog)  
    - [Overreacted.io](https://github.com/gaearon/overreacted.io)  

To run locally:  
    `yarn`, then `yarn dev`,  
or   
    `npm install`, then `npm start`,   

then open https://localhost:8000 to get the app,  
or http://localhost:8080/__graphql to get GraphQL shape

## Contributors
* https://github.com/nicewaytodoit



## Requirements
ubuntu@:~$ npm -v - 6.14.9
ubuntu@:~$ node -v - v14.15.1

> npm install --global yarn

    "react-disqus-comments": "^1.4.0",


# Fixes Legacy
- removed node-sass from package.json and package-lock.json
    trying this fix as require Python2 and mscs c++ compiler to work 2013 
    https://github.com/gatsbyjs/gatsby/issues/27754
    npm i -D sass
    ```js
    update your gatsby-config.js :

    before:

    {
        resolve: `gatsby-plugin-sass`
    }
    after:

    {
        resolve: `gatsby-plugin-sass`,
        options: {
            implementation: require('sass')
        },
    }
    ```

- Then requested to update browser list for the sake of ignore : npx browserslist@latest --update-db

- ![IDEA] about future taking notes as "Notes of pain" or "Pain Diary" about updating npm modules and IT issues

- "react-scripts --openssl-legacy-provider start"
  $ export NODE_OPTIONS=--openssl-legacy-provider <---- that works run in bash.

## Buckup and move:
    ```bash 
    $ sudo tar --exclude='./node_modules' -zcvf 2024-08-19-www2--ristevski-aleksandar-me.tgz .
    $ sudo mv 2024-08-19-www2--ristevski-aleksandar-me.tgz ~/Uploads/backups/
    $ cd ~/Uploads/backups/
    ```


