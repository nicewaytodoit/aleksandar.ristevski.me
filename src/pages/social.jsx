import React, { useEffect, useState } from 'react';
import { graphql } from 'gatsby';

import { Container, Row, Col } from 'react-awesome-styled-grid';
import Sidebar from '../components/Sidebar';
import Layout from '../components/Layout';
import SEO from '../components/ProfileScreen/SEO/Seo';
import Wrapper from '../components/ProfileScreen/Wrapper/Wrapper';
import loadTwitterEmbed from '../utils/tweets';


const Social = (props) => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { loadTwitterEmbed(() => setLoaded(true)); }, []);
  return (
      <Layout>
        <div>
          <Sidebar {...props} />
          <div className="content">
            <div className="content__inner">
              <SEO title="Social" keywords={['social', 'network', 'tweeter']} />
              <Wrapper className={props.className}>
                <Container className="page-content" fluid>
                  <Row>
                    <Col>
                      <h1 className="page__title">Social</h1>
                      <div
                        className="scroll-frame"
                        style={{
                          width:"500px",
                          maxHeight: '600px',
                          overflow: 'scroll',
                          overflowX: 'hidden',
                          paddingRight: '10px',
                        }}
                      >
                      { loaded ? (  
                        <a
                          className="twitter-timeline" 
                          href="https://twitter.com/NiceWayToDoIT?ref_src=twsrc%5Etfw"
                          data-tweet-limit="5"
                          >
                            Tweets by NiceWayToDoIT
                        </a>) : ''
                        }
                      </div>
                    </Col>
                  </Row>
                </Container>
              </Wrapper>
            </div>
          </div>
        </div>
      </Layout>
    );
};

export default Social;

export const pageQuery = graphql`
  query SocialQuery {
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
