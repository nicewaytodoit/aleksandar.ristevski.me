const lost = require('lost');
const pxtorem = require('postcss-pxtorem');

const prefix = '/aleksandar.ristevski.me';

module.exports = {
  pathPrefix: prefix,
  siteMetadata: {
    title: 'Blog & Profile by Aleksandar Ristevski',
    author: {
      name: 'Aleksandar Ristevski',
      email: 'nice@ristevski.me',
      telegram: 'nicewaytodoit',
      twitter: '@nicewaytodoit',
      github: 'nicewaytodoit',
      linkedin: 'https://www.linkedin.com/in/ristevskialeksandar/',
      rss: '#',
    },
    siteUrl: 'https://nicewaytodoit.github.io/aleksandar.ristevski.me/',
    social: {
      twitter: '@nicewaytodoit',
    },
    subtitle: 'Any sufficiently advanced technology is indistinguishable from magic.',
    copyright: 'All rights reserved <br> Copyright © 2018 - 2021',
    disqusShortname: '',
    menu: [
      {
        label: 'Home',
        title: 'BLog page ...',
        path: '/',
      },
      {
        label: 'CV',
        path: '/profile/',
      },
      {
        label: 'Work',
        path: '/work/',
      },
      {
        label: 'Social',
        path: '/social/',
      },
      {
        label: 'Contact',
        path: '/contact/',
      },
      {
        label: 'About me',
        path: '/about/',
      },
    ],
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        query: `
          {
            site {
              siteMetadata {
                siteUrl
                title
                description: subtitle
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => allMarkdownRemark.edges.map(edge => Object.assign({}, edge.node.frontmatter, {
              description: edge.node.frontmatter.description,
              date: edge.node.frontmatter.date,
              url: site.siteMetadata.siteUrl + edge.node.fields.slug,
              guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
              custom_elements: [{ 'content:encoded': edge.node.html }],
            })
            ),
            query: `
              {
                allMarkdownRemark(
                  limit: 1000,
                  sort: { order: DESC, fields: [frontmatter___date] },
                  filter: { frontmatter: { layout: { eq: "post" }, draft: { ne: true } } }
                ) {
                  edges {
                    node {
                      html
                      fields {
                        slug
                      }
                      timeToRead
                      frontmatter {
                        title
                        date
                        layout
                        draft
                        description
                      }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
          },
        ],
      },
    },
    // If I use this one then Markdown does not work ... 
    // {
    //   resolve: `gatsby-plugin-routes`,
    //   options: {
    //     // this is the path to your routes configuration file
    //     path: `${__dirname}/src/Data/routes.js`,
    //   },
    // },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 960,
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: { wrapperStyle: 'margin-bottom: 1.0725rem' },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['roboto:400,400i,500,700'],
      },
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        query: `
            {
              site {
                siteMetadata {
                  siteUrl
                }
              }
              allSitePage(
                filter: {
                  path: { regex: "/^(?!/404/|/404.html|/dev-404-page/)/" }
                }
              ) {
                edges {
                  node {
                    path
                  }
                }
              }
          }`,
        start_url: prefix,
        output: '/sitemap.xml',
        serialize: ({ site, allSitePage }) => allSitePage.edges.map(edge => {
          return {
            url: site.siteMetadata.siteUrl + edge.node.path,
            changefreq: 'daily',
            priority: 0.7,
          };
        }),
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        postCssPlugins: [
          lost(),
          pxtorem({
            rootValue: 16,
            unitPrecision: 5,
            propList: [
              'font',
              'font-size',
              'line-height',
              'letter-spacing',
              'margin',
              'margin-top',
              'margin-left',
              'margin-bottom',
              'margin-right',
              'padding',
              'padding-top',
              'padding-left',
              'padding-bottom',
              'padding-right',
              'border-radius',
              'width',
              'max-width',
            ],
            selectorBlackList: [],
            replace: true,
            mediaQuery: false,
            minPixelValue: 0,
          }),
        ],
        precision: 8,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-16430012-4", // this option places the tracking script into the head of the DOM
        head: true, // other options
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Aleksandar Ristevski Profile',
        short_name: 'AR.ME',
        start_url: '/',
        icon: 'src/assets/favicon.png',
      },
    }
  ],
};
