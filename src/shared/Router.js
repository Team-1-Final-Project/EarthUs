import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import MainPage from 'pages/MainPage';
import PostListPage from 'pages/PostListPage';
import PostDetail from 'components/post/PostDetail';
import KakaoAuth from 'components/login/KakaoAuth';
import GatheringRoute from './sub/GatheringRoute';

const Router = () => {
  return (
    <BrowserRouter>
      <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_ID}>
        <Routes>
          <Route path="/" element={<MainPage />} />
<<<<<<< HEAD
          <Route path="/gathering/*" element={<GatheringRoute />} />
          <Route path="/post" element={<PostList />} />
          <Route path="/post/:id" element={<PostDetail />} />
=======
          <Route path="/post" element={<PostListPage />} />
          <Route path="/postdetail" element={<PostDetail />} />
>>>>>>> 1198627c742cdb5f08f92968161a396d05429251
          <Route path="/kauth" element={<KakaoAuth />} />
        </Routes>
      </GoogleOAuthProvider>
    </BrowserRouter>
  );
};

export default Router;
