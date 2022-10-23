import { configureStore } from '@reduxjs/toolkit';
import postSlice from './modules/postSlice';
import heartSlice from './modules/heartSlice';

const store = configureStore({
  reducer: {
    post: postSlice,
    heart: heartSlice,
  },
});
export default store;
