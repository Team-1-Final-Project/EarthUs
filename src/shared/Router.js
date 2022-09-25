import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from 'pages/MainPage';
import PostListPage from 'pages/PostListPage';
import PostDetail from 'components/post/PostDetail';
import KakaoAuth from 'components/login/KakaoAuth';
import AddPost from 'components/post/AddPost';
import MeetingRoute from './sub/MeetingRoute';
import ZeroShop from 'pages/ZeroShop';
import CommentList from 'components/comment/CommentList';
import MyPageRoute from './sub/MypageRoute';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/meeting/*" element={<MeetingRoute />} />
        <Route path="/post" element={<PostListPage />} />
        <Route path="/postdetail/:id" element={<PostDetail />} />
        <Route path="/addpost" element={<AddPost />} />
        <Route path="/kauth" element={<KakaoAuth />} />
        <Route path="/mypage" element={<MyPageRoute />} />
        <Route path="/zeroshop" element={<ZeroShop />} />
        <Route path="/comment" element={<CommentList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
