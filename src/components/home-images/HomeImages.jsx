import React from 'react';
import { Link } from 'gatsby';
import './home-images.css';
import img1 from '../../images/img1.jpeg';


const HomeImages = () => {
  return (
    <div className="homeImgContainer">
      <div className="imageDiv" id="image1">
        <Link to='/goalDemand'>
          <img  src={img1} alt='one' />
          <h2>Mål & Krav</h2>
          <p>Hur Förskoleupproret började...</p>
        </Link>
      </div>
      <div className="imageDiv" id="image1">
        <Link to='/om-oss'>
          <img src={img1} alt='one' />
          <h2>Om oss</h2>
          <p>Läs om vilka vi är och vad vi gör...</p>
        </Link>
      </div>
      <div className="imageDiv" id="image1">
        <Link to='/history'>
          <img  src={img1} alt='one' />
          <h2>Historik</h2>
        </Link>
      </div>
      <div className="imageDiv" id="image1">
        <Link to='/hashtags'>
          <img  src={img1} alt='one' />
          <h2>Hashtags</h2>
        </Link>
      </div>
      <div className="imageDiv" id="image1">
        <Link to='/news'>
          <img src={img1} alt='one' />
          <h2>Nyheter</h2>
          <p>Vad vi har gjort och åstakommit hittills...</p>
        </Link>
      </div>
      <div className="imageDiv" id="image1">
        <Link to='/press'>
          <img  src={img1} alt='one' />
          <h2>Press</h2>
          <p>Våra artiklar och omnämnda</p>
        </Link>
      </div>
    </div>
  );
};

export default HomeImages;
