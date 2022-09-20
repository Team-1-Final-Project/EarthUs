import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from 'pages/MainPage';
import PostList from 'components/post/PostList';
import PostDetail from 'components/post/PostDetail';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/post" element={<PostList />} />
        <Route path="/post/:id" element={<PostDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
