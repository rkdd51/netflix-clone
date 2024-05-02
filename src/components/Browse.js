import React from "react";
import Header from "./Header";
import useNowPlayingHook from '../hooks/useNowPlayingHook';
import usePopularMovies from "../hooks/usePopularMovies";
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {
  useNowPlayingHook();
  usePopularMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
