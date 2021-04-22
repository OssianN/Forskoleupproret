import React from 'react'
import './contact.scss';
import * as img from '../../images/';

const Contact = () => {

  return (
    <>
      <h1 className='main-header__h1 contact__header-h1'>Kontakt</h1>
      <div className='contact__container'>
        <img src={img.blob2} className='contact__blob' alt='blob'></img>
        <div className='contact__orange-background'></div>
        <div className='contact__social-media-wrapper'>
          <a className='social-media__link' href='mailto:forskoleuppror@gmail.com'>
            <img className='social-media__img' src={img.at} alt='Email link' />
          </a>
          <a className='social-media__link' href='https://www.facebook.com/groups/forskoleupproret'>
            <img className='social-media__img' src={img.facebook} alt='facebook link' />
          </a>
          <a className='social-media__link' href='https://www.instagram.com/forskoleupproret/?hl=sv'>
            <img className='social-media__img' src={img.insta} alt='instagram link' />
          </a>
          <a className='social-media__link' href='https://twitter.com/forskoleuppror'>
            <img className='social-media__img' src={img.twitter} alt='twitter link' />
          </a>
          <a className='social-media__link' href='https://www.linkedin.com/in/förskoleupproret-nationell-2839a9168'>
            <img className='social-media__img' src={img.linkedin} alt='linkedin link' />
          </a>
          <a className='social-media__link' href='https://youtube.com/channel/UCbXox7QE2ShqjRQYp4Pqw3w'>
            <img className='social-media__img' src={img.youtube} alt='youtube link' />
          </a>
        </div>
      </div>
    </>
  )
}

export default Contact;
