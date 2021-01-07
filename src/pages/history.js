import React from 'react'
import NavBar from '../components/nav-bar/NavBar';

export const History = () => {
  return (
    <div className='history'>
      <NavBar />
      <div className='tabContent'>
        <div className='thisIsHowItStarted'>
          <h1 className='tabHeader'>
            Såhär började det
          </h1>
          <iframe className='howItStartedVideo' title='Såhär började det' overflow='hidden' width='1000' height='562' frameborder="0" allowfullscreen src='https://mittmedia.solidtango.com/widgets/embed/z7eq5691?articleId=854b20ca-d448-3f4a-9357-6f4c41426265&as=0&auto_play=true&domain=na.se&s_referrer=https%253A%252F%252Fresource-service.mmcloud.se%252F&seek=&siteurl=https%3A%2F%2Fwww.na.se%2Fartikel%2Fna-tv-har-forsoker-politikern-stoppa-dagisupproret&tags=%C3%96rebro+l%C3%A4n%2C%C3%96rebro%2CAllm%C3%A4nt&unitId=%2F34405621%2Fmm%2Fna'>
          </iframe>
        </div>
        <div>
          <h1>
            Ankis egna berättelse
          </h1>
          <p>
            loremipsum dolor sit amet, consectetur adipiscing.
          </p>
        </div>
        <div className='accomplishments'>
          <h1 className='tabHeader'>Det här har vi gjort</h1>
          <h2>Cafeträff med rikspolitker</h2>
          <h2>2018</h2>
          <h2>2019</h2>
          <h2>Möte med samtliga politiker 6/11 2019</h2>
        </div>
      </div>
    </div>
  )
}

export default History;