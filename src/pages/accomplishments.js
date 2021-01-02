import React from 'react'
import NavBar from '../components/nav-bar/NavBar';

export const accomplishments = () => {
  return (
    <div>
        <NavBar />
        <div className='tabContent'>
          <h1 className='tabHeader'>Det här har vi gjort</h1>
          <h2>Cafeträff med rikspolitker</h2>
          <h2>2018</h2>
          <h2>2019</h2>
          <h2>Möte med samtliga politiker 6/11 2019</h2>
      </div>
    </div>
  )
}

export default accomplishments;