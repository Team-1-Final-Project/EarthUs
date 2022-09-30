import React from 'react';
import Navbar from 'components/navbar/Navbar';
import MenuBar from 'components/mypage/MenuBar';
import Meeting from 'components/mypage/Meeting';
import Post from 'components/mypage/Post';
import Badge from 'components/mypage/Badge';
import Mission from 'components/mypage/Mission';
import Footer from 'components/footer/Footer';

function MyPage({ meeting }) {
  const sliceMeeting = meeting?.slice(0, 2);
  return (
    <div className="w-full">
      <Navbar />
      <div className="flex justify-center mt-20">
        <MenuBar />
        <div className="w-3/6">
          <Post />
          <Meeting meeting={sliceMeeting} />
          <Badge />
          <Mission />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MyPage;
