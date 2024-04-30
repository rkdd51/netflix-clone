import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/reduxSlice/movieSlice.js";

const useNowPlayingHook = () => {
  const dispatch = useDispatch();
  const getAllPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const jsonData = await data.json();
    dispatch(addNowPlayingMovies(jsonData));
  };
  useEffect(() => {
    getAllPopularMovies();
  }, []);
  
};

export default useNowPlayingHook;
