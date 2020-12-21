import React from 'react';
import './home-images.css';
import img1 from '../../images/img1.jpeg';


const HomeImages = () => {
  return (
    <div className="homeImgContainer">
      <div className="imageDiv" id="image1">
        <img src={img1} alt='one' />
        <h2>Om Oss</h2>
        <p>Det här är vi och det här gör vi...</p>
      </div>
      <div className="imageDiv" id="image1">
        <img  src={img1} alt='one' />
        <h2>Artiklar</h2>
        <p>Här är det senaste, blabla...</p>
        </div>
      <div className="imageDiv" id="image1">
        <img  src={img1} alt='one' />
        <h2>Kontakt</h2>
        <p>Här är länkar till sociala medier och kontaktuppgifter...</p>
      </div>
      <div className="imageDiv" id="image1">
        <img src={img1} alt='one' />
        <h2>Etc</h2>
        <p>Något annat...</p>
      </div>
      <div className="imageDiv" id="image1">
        <img  src={img1} alt='one' />
        <h2>Etc</h2>
        <p>Något annat...</p>
      </div>
      <div className="imageDiv" id="image1">
        <img  src={img1} alt='one' />
        <h2>Etc</h2>
        <p>Något annat...</p>
      </div>
    </div>
  );
};

export default HomeImages;
