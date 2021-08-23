import Image from 'next/image';
import React from 'react';
import { IMovie } from '../pages';

interface IThumbnail {
  movie: IMovie;
}

function Thumbnail({ movie }: IThumbnail) {
  const BASE_URL = 'https://www.themoviedb.org/t/p/original';

  return (
    <Image
      layout="responsive"
      src={
        `${BASE_URL}${movie.backdrop_path || movie.poster_path}` ||
        `${BASE_URL}${movie.poster_path}`
      }
      alt="movie_thumbnail"
      width={1920}
      height={1080}
    />
  );
}

export default Thumbnail;
