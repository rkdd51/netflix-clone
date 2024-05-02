import React from 'react';
import useMovieTrailer from '../hooks/useMovieTrailer';
import { useSelector } from "react-redux";

const VideoBackground = ({ movieId }) => {
    const trailerVideo = useSelector((store) => store?.movies?.trailerVideos);
    useMovieTrailer(movieId);
  return (
    <div>
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?autoplay=1&mute=1"
        }
        title="YouTube video player"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default VideoBackground
