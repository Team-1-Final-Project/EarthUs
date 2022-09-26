import React from 'react';
import Navbar from 'components/navbar/ Navbar';
import MenuBar from 'components/mypage/MenuBar';
import Meeting from 'components/mypage/Meeting';
import Post from 'components/mypage/Post';
import Badge from 'components/mypage/Badge';
import Mission from 'components/mypage/Mission';

function MyPage() {
  return (
    <div className="w-full">
      <Navbar />
      <div className="flex justify-center mt-20">
        <MenuBar />
        <div className="w-3/6">
          <Post />
          <Meeting />
          <Badge />
          <Mission />
        </div>
      </div>
    </div>
  );
}

export default MyPage;
