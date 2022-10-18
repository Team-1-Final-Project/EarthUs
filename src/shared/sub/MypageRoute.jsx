import MyPage from 'pages/myPage/MyPage';
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { api, apis } from 'api/api';
import MyPagePost from 'pages/myPage/MyPagePost';
import MyPageMeeting from 'pages/myPage/MyPageMeeting';
import MyPageSetting from 'pages/myPage/MyPageSetting';

function MyPageRoute() {
  const [meeting, setMeeting] = useState();
  const [writePost, setWritePost] = useState();
  const [likePost, setLikePost] = useState();
  const [myBadge, setMyBadge] = useState();

  useEffect(() => {
    api.defaults.headers.common['Authorization'] = sessionStorage.getItem('Access_token');
    apis.getMyMeeting().then((res) => setMeeting(res.data));
    apis.getMyWritePost().then((res) => setWritePost(res.data));
    apis.getMyLikePost().then((res) => setLikePost(res.data));
    apis.getMyBadge().then((res) => setMyBadge(res.data));
  }, []);
  return (
    <Routes>
      <Route
        path="/"
        element={
          <MyPage meeting={meeting} writePost={writePost} likePost={likePost} myBadge={myBadge} />
        }
      />
      <Route path="/post" element={<MyPagePost writePost={writePost} likePost={likePost} />} />
      <Route path="/meet" element={<MyPageMeeting meeting={meeting} />} />
      <Route path="/setting" element={<MyPageSetting />} />
    </Routes>
  );
}
export default MyPageRoute;
