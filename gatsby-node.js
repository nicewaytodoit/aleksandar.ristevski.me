const _ = require('lodash');
const Promise = require('bluebird');
const path = require('path');
const slash = require('slash');
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const postTemplate = slash(path.resolve('./src/templates/post-template.jsx')); // C:/Users/mind/.../src/templates/post-template.jsx
    const pageTemplate = slash(path.resolve('./src/templates/page-template.jsx'));
    const tagTemplate = slash(path.resolve('./src/templates/tag-template.jsx'));
    const categoryTemplate = slash(path.resolve('./src/templates/category-template.jsx'));

    // createPage({
    //   path: '/work',
    //   component: pageTemplate,
    //   context: { slug: '/pages/work' },
    // });

    graphql(`
        {
          allMarkdownRemark(
            limit: 1000
            filter: { frontmatter: { draft: { ne: true } } }
          ) {
            edges {
              node {
                fields {
                  slug
                }
                timeToRead
                frontmatter {
                  tags
                  layout
                  category
                }
              }
            }
          }
        }
    `).then(result => {
      if (result.errors) {
        console.log(result.errors);
        reject(result.errors);
      }

      _.each(result.data.allMarkdownRemark.edges, edge => {
        // console.log(edge, _.get(edge, 'node.frontmatter.layout'), edge.node.fields.slug, '=====@@@@@');
        if (_.get(edge, 'node.frontmatter.layout') === 'page') {
          createPage({
            path: edge.node.fields.slug,
            component: pageTemplate,
            context: { slug: edge.node.fields.slug },
          });
        } else if (_.get(edge, 'node.frontmatter.layout') === 'post') {
          createPage({
            path: edge.node.fields.slug,
            component: postTemplate,
            context: { slug: edge.node.fields.slug },
          });

          let tags = [];
          if (_.get(edge, 'node.frontmatter.tags')) {
            tags = tags.concat(edge.node.frontmatter.tags);
          }

          tags = _.uniq(tags);
          _.each(tags, tag => {
            const tagPath = `/tags/${_.kebabCase(tag)}/`;
            createPage({
              path: tagPath,
              component: tagTemplate,
              context: { tag },
            });
          });

          let categories = [];
          if (_.get(edge, 'node.frontmatter.category')) {
            categories = categories.concat(edge.node.frontmatter.category);
          }

          categories = _.uniq(categories);
          _.each(categories, category => {
            const categoryPath = `/categories/${_.kebabCase(category)}/`;
            createPage({
              path: categoryPath,
              component: categoryTemplate,
              context: { category },
            });
          });
        }
      });

      resolve();
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  const nodeType = node.internal.type;

  if (nodeType === 'File') {
    const parsedFilePath = path.parse(node.absolutePath);
    let slug = `/${parsedFilePath.dir.split('---')[1]}/`;
    if (parsedFilePath.ext === '.jsx' && parsedFilePath.name === 'index') {
      // slug = createFilePath({ node, getNode, basePath: `/` });
      slug = `/${((arr) => arr[arr.length-1])(parsedFilePath.dir.split('/'))}`;
    }
    // if (slug === '/work') console.log('===///@@@', node, slug, parsedFilePath, nodeType);
    createNodeField({ node, name: 'slug', value: slug });
  } 
  else if (nodeType === 'MarkdownRemark' && typeof node.slug === 'undefined') {
    const fileNode = getNode(node.parent);
    let { slug } = (fileNode.fields || {});
    if (typeof node.frontmatter.path !== 'undefined') {
      slug = node.frontmatter.path;
    }
    // console.log(slug, node.slug, nodeType, fileNode.absolutePath, '===||<<<');
    createNodeField({ node, name: 'slug', value: slug });

    if (node.frontmatter.tags) {
      const tagSlugs = node.frontmatter.tags.map((tag) => `/tags/${_.kebabCase(tag)}/` );
      createNodeField({ node, name: 'tagSlugs', value: tagSlugs });
    }

    if (typeof node.frontmatter.category !== 'undefined') {
      const categorySlug = `/categories/${_.kebabCase(node.frontmatter.category)}/`;
      createNodeField({ node, name: 'categorySlug', value: categorySlug });
    }
  }
};
