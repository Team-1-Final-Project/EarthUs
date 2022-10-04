import { configureStore } from '@reduxjs/toolkit';
import loginSlice from './modules/loginSlice';
import postSlice from './modules/postSlice';

const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
    post: postSlice,
  },
});
export default store;
