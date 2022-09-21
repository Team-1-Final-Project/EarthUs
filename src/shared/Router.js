import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';

import MainPage from 'pages/MainPage';
import PostList from 'components/post/PostList';
import PostDetail from 'components/post/PostDetail';
import KakaoAuth from 'components/login/KakaoAuth';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/post" element={<PostList />} />
        <Route path="/post/:id" element={<PostDetail />} />
        <Route path="/kauth" element={<KakaoAuth />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
