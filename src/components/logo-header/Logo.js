import React from 'react'
import logo from '../../images/logo.jpeg';
import './logo.css';

const Logo = () => {
  return (
    <header className='logoHeader'>
      <img src={logo} alt="Forskoleupproret logga" />
    </header>
  )
}

export default Logo;