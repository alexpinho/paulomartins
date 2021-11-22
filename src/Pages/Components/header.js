import React from 'react';

const Header = () => {
  return (
    <div className="navbar">
      <div className="logo">
      <h3>Paulo Martins</h3>
      </div>
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

export default Header;
