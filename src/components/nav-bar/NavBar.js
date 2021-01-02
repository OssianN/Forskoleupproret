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
        <Link to='/how-it-started'>
          <li>Såhär började det</li>
        </Link>
        <Link to='/accomplishments'>
          <li>Det här har vi gjort</li>
        </Link>
        <Link to='/pressat-lage'>
          <li>#pressatläge</li>
        </Link>
        <Link to='/vi-vagrar-bryta-lagen'>
          <li>#vivägrarbrytalagen</li>
        </Link>
        <Link to='/press'>
          <li>Press</li>
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
