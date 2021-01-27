import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import './nav-bar.scss';
import pinIcon from '../../images/pinIcon.png';

const NavBar = () => {
  const [showMobileNav, setShowMobileNav] = useState('-400px');
  const [navToggleClass, setNavToggleClass] = useState('');
  const [activeTab, setActiveTab] = useState('');

  const handleActiveTab = () => {
    const tabName = window?.location.href.match(/[-\w]+\/?$/ig)[0];
    switch (tabName) {
      case 'goalDemand':
        setActiveTab('goalDemand')
        break;

      case 'om-oss':
        setActiveTab('om-oss')
        break;

      case 'history':
        setActiveTab('history')
        break;

      case 'press':
        setActiveTab('press')
        break;

      case 'pressatLage':
        setActiveTab('pressatLage')
        break;

      case 'viVagrarBrytaLagen':
        setActiveTab('viVagrarBrytaLagen')
        break;

      default:
        break;
    }
  }

 useEffect(() => {
  handleActiveTab();
 });

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
      <div className='navBarContainer'>
        <Link to='/' className='mobileNavIcon'>
          <img src={pinIcon} alt='logo'></img>
        </Link>
        <button className='mobileNavButton' onClick={handleMobileNavToggle}>
          <div id='nav-icon2' className={navToggleClass}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>
      <nav className='mainNav' style={{marginRight: showMobileNav}}>
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
            <Link to='/goalDemand' style={ activeTab === 'goalDemand' ? {color: '#F58124'} : {color: 'black'}}>
              Mål & Krav
            </Link>
          </li>
          <li>
            <Link to='/om-oss' style={ activeTab === 'om-oss' ? {color: '#F58124'} : {color: 'black'}}>
              Om oss
            </Link>
          </li>
          <li>
            <Link to='/history' style={ activeTab === 'history' ? {color: '#F58124'} : {color: 'black'}}>
              Historik
            </Link>
          </li>
          <li>
            <Link to='/press' style={ activeTab === 'press' ? {color: '#F58124'} : {color: 'black'}}>
              Press
            </Link>
          </li>
          <li>
            <Link to='/pressatLage' style={ activeTab === 'pressatLage' ? {color: '#F58124'} : {color: 'black'}}>
              #pressatläge
            </Link>
          </li>
          <li>
            <Link to='/viVagrarBrytaLagen' style={ activeTab === 'viVagrarBrytaLagen' ? {color: '#F58124'} : {color: 'black'}}>
              #vivägrarbrytalagen
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
