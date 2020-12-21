import React from 'react'
import NavBar from '../components/nav-bar/NavBar';
import Logo from '../components/logo-header/Logo';
import insta from '../images/insta.png';
import facebook from '../images/fb.png';

export const OmOss = () => {
  return (
    <div>
      <NavBar />
      <Logo />
      <div className='tabContent'>
        <h1 className='tabHeader'>
          Om Oss
        </h1>
        <a href='https://www.facebook.com/groups/forskoleupproret'>
            <img src={facebook} alt='facebook link' />
          </a>
          <a href='https://www.instagram.com/forskoleupproret/?hl=sv'>
            <img src={insta} alt='instagram link' />
          </a>
      </div>
    </div>
  )
}

export default OmOss;