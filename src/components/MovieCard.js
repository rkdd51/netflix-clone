import React from 'react'
import { IMG_CONSTANTS } from "../utils/constants";
const MovieCard = ({ posterPath }) => {
  return (
    <>
      <img className="w-52" src={IMG_CONSTANTS+posterPath} alt="Poster" />
    </>
  );
};

export default MovieCard
