/**
 * This module provides the Redux store for the app.
 */

import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './moviesSlice';

// The only reducer this app uses is one that manages the movie
// results
export default configureStore({
  reducer: {
    movies: moviesReducer,
  },
});