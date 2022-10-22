import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from 'pages/MainPage';
import PostListPage from 'pages/PostListPage';
import PostDetail from 'components/post/PostDetail';
import KakaoAuth from 'components/login/KakaoAuth';
import AddPost from 'components/post/AddPost';
import MeetingRoute from './sub/MeetingRoute';
import MyPageRoute from './sub/MypageRoute';
import ScrollToTop from 'components/ScrollTop';
import ReviewRoute from './sub/ReviewRoute';
import UpdatePost from 'components/post/UpdatePost';
import ZeroshopRoute from './sub/ZeroshopRoute';
import { GlobalStyle } from 'utils/styles/GlobalStyles';
import Sse from 'utils/Sse/Sse';
import { ToastContainer } from 'react-toastify';
import MeetingComment from 'components/meeting/comment/MeetingComment';

const Router = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Sse />
      <ToastContainer />
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/meeting/*" element={<MeetingRoute />} />
        <Route path="/meeting/comment/*" element={<MeetingComment />} />
        <Route path="/mypage/*" element={<MyPageRoute />} />
        <Route path="/community" element={<PostListPage />} />
        <Route path="/communitydetail/:id" element={<PostDetail />} />
        <Route path="/addpost" element={<AddPost />} />
        <Route path="/updatepost/:id" element={<UpdatePost />} />
        <Route path="/login/kakao" element={<KakaoAuth />} />
        <Route path="/review/*" element={<ReviewRoute />} />
        <Route path="/zeroshop/*" element={<ZeroshopRoute />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
