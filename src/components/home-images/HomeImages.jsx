import React from 'react';
import { Link } from 'gatsby';
import './home-images.css';
import powerful from '../../images/powerful.svg';
import aboutUs from '../../images/aboutUs.svg';
import history from '../../images/history.svg';
import press from '../../images/press.svg';


const HomeImages = () => {
  return (
    <div className="homeImgContainer">
      <div className="imageDiv">
        <Link to='/goalDemand'>
          <img  src={powerful} alt='one' />
          <div className='textbox'>
            <h2>Mål & Krav</h2>
            <p>Läs om vårt mål och vilka krav vi har...</p>
          </div>
        </Link>
      </div>
      <div className="imageDiv">
        <Link to='/om-oss'>
          <img src={aboutUs} alt='one' />
          <div className='textbox'>
            <h2>Om oss</h2>
            <p>Läs om vilka vi är och vad vi gör...</p>
          </div>
        </Link>
      </div>
      <div className="imageDiv">
        <Link to='/history'>
          <img  src={history} alt='one' />
          <div className='textbox'>
            <h2>Historik</h2>
            <p>Hur Förskoleupproret började...</p>
          </div>
        </Link>
      </div>
      <div className="imageDiv">
        <Link to='/press'>
          <img src={press} alt='one' />
          <div className='textbox'>
            <h2>Press</h2>
            <p>Våra artiklar, publicerade artiklar och omnämnda...</p>
          </div>
          <p></p>
        </Link>
      </div>
      <div className="imageDiv hashtagCard">
        <Link to='/viVagrarBrytaLagen'>
          <h2 className='smallerFont' id='hashtagText'>#vivägrarbrytalagen</h2>
        </Link>
      </div>
      <div className="imageDiv hashtagCard">
        <Link to='/pressatLage'>
          <h2 id='hashtagText'>#pressatläge</h2>
        </Link>
      </div>
    </div>
  );
};

export default HomeImages;
