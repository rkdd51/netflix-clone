import { createSlice } from '@reduxjs/toolkit';

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideos: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideos = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
  },
});


export const { addNowPlayingMovies, addTrailerVideo, addPopularMovies } =
  movieSlice.actions;
export default movieSlice.reducer;