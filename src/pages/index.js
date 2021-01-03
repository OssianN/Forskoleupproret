import React from 'react';
import '../styles/global.css';
import Logo from '../components/logo-header/Logo'
import HomeImages from '../components/home-images/HomeImages';

export default function Home() {

  return (
    <div className="app">
      <Logo />
      <HomeImages />
    </div>
  )
}
