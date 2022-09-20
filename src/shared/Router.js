import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from 'pages/MainPage';
import BoardList from 'components/board/BoardList';
import BoardDetail from 'components/board/BoardDetail';
import KakaoAuth from 'components/login/KakaoAuth';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/board" element={<BoardList />} />
        <Route path="/board/:id" element={<BoardDetail />} />
        <Route path="/kauth" element={<KakaoAuth />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
