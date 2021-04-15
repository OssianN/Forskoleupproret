import React from 'react';
import { Link } from 'gatsby';
import './home-images.css';
import * as images from '../../images/';

const HomeImages = () => {
  return (
    <div className='home-box__container'>
      <div className='home-box'>
        <Link to='/goalDemand' className='home-box__link'>
          <img className='home-box__img' src={images.powerful} alt='one' />
          <div className='home-box__text-container'>
            <h2 className='main-h2 home-box__title-h2'>Mål & Krav</h2>
            <p className='home-box__paragraph main-p'>Läs om vårt mål och vilka krav vi har...</p>
          </div>
        </Link>
      </div>
      <div className='home-box'>
        <Link to='/om-oss' className='home-box__link'>
          <img className='home-box__img' src={images.aboutUs} alt='one' />
          <div className='home-box__text-container'>
            <h2 className='main-h2 home-box__title-h2'>Om oss</h2>
            <p className='home-box__paragraph main-p'>Läs om vilka vi är och vad vi gör...</p>
          </div>
        </Link>
      </div>
      <div className='home-box'>
        <Link to='/history' className='home-box__link'>
          <img className='home-box__img' src={images.history} alt='one' />
          <div className='home-box__text-container'>
            <h2 className='main-h2 home-box__title-h2'>Historik</h2>
            <p className='home-box__paragraph main-p'>Hur Förskoleupproret började...</p>
          </div>
        </Link>
      </div>
      <div className='home-box'>
        <Link to='/press' className='home-box__link'>
          <img className='home-box__img' src={images.press} alt='one' />
          <div className='home-box__text-container'>
            <h2 className='main-h2 home-box__title-h2'>Press</h2>
            <p className='home-box__paragraph main-p'>Våra artiklar, publicerade artiklar och omnämnda...</p>
          </div>
        </Link>
      </div>
      <div className='home-box hashtag-card'>
        <Link to='/pressatLage' className='home-box__hashtag-link'>
          <h2 className='home-box__hashtag-text'>#PRESSATLÄGE</h2>
          <span className='home-box__hashtag-span span1'></span>
        </Link>
      </div>
      <div className='home-box hashtag-card'>
        <Link to='/viVagrarBrytaLagen' className='home-box__hashtag-link'>
          <h2 className='home-box__hashtag-text home-box__smaller-font'>#VIVÄGRARBRYTALAGEN</h2>
          <span className='home-box__hashtag-span span2'></span>
        </Link>
      </div>
    </div>
  );
};

export default HomeImages;
