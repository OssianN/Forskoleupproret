import React from 'react';
import Logo from '../components/logo-header/Logo'
import HomeImages from '../components/home-images/HomeImages';
import Layout from '../components/Layout';
import '../styles/index.scss'

export default function Home() {

  return (
    <Layout>
      <Logo />
      <HomeImages />
    </Layout>
  );
};
