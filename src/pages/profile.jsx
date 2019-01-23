import React from 'react';
// import { Container, Row, Col } from 'react-awesome-styled-grid';

const Profile = ({ name }) => {
  const title = `Test${name}`;
  // <Layout location={this.props.location}>
  // <SEO title={title} keywords={['gatsbyjs', 'react', 'curriculum']} />
  // <Wrapper className={this.props.className} >
  // <Container className="page-content" fluid>
  // <Row>
  // <Col xs={4} sm={4}>
  // <About title='About' text={siteConfig.authorDescription}/>
  // </Col>
  // <Col xs={4} sm={4}>
  // <Skills title='Skills' skills={siteConfig.skills} />
  // </Col>
  // </Row>
  // <Separator />
  // <Timeline />
  // <Separator />
  // <Repositories />
  // </Container>
  // </Wrapper>
  // </Layout>
  return (
    <p>
      <h1>
        Profile
        {' '}
        {title}
      </h1>
    </p>
  );
};

export default Profile;
