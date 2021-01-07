import React from 'react';
import { Link } from 'gatsby';
import './nav-bar.css';
import pinIcon from '../../images/pinIcon.png';

const NavBar = () => {
  return (
    <nav className='mainNav'>
      <div className='mobileNav'></div>
      <ul>
        <Link to='/'>
          <li>
            <img src={pinIcon} alt='home' id='hemknapp' />
          </li>
        </Link>
        <Link to='/goalDemand'>
          <li>Mål & Krav</li>
        </Link>
        <Link to='/om-oss'>
          <li>Om Oss</li>
        </Link>
        <Link to='/history'>
          <li>Historik</li>
        </Link>
        <Link to='/pressatLage'>
          <li>#pressatläge</li>
        </Link>
        <Link to='/viVagrarBrytaLagen'>
          <li>#viVägrarBrytaLagen</li>
        </Link>
        <Link to='/press'>
          <li>Press</li>
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
