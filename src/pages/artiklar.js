import React from 'react'
import NavBar from '../components/nav-bar/NavBar';
import Logo from '../components/logo-header/Logo';

export const Artiklar = () => {
  return (
    <div className='articles'>
      <NavBar />
      <Logo />
      <div className='tabContent'>
        <h1 className='tabHeader'>
          Artiklar
        </h1>
      </div>
    </div>
  )
}

export default Artiklar;