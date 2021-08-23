import axios from 'axios';
import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Results from '../components/Results';
import requests from '../utils/request';

export interface IMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  media_type: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface IFetchMoviesResponse {
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

const Home: NextPage<{ results: IFetchMoviesResponse }> = ({ results }) => {
  return (
    <div>
      <Head>
        <title>Culu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Nav />

      <Results results={results} />
    </div>
  );
};

export async function getServerSideProps(context: any) {
  const genre: string = context.query.genre;

  const { data } = await axios.get(
    `https://api.themoviedb.org/3${requests[genre]?.url || requests['fetchTrending'].url}`
  );

  return {
    props: {
      results: data,
    },
  };
}

export default Home;
