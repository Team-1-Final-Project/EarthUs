import React from 'react';
import Navbar from 'components/Navbar/Navbar';
import MenuBar from 'components/mypage/MenuBar';
import Post from 'components/mypage/Post';

function MyPagePost() {
  return (
    <div className="w-full">
      <Navbar />
      <div className="flex justify-center mt-20">
        <MenuBar />
        <div className="w-3/6">
          <Post />
        </div>
      </div>
    </div>
  );
}

export default MyPagePost;
