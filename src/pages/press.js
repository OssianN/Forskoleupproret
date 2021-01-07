import React from 'react'
import NavBar from '../components/nav-bar/NavBar';

export const Press = () => {
  return (
    <div className='press'>
      <NavBar />
      <div className='tabContent'>
        <h1 className='tabHeader'>
          Press
        </h1>
        <h2>Egna artiklar</h2>
        <h2>Omnämnda</h2>
      </div>
    </div>
  )
}

export default Press;