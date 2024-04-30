import { configureStore } from '@reduxjs/toolkit';
import userReducer from "./reduxSlice/userSlice.js";
import movieReducer from "./reduxSlice/movieSlice.js";
const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer,
  },
});

export default appStore