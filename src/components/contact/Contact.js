import React from 'react'
import './contact.scss';
import * as img from '../../images/';

const Contact = () => {
  return (
    <>
      <h1 className='main-header__h1 contact__header-h1'>Kontakt</h1>
      <div className='contact__container'>
        <div className='contact__social-media-wrapper'>
          <a href='mailto:forskoleuppror@gmail.com'>
            <div className='social-media__img-container'>
              <img className='social-media__img' src={img.at} alt='Email link' />
              <img src={img.blob1} alt='Email blob' className='blob' />
            </div>
          </a>
        </div>
        <div className='contact__social-media-wrapper'>
          <a href='https://www.facebook.com/groups/forskoleupproret'>
            <div className='social-media__img-container'>
              <img className='social-media__img' src={img.facebook} alt='facebook link' />
              <img src={img.blob4} alt='facebook blob' className='blob' />
            </div>
          </a>
        </div>
        <div className='contact__social-media-wrapper'>
          <a href='https://www.instagram.com/forskoleupproret/?hl=sv'>
            <div className='social-media__img-container'>
              <img className='social-media__img' src={img.insta} alt='instagram link' />
              <img src={img.blob5} alt='instagram blob' className='blob' />
            </div>
          </a>
        </div>
        <div className='contact__social-media-wrapper'>
          <a href='https://twitter.com/forskoleuppror'>
            <div className='social-media__img-container'>
              <img className='social-media__img' src={img.twitter} alt='twitter link' />
              <img src={img.blob} alt='twitter blob' className='blob' />
            </div>
          </a>
        </div>
        <div className='contact__social-media-wrapper'>
          <a href='https://www.linkedin.com/in/förskoleupproret-nationell-2839a9168'>
            <div className='social-media__img-container'>
              <img className='social-media__img' src={img.linkedin} alt='linkedin link' />
              <img src={img.blob2} alt='linkedin blob' className='blob' />
            </div>
          </a>
        </div>
        <div className='contact__social-media-wrapper'>
          <a href='https://youtube.com/channel/UCbXox7QE2ShqjRQYp4Pqw3w'>
            <div className='social-media__img-container'>
              <img className='social-media__img' src={img.youtube} alt='youtube link' />
              <img src={img.blob3} alt='youtube blob' className='blob' />
            </div>
          </a>
        </div>
      </div>
    </>
  )
}

export default Contact;
