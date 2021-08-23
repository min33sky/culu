import { ThumbUpIcon } from '@heroicons/react/outline';
import React from 'react';
import { IFetchMoviesResponse } from '../pages';
import Thumbnail from './Thumbnail';
import FlipMove from 'react-flip-move';

interface IResults {
  results: IFetchMoviesResponse;
}

function Results({ results }: IResults) {
  const { results: movies } = results;

  return (
    <FlipMove className="flex-wrap justify-center px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex">
      {movies.map((movie) => (
        <div
          key={movie.id}
          className="p-2 transition duration-200 ease-in transform cursor-pointer group sm:hover:scale-105 hover:z-50"
        >
          <Thumbnail movie={movie} />
          <div className="p-2">
            <p className="max-w-md truncate">{movie.overview}</p>
            <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
              {movie.title || movie.original_title}
            </h2>
            <p className="flex items-center opacity-0 group-hover:opacity-100">
              {movie.media_type && `${movie.media_type} •`} {movie.release_date || 'No Release'}
              {' • '}
              <ThumbUpIcon className="h-5 mx-2" /> {movie.vote_count}
            </p>
          </div>
        </div>
      ))}
    </FlipMove>
  );
}

export default Results;
