import React from 'react';
import Navbar from 'components/navbar/Navbar';
import MenuBar from 'components/mypage/MenuBar';
import Meeting from 'components/mypage/Meeting';
import Badge from 'components/mypage/Badge';
import Mission from 'components/mypage/Mission';
import Footer from 'components/footer/Footer';
import { LikePost, WritePost } from 'components/mypage/Post';

function MyPage({ meeting, writePost, likePost, myBadge, myMission }) {
  function sliceData(data) {
    return data?.slice(0, 2);
  }

  return (
    <div className="w-full">
      <Navbar />
      <div className="flex justify-center mt-20">
        <MenuBar />
        <div className="w-3/6">
          <div className="m-4 mt-10 text-xl font-bold">획득한 뱃지</div>
          <Badge myBadge={myBadge} />
          <Mission myMission={myMission} />
          <Meeting meeting={sliceData(meeting)} />
          <WritePost writePost={sliceData(writePost)} />
          <LikePost likePost={sliceData(likePost)} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MyPage;
