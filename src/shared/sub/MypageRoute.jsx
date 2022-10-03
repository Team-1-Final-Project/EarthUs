import MyPage from 'pages/myPage/MyPage';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MyPagePost from 'pages/myPage/MyPagePost';
import MyPageMeeting from 'pages/myPage/MyPageMeeting';
import MyPageSetting from 'pages/myPage/MyPageSetting';

function MyPageRoute() {
  return (
    <Routes>
      <Route path="/" element={<MyPage />} />
      <Route path="/post" element={<MyPagePost />} />
      <Route path="/meet" element={<MyPageMeeting />} />
      <Route path="/setting" element={<MyPageSetting />} />
    </Routes>
  );
}

export default MyPageRoute;
