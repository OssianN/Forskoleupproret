import React, { useHistory } from 'react'
import './logo.css';
import * as images from '../../images/';

const Logo = () => {
  return (
    <header className='logo-header__container'>
      <img className='logo-header__img' src={images.banner} alt="Forskoleupproret logga" />
    </header>
  )
}

export default Logo;