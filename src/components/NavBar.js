import React from 'react';
import { Link } from 'gatsby';

const NavBar = () => {
  return (
    <nav>
      <ul className="mainNavUl">
        <Link to='/'>
          <li>Hem</li>
        </Link>
        <Link to='/om-oss'>
          <li>Om Oss</li>
        </Link>
        <Link to='/artiklar'>
          <li>Artiklar</li>
        </Link>
        <Link to='/kontakt'>
          <li>Kontakt</li>
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
