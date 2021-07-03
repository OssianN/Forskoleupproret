import React from 'react';
import NavBar from './nav-bar/NavBar';
import './styles/index.scss';

const Layout = ({ children }) => {
  const mainContainer = {
    maxWidth: '1200px',
    minHeight: '100vh',
    padding: '0 30px',
    paddingBottom: '100px',
    margin: '0 auto',
  }

  return (
    <div className='main-layout' style={mainContainer}>
      <NavBar />
      { children }
    </div>
  )
}

export default Layout
