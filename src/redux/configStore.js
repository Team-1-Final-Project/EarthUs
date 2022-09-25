import { configureStore } from '@reduxjs/toolkit';
import loginSlice from './modules/loginSlice';

const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
  },
});
export default store;
