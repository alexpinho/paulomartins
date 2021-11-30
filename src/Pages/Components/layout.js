import React from 'react';
import PropTypes from 'prop-types';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import CustomCursor from "./CustomCursor/CustomCursor";


const Layout = ({ children }) => {
  return (
    <div className="Layout">
      <CustomCursor />
      <Navbar/>
      {children}
      <Footer/>
    </div>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.node,
};
