/* eslint-disable react/no-danger */
import React from 'react';

const About = ({ title = 'about', text = '' }) => (
  <>
    <h1>{title}</h1>
    <p dangerouslySetInnerHTML={{ __html: text }} />
  </>
);

export default About;
