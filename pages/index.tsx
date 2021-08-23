import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Culu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header />
      {/* NavBar */}
      <Nav />
      {/* Content */}
    </div>
  );
};

export default Home;
