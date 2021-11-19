import React from 'react';
import { header } from './header.module.scss';

const Header = () => {
  return (
    <div className={header}>
      <h3>Paulo Martins</h3>
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
