import React, { useState } from 'react';
import { Link } from 'gatsby';
import './nav-bar.scss';
import pinIcon from '../../images/pinIcon.png';

const NavBar = () => {
  const [showMobileNav, setShowMobileNav] = useState('0');
  const [navToogleClass, setNavToogleClass] = useState('');

  const handleMobileNavToggle = () => {
    if (showMobileNav === '0') {
      setShowMobileNav('-400px');
      setNavToogleClass('open')
    } else {
      setShowMobileNav('0');
      setNavToogleClass('')
    };
  };


  return (
    <div className='navBarContainer'>
      <button className='mobileNavButton' onClick={handleMobileNavToggle}>
        <div id='nav-icon2' className={navToogleClass}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
      <nav className='mainNav' style={{marginLeft: showMobileNav}}>
        <ul>
          <li id='homeLinkMobile'>
            <Link to='/'>
                Hem
            </Link>
          </li>
          <li id='homeLink'>
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
              Om oss
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
    </div>
  );
};

export default NavBar;
