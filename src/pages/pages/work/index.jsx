import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import { Container, Row, Col } from 'react-awesome-styled-grid';
import { graphql } from 'gatsby';
import siteConfig from '../../../Data/siteData.json';

import Layout from '../../../components/Layout';
import '../../../components/ProfileScreen/Layout/Layout.css';

import Sidebar from '../../../components/Sidebar';
import SEO from '../../../components/ProfileScreen/SEO/Seo';
import Wrapper from '../../../components/ProfileScreen/Wrapper/Wrapper';
import History from '../../../components/ProfileScreen/History/History';

const Separator = styled.hr`
  margin-top: 24px;
  margin-bottom: 16px;
`;

class Work extends React.Component {
  render() {
    const { props } = this;
    return (
      <Layout>
        <div>
          <Helmet title="Work History" />
          <Sidebar {...this.props} />
          <div className="content">
            <SEO title="Work History" keywords={['Aleksandar Ristevski', 'work', 'history', 'cv', 'profile', 'UI Developer', 'Frontend Developer', 'Team Lead']} />
            <Wrapper className={props.className}>
              <Container className="page-content" fluid>
                <h1>Work</h1>
                <History />
              </Container>
            </Wrapper>
          </div>
        </div>
      </Layout>
    );
  }
}

export default styled(Work)`
  .page-content {
    max-width: 100%;
    margin-bottom: 40px;
  }

  .avatar {
    align-items: center;
  margin-bottom: 24px;
  }

  .avatar__image {
    box-shadow: 3px 3px 15px 0px rgba(0,0,0,0.75);
    max-width: 200px;
    border-radius: 100px;
    margin: 0 auto 24px;
  }

  .social {
    margin-top: 12px;
    margin-bottom: 12px;
  }

  .social-link {
    padding: 8px;
    color: #555;
  }

  a.social-link.twitter:hover {
    color: #1da1f2;
  }

  a.social-link.github:hover {
    color: #24292e;
  }

  a.social-link.linkedin:hover {
    color: #0077B5;
  }

  a.social-link.email:hover {
    color: #c23a2b;
  }
`;

export const pageQuery = graphql`
  query WorkQuery {
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
    allMarkdownRemark(
      limit: 2000
      filter: { frontmatter: { layout: { eq: "post" }, draft: { ne: true } } }
    ) {
      group(field: frontmatter___category) {
        fieldValue
        totalCount
      }
    }
  }
`;
