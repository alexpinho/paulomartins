import React from 'react';
import { useTranslation } from "react-i18next";



function Navbar (){
  const { i18n } = useTranslation();
  
  return (
    <div className="navbar">
      <img src="images/logo.svg" className="navbar-logo" alt="" />

      <div >
       <button
        className="navbar-btn-lang-pten"
        onClick={() => {
         i18n.changeLanguage("pt");
        }}
       >
        PT
       </button>
       <button
        className="navbar-btn-lang-pten"
        onClick={() => {
         i18n.changeLanguage("en");
        }}
       >
        EN
       </button>
      </div>

      <ul className="navbar-menu">
        <li className="navbar-row">
          <a href='/' className="navbar-text">Home</a>
        </li>
        <li>
          <a href='/atelier' className="navbar-text">Atelier</a>
        </li>
        <li>
          <a href='/portfolio' className="navbar-text">Portfolio</a>
        </li>
        <li>
          <a href='/jobs' className="navbar-text">Jobs</a>
        </li>
        <li>
          <a href='/media' className="navbar-text">Media</a>
        </li>
        <li>
          <a href='/contacts' className="navbar-text">Contacts</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
