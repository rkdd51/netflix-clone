import React from 'react'
import MovieList from './MovieList';
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector(store=>store?.movies)
  return (
    <div className="bg-black">
      <div className="-mt-52 relative z-20">
        <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />

        <MovieList title={"New Released"} movies={movies?.popularMovies} />
        <MovieList title={"Trending"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Popular"} movies={movies?.nowPlayingMovies} />
      </div>
    </div>
  );
}

export default SecondaryContainer
