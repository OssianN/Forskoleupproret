import React from 'react';
import { Link } from 'gatsby';
import './nav-bar.css';
import pinIcon from '../../images/pinIcon.png';

const NavBar = () => {
  return (
    <nav className='mainNav'>
      <ul>
        <Link to='/'>
          <li>
            <img src={pinIcon} alt='home' id='hemknapp' />
          </li>
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
