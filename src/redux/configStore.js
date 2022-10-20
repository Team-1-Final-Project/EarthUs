import { configureStore } from '@reduxjs/toolkit';
import postSlice from './modules/postSlice';
import heartSlice from './modules/heartSlice';
import searchSlice from './modules/searchSlice';

const store = configureStore({
  reducer: {
    post: postSlice,
    heart: heartSlice,
    search: searchSlice,
  },
});
export default store;
