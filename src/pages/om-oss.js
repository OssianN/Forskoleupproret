import React from 'react'
import NavBar from '../components/nav-bar/NavBar';
import insta from '../images/insta.png';
import facebook from '../images/fb.png';
import twitter from '../images/twitter.png';
import linkedin from '../images/linkedin.png';
import at from '../images/at.png';

export const OmOss = () => {
  return (
    <div>
      <NavBar />
      <div className='tabContent'>
        <h1 className='tabHeader'>
          Om Oss
        </h1>
        <h2>
          Förskoleupproret - det här arbetar vi för
        </h2>
        <h2>
          Ledningsgruppen: vilka är vi?
        </h2>
        <h2>
          Kontakt:
        </h2>
        <div className="contactInfo">
        <span>
          <a href='mailto:forskoleuppror@gmail.com'>
            <img src={at} alt='Email link' />
          </a>
        </span>
        <span>
          <a href='https://www.facebook.com/groups/forskoleupproret'>
            <img src={facebook} alt='facebook link' />
          </a></span>
        <span>
          <a href='https://www.instagram.com/forskoleupproret/?hl=sv'>
            <img src={insta} alt='instagram link' />
          </a>
        </span>
        <span>
          <a href='https://twitter.com/forskoleuppror'>
            <img src={twitter} alt='twitter link' />
          </a>
        </span>
        <span>
          <a href='https://www.linkedin.com/in/förskoleupproret-nationell-2839a9168'>
            <img src={linkedin} alt='linkedin link' />
          </a>
        </span>
        </div> 
      </div>
    </div>
  )
}

export default OmOss;