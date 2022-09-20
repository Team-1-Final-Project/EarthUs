import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from 'pages/MainPage';
import CommentPage from 'pages/CommentPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/comment" element={<CommentPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
