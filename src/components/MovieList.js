import React from 'react'
import MovieCard from './MovieCard';
const MovieList = (props) => {
  return (
    <div>
      <h2 className="text-3xl px-4 font-bold text-white">{props?.title}</h2>
      <div className="p-4 flex overflow-x-scroll">
        <div className="flex gap-3">
          {props?.movies?.results.map((data, i) => {
            return <MovieCard key={i} posterPath={data?.poster_path} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default MovieList
