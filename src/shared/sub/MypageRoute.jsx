import MyPage from 'pages/myPage/MyPage';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

function MyPageRoute() {
  return (
    <Routes>
      <Route path="/" element={<MyPage />} />
      <Route path="/post" element={<MyPage />} />
    </Routes>
  );
}

export default MyPageRoute;
