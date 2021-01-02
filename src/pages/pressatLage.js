import React from 'react'
import NavBar from '../components/nav-bar/NavBar';

export const HashTags = () => {
  return (
    <div>
      <NavBar />
      <div className='tabContent'>
        <h1 className='tabHeader'>
          #pressatläge
        </h1>
        <h2>Vittnesmål</h2>
      </div>
    </div>
  )
}

export default HashTags;