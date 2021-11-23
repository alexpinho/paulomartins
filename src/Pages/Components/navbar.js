import React from 'react';
import { useTranslation } from "react-i18next";



function Navbar (){
  const { i18n } = useTranslation();
  
  return (
    <div className="navbar">
      <img src="images/logo.svg" className="navbar-logo" alt="" />

      <div className="navbar-menus">

      <div className="navbar-btn-lang">
       <button
        className="navbar-btn-lang-pten"
        onClick={() => {
         i18n.changeLanguage("pt");
        }}
       >
         <span className="navbar-text">
        PT
        </span>
       </button>
       <button
        className="navbar-btn-lang-pten"
        onClick={() => {
         i18n.changeLanguage("en");
        }}
       >
        <span className="navbar-text">
        EN
        </span>
       </button>
      </div>

      <ul className="navbar-menu">
        <li className="navbar-menu-row">
          <a href='/' className="navbar-text">Home</a>
        </li>
        <li className="navbar-menu-row">
          <a href='/atelier' className="navbar-text">Atelier</a>
        </li>
        <li className="navbar-menu-row">
          <a href='/portfolio' className="navbar-text">Portfolio</a>
        </li>
        <li className="navbar-menu-row">
          <a href='/jobs' className="navbar-text">Jobs</a>
        </li>
        <li className="navbar-menu-row">
          <a href='/media' className="navbar-text">Media</a>
        </li>
        <li className="navbar-menu-row">
          <a href='/contacts' className="navbar-text">Contacts</a>
        </li>
      </ul>
    </div>

    </div>
  );
};

export default Navbar;
