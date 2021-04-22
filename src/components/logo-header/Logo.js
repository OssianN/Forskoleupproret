import React, { useHistory } from 'react'
import './logo.css';
import * as images from '../../images/';

const Logo = () => {
  return (
    <div className='logo-header__container'>
      <img className='logo-header__img' src={images.banner} alt="Forskoleupproret logga" />
    </div>
  )
}

export default Logo;