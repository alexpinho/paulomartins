import React from 'react';

const navbar = () => {
  return (
    <div className="navbar">
      <img src="images/logo.svg" className="logo" alt="" />
      <ul>
        <li>
          <a href='/'>Home</a>
        </li>
        <li>
          <a href='/atelier'>Atelier</a>
        </li>
        <li>
          <a href='/portfolio'>Portfolio</a>
        </li>
        <li>
          <a href='/jobs'>Jobs</a>
        </li>
        <li>
          <a href='/media'>Media</a>
        </li>
        <li>
          <a href='/contacts'>Contacts</a>
        </li>
      </ul>
    </div>
  );
};

export default navbar;
