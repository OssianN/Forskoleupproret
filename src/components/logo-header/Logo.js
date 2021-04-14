import React from 'react'
import './logo.css';
import * as images from '../../images/';

const Logo = () => {
  return (
    <header className='logo-header__container'>
      <div className='logo-header__box'>
        <img className='logo-header__img' src={images.banner} alt="Forskoleupproret logga" />
      </div>
    </header>
  )
}

export default Logo;