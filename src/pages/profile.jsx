import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import { Container, Row, Col } from 'react-awesome-styled-grid';
import { graphql } from 'gatsby';
import siteConfig from '../Data/siteData.json';

import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import SEO from '../components/ProfileScreen/SEO/Seo';
import Wrapper from '../components/ProfileScreen/Wrapper/Wrapper';
import About from '../components/ProfileScreen/About/About';
import Skills from '../components/ProfileScreen/Skills/Skills';
import Timeline from '../components/ProfileScreen/Timeline/Timeline';
import Repositories from '../components/ProfileScreen/Repositories/Repositories';
import '../components/ProfileScreen/Layout/Layout.css';

const Separator = styled.hr`
  margin-top: 24px;
  margin-bottom: 16px;
`;

class Home extends React.Component {
  render() {
    const { props } = this;
    return (
      <Layout>
        <div>
          <Helmet title="Profile" />
          <Sidebar {...this.props} />
          <div className="content">
            <div className="content__inner">
              <SEO title="Profile" keywords={['gatsbyjs', 'react', 'curriculum']} />
              <Wrapper className={props.className}>
                <Container className="page-content" fluid>
                  <Row>
                    <Col xs={4} sm={4}>
                      <About title="About" text={siteConfig.authorDescription} />
                    </Col>
                    <Col xs={4} sm={4}>
                      <Skills title="Skills" skills={siteConfig.skills} />
                    </Col>
                  </Row>
                  <Separator />
                  <Timeline />
                  <Separator />
                  <br/>
                  <br/>
                  <Repositories />
                </Container>
              </Wrapper>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default styled(Home)`
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
  query ProfileQuery {
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
