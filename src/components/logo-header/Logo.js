import React from 'react'
import logo from '../../images/logo3.jpeg';
import './logo.css';
import * as images from '../../images/';

const Logo = () => {
  return (
    <header className='logoHeader'>
      <div>
        <img src={logo} alt="Forskoleupproret logga" />
      </div>
    </header>
  )
}

export default Logo;