import React from 'react';
import { useSelector } from 'react-redux';
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
const MainContainer = () => {
    const movies = useSelector((store) => store.movies?.nowPlayingMovies);
    //*Movies initial value is null, that why we need to add this condition sot that if the data is not present than the code does not throw an error
    if (!movies) return;
    const mainMovie = movies?.results?.[0];
    // console.log('mainMovie: ', mainMovie);

  return (
    <div>
      <VideoTitle
        title={mainMovie?.original_title}
        description={mainMovie?.overview}
      />
      <VideoBackground movieId={mainMovie?.id}/>
    </div>
  );
}

export default MainContainer
