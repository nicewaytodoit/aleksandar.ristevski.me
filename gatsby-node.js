const _ = require('lodash');
const Promise = require('bluebird');
const path = require('path');
const slash = require('slash');
const overrideRoutes = require('./src/Data/routes');

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;

    return new Promise((resolve, reject) => {
        const postTemplate = slash(path.resolve('./src/templates/post-template.jsx')); // C:/Users/mind/.../src/templates/post-template.jsx
        const pageTemplate = slash(path.resolve('./src/templates/page-template.jsx'));
        const tagTemplate = slash(path.resolve('./src/templates/tag-template.jsx'));
        const categoryTemplate = slash(path.resolve('./src/templates/category-template.jsx'));

        graphql(`
            {
                allMarkdownRemark(filter: { frontmatter: { draft: { ne: true } } }) {
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
        `).then((result) => {
            if (result.errors) {
                console.log('ERROR:::', result.errors);
                reject(result.errors);
            }

            const { edges } = result.data.allMarkdownRemark;
            const getLayout = (e) => _.get(e, 'node.frontmatter.layout');

            const pages = edges.filter((edge) => getLayout(edge) === 'page');
            pages.forEach((page) =>
                createPage({
                    path: page.node.fields.slug,
                    component: pageTemplate,
                    context: { slug: page.node.fields.slug },
                })
            );

            const posts = edges.filter((edge) => getLayout(edge) === 'post');
            posts.forEach((post) => {
                createPage({
                    path: post.node.fields.slug,
                    component: postTemplate,
                    context: { slug: post.node.fields.slug },
                });
            });

            const tags = _.uniq(posts.map((post) => _.get(post, 'node.frontmatter.tags')).flat().filter((a) => !!a));
            tags.forEach((tag) => {
                const tagPath = `/tags/${_.kebabCase(tag)}/`;
                createPage({
                    path: tagPath,
                    component: tagTemplate,
                    context: { tag },
                });
            });

            const categories = _.uniq(posts.map((post) => _.get(post, 'node.frontmatter.category')).flat().filter((a) => !!a));
            categories.forEach((category) => {
                const categoryPath = `/categories/${_.kebabCase(category)}/`;
                createPage({
                    path: categoryPath,
                    component: categoryTemplate,
                    context: { category },
                });
            });

            resolve();
        });
    });
};

exports.onCreatePage = ({ page, actions: { createPage, deletePage } }) => {
    // Override Routes with ./Data/route.js file 
    const { componentChunkName } = page;
    if (componentChunkName) {
        const foundOverride = overrideRoutes.find((r) => r.componentChunkName === componentChunkName);
        if (foundOverride) {
            deletePage(page);
            createPage({ ...page, path: foundOverride.overridePath });
        }
    }
};

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions;
    const nodeType = node.internal.type;

    if (nodeType === 'File') {
        // Specific for /page/date---folders/ with md files 
        const parsedFilePath = path.parse(node.absolutePath);
        let slug = `/${parsedFilePath.dir.split('---')[1]}/`;
        createNodeField({ node, name: 'slug', value: slug });
    }
    else if (nodeType === 'MarkdownRemark' && typeof node.slug === 'undefined') {
        const fileNode = getNode(node.parent);
        let { slug } = fileNode.fields || {};
        if (typeof node.frontmatter.path !== 'undefined' && !slug) {
            slug = node.frontmatter.path;
        }
        createNodeField({ node, name: 'slug', value: slug });

        if (node.frontmatter.tags) {
            const tagSlugs = node.frontmatter.tags.map((tag) => `/tags/${_.kebabCase(tag)}/`);
            createNodeField({ node, name: 'tagSlugs', value: tagSlugs });
        }

        if (typeof node.frontmatter.category !== 'undefined') {
            const categorySlug = `/categories/${_.kebabCase(node.frontmatter.category)}/`;
            createNodeField({ node, name: 'categorySlug', value: categorySlug });
        }
    }
};

exports.onCreateWebpackConfig = ({ getConfig, actions }) => {
    console.log('=========@@@@@', getConfig().mode);
    if (getConfig().mode === 'production') {
        actions.setWebpackConfig({ devtool: false });
    }
};
