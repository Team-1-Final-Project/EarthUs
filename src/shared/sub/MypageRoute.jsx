import MyPage from 'pages/myPage/MyPage';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
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
      <Route path="/" element={<MyPage />} />
      <Route path="/post" element={<MyPagePost />} />
      <Route path="/meet" element={<MyPageMeeting />} />
      <Route path="/setting" element={<MyPageSetting />} />
    </Routes>
  );
}

export default MyPageRoute;
