import React, { useState } from 'react'
import Layout from '../components/Layout';
import NavBar from '../components/nav-bar/NavBar';
import Person from '../components/peoplePresentations/Person';
import PersonCard from '../components/peoplePresentations/PersonCard';
import * as img from '../images/';
import '../components/styles/index.scss'
import Contact from '../components/contact/Contact';

const OmOss = () => {
  const [ selectedPerson, setSelectedPerson ] = useState('Anki Jansson');
  const [ showPerson, setShowPerson ] = useState('hide-person');

  const handlePersonChange = e => {
    const person = e.target.name;
    setSelectedPerson(person);
  }

  return (
    <Layout>
      <div className='om-oss__container'>
        <header className='main-header'>
          <h1 className='main-header__h1'>
            Vilka är vi bakom Förskoleupproret?
          </h1>
          <img className='main-header__hero-img' src={img.gruppbild} alt='gruppbild'></img>
          <p className='main-header__intro-paragraph main-p'>
            Förskoleupproret drivs ideellt av sex engagerade pedagoger i förskolan. Allt arbete med Förskoleupproret sker under kvällar, helger och efter arbetstid. Ledningsgruppen har nästan daglig kontakt och diskuterar kontinuerligt Förskoleupprorets utvecklingsområden, nästa steg och eventuella kampanj.
          </p>
        </header>
        <div className='person-thumbnails__container'>
          <button className='person-thumbnails__button' name='Anki Jansson' onClick={handlePersonChange}>
            <img className='person-thumbnails__img' src={img.anki}></img>
            <h4 className='person-thumbnails__name-h4'>Anki Jansson</h4>
          </button>
          <button className='person-thumbnails__button' name='Katrin Nörthen' onClick={handlePersonChange}>
            <img className='person-thumbnails__img' src={img.katrin}></img>
            <h4 className='person-thumbnails__name-h4'>Katrin Nörthen</h4>
          </button>
          <button className='person-thumbnails__button' name='Diana Hall' onClick={handlePersonChange}>
            <img className='person-thumbnails__img' src={img.diana}></img>
            <h4 className='person-thumbnails__name-h4'>Diana Hall</h4>
          </button>
          <button className='person-thumbnails__button' name='Annette Nord' onClick={handlePersonChange}>
            <img className='person-thumbnails__img' src={img.annette}></img>
            <h4 className='person-thumbnails__name-h4'>Annette Nord</h4>
          </button>
          <button className='person-thumbnails__button' name='Monica Lindström' onClick={handlePersonChange}>
            <img className='person-thumbnails__img' src={img.monica}></img>
            <h4 className='person-thumbnails__name-h4'>Monica Lindström</h4>
          </button>
          <button className='person-thumbnails__button' name='Annica Järking' onClick={handlePersonChange}>
            <img className='person-thumbnails__img' src={img.annica}></img>
            <h4 className='person-thumbnails__name-h4'>Annica Järking</h4>
          </button>
        </div>

        <PersonCard personName={selectedPerson} setShowPerson={setShowPerson} />
        <Person personName={selectedPerson} setShowPerson={setShowPerson} showPerson={showPerson} />
        <Contact />
      </div> 
    </Layout>
  )
}

export default OmOss;