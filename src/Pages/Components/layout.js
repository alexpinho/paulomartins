import React from 'react';
import PropTypes from 'prop-types';
import Header from './header';

const Layout = ({ children }) => {
  return (
    <div className="Layout">
      <Header/>
      {children}
    </div>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.node,
};
