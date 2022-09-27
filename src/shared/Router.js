import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from 'pages/MainPage';
import PostListPage from 'pages/PostListPage';
import PostDetail from 'components/post/PostDetail';
import KakaoAuth from 'components/login/KakaoAuth';
import AddPost from 'components/post/AddPost';
import MeetingRoute from './sub/MeetingRoute';
import ZeroShop from 'pages/ZeroShop';
import MyPageRoute from './sub/MypageRoute';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/meeting/*" element={<MeetingRoute />} />
        <Route path="/mypage/*" element={<MyPageRoute />} />
        <Route path="/post" element={<PostListPage />} />
        <Route path="/postdetail/:id" element={<PostDetail />} />
        <Route path="/addpost" element={<AddPost />} />
        <Route path="/login/kakao" element={<KakaoAuth />} />
        <Route path="/zeroshop" element={<ZeroShop />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
