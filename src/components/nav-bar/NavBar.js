import React from 'react';
import { Link } from 'gatsby';
import './nav-bar.css';
import pinIcon from '../../images/pinIcon.png';

const NavBar = () => {
  return (
    <nav className='mainNav'>
      <div className='mobileNav'></div>
      <ul>
        <li>
          <Link to='/'>
              <img src={pinIcon} alt='home' id='hemknapp' />
          </Link>
        </li>
        <li>
          <Link to='/goalDemand'>
            Mål & Krav
          </Link>
        </li>
        <li>
          <Link to='/om-oss'>
            Om Oss
          </Link>
        </li>
        <li>
          <Link to='/history'>
            Historik
          </Link>
        </li>
        <li>
          <Link to='/press'>
            Press
          </Link>
        </li>
        <li>
          <Link to='/pressatLage'>
            #pressatläge
          </Link>
        </li>
        <li>
          <Link to='/viVagrarBrytaLagen'>
            #vivägrarbrytalagen
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
