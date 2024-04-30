import React, { useEffect } from "react";
import { useDispatch} from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/reduxSlice/movieSlice";

const useMovieTrailer = (movieIdValue) => {
  const dispatch = useDispatch();
  const getMovieVideo = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieIdValue}/videos`,
      API_OPTIONS
    );
    const json = await data?.json();
    const trailer = json?.results?.filter((data) => data?.type === "Trailer");
    const finalTrailer = trailer?.length ? trailer[0] : json?.results[0];
    dispatch(addTrailerVideo(finalTrailer));
  };
  useEffect(() => {
    getMovieVideo();
  }, []);
};

export default useMovieTrailer;
