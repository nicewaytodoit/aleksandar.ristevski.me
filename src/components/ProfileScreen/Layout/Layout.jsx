import React from 'react';
import PropTypes from 'prop-types';
import siteConfig from '../../../Data/siteData.json';

import Header from '../Header/Header';
import './Layout.css';

const Layout = ({ children }) => (
  <React.Fragment>
    <Header headerLinks={siteConfig.headerLinks} />
    <div>{children}</div>
  </React.Fragment>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
