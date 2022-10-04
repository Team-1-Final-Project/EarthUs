import MyPage from 'pages/myPage/MyPage';
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { apis } from 'api/api';
import MyPagePost from 'pages/myPage/MyPagePost';
import MyPageMeeting from 'pages/myPage/MyPageMeeting';
import MyPageSetting from 'pages/myPage/MyPageSetting';

function MyPageRoute() {
  const [meeting, setMeeting] = useState();
  const [writePost, setWritePost] = useState();
  const [likePost, setLikePost] = useState();

  useEffect(() => {
    apis.getMyMeeting().then((res) => setMeeting(res.data));
    apis.getMyWritePost().then((res) => console.log(res));
    apis.getMyLikePpst().then((res) => console.log(res));
  }, []);
  return (
    <Routes>
      <Route path="/" element={<MyPage meeting={meeting} />} />
      <Route path="/post" element={<MyPagePost />} />
      <Route path="/meet" element={<MyPageMeeting meeting={meeting} />} />
      <Route path="/setting" element={<MyPageSetting />} />
    </Routes>
  );
}
export default MyPageRoute;
