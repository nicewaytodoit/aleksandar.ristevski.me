import React from 'react';
import { graphql } from 'gatsby';
import Sidebar from '../components/Sidebar';
import Layout from '../components/Layout';

class Test extends React.Component {
  render() {
    return (
      <Layout>
        <div>
          <Sidebar {...this.props} />
          <div>
            <h1>Test</h1>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Test;

export const pageQuery = graphql`
  query TestQuery {
    site {
      siteMetadata {
        title
        subtitle
        copyright
        menu {
          label
          path
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
  }
`;
