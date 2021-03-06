import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import PageTemplateDetails from '../components/PageTemplateDetails';

class PageTemplate extends React.Component {
  render() {
    const { data } = this.props;
    const { title, subtitle } = data.site.siteMetadata;
    const page = data.markdownRemark;
    const { title: pageTitle, description: pageDescription } = page.frontmatter;
    const description = pageDescription !== null ? pageDescription : subtitle;

    return (
      <Layout>
        <div>
          <Helmet>
            <title>{`${pageTitle} - ${title}`}</title>
            <meta name="description" content={description} />
          </Helmet>
          <PageTemplateDetails {...this.props} />
        </div>
      </Layout>
    );
  }
}

export default PageTemplate;

export const pageQuery = graphql`
  query PageBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        subtitle
        copyright
        menu {
          label
          path
          title
        }
        author {
          name
          email
          linkedin
          twitter
          github
          rss
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      timeToRead
      frontmatter {
        title
        date
        description
      }
    }
  }
`;
