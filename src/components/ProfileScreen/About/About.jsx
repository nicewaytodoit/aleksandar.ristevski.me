/* eslint-disable react/no-danger */
import React from 'react';

const About = ({ title = 'about', text = '' }) => (
  <>
    <h1 className="page__title">{title}</h1>
    <p
      /* eslint-disable-next-line react/no-danger */
      dangerouslySetInnerHTML={{ __html: text }}
    />
  </>
);

export default About;
