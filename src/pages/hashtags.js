import React from 'react'
import NavBar from '../components/nav-bar/NavBar';

export const HashTags = () => {
  return (
    <div className='hashtags'>
      <NavBar />
      <div className='tabContent'>
        <h1 className='tabHeader'>
          Våra Hashtags
        </h1>
        <div className='viVagrarBrytaLagen'>
          <h1>
            #pressatläge
          </h1>
          <h2>Vittnesmål</h2>
        </div>
        <div className='viVagrarBrytaLagen'>
          <h1>
            #vivägrarbrytalagen
          </h1>
          <h2>Vittnesmål</h2>
        </div>
      </div>
    </div>
  )
}

export default HashTags;