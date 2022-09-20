import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';

import MainPage from 'pages/MainPage';
import BoardList from 'components/board/BoardList';
import BoardDetail from 'components/board/BoardDetail';

const Router = () => {
  return (
    <BrowserRouter>
      <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_ID}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/board" element={<BoardList />} />
          <Route path="/board/:id" element={<BoardDetail />} />
        </Routes>
      </GoogleOAuthProvider>
    </BrowserRouter>
  );
};

export default Router;
