import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import './nav-bar.scss';
import pinIcon from '../../images/pinIcon.png';

const NavBar = () => {
  const [showMobileNav, setShowMobileNav] = useState('-400px');
  const [navToggleClass, setNavToggleClass] = useState('');

  const handleMobileNavToggle = () => {
    if (showMobileNav === '0') {
      setShowMobileNav('-400px');
      setNavToggleClass('')
    } else {
      setShowMobileNav('0');
      setNavToggleClass('open')
    };
  };

  return (
    <>
      <button className='nav__mobile-toggle-button' onClick={handleMobileNavToggle}>
        <div id='nav-icon2' className={navToggleClass}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
      <div className='nav__mobile-top-span'>
        <Link to='/' className='nav__mobile-home-button'>
          <img src={pinIcon} alt='icon' className='nav__icon'></img>
        </Link>
      </div>
      <nav className='nav__container' style={{marginRight: showMobileNav}}>
        <ul className='nav__ul'>
          <li className='nav__list-item nav__mobile-home-link'>
            <Link to='/' className='nav__link' activeClassName='active-tab'>
                Hem
            </Link>
          </li>
          <li className='nav__list-item nav__home-link'>
            <Link className='nav__link' to='/'>
                <img src={pinIcon} alt='icon' className='nav__icon' />
            </Link>
          </li>
          <li className='nav__list-item'>
            <Link className='nav__link' to='/goalDemand' activeClassName='active-tab'>
              Mål & Krav
            </Link>
          </li>
          <li className='nav__list-item'>
            <Link className='nav__link' to='/om-oss' activeClassName='active-tab'>
              Om oss
            </Link>
          </li>
          <li className='nav__list-item'>
            <Link className='nav__link' to='/history' activeClassName='active-tab'>
              Historik
            </Link>
          </li>
          <li className='nav__list-item'>
            <Link className='nav__link' to='/press' activeClassName='active-tab'>
              Press
            </Link>
          </li>
          <li className='nav__list-item'>
            <Link className='nav__link' to='/pressatLage' activeClassName='active-tab'>
              #pressatläge
            </Link>
          </li>
          <li className='nav__list-item'>
            <Link className='nav__link' to='/viVagrarBrytaLagen' activeClassName='active-tab'>
              #vivägrarbrytalagen
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
