import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import MainPage from 'pages/MainPage';
import PostListPage from 'pages/PostListPage';
import PostDetail from 'components/post/PostDetail';
import KakaoAuth from 'components/login/KakaoAuth';
import AddPost from 'components/post/AddPost';
import MeetingRoute from './sub/MeetingRoute';

const Router = () => {
  return (
    <BrowserRouter>
      <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_ID}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/meeting/*" element={<MeetingRoute />} />
          <Route path="/post" element={<PostListPage />} />
          <Route path="/postdetail/:id" element={<PostDetail />} />
          <Route path="/addpost" element={<AddPost />} />
          <Route path="/kauth" element={<KakaoAuth />} />
        </Routes>
      </GoogleOAuthProvider>
    </BrowserRouter>
  );
};

export default Router;
