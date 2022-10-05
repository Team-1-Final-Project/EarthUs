import { configureStore } from '@reduxjs/toolkit';
import loginSlice from './modules/loginSlice';
import postSlice from './modules/postSlice';
import heartSlice from './modules/heartSlice';

const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
    post: postSlice,
    heart: heartSlice,
  },
});
export default store;
