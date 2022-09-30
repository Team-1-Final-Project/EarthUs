import React from 'react';
import Navbar from 'components/navbar/Navbar';
import MenuBar from 'components/mypage/MenuBar';
import Meeting from 'components/mypage/Meeting';
import Footer from 'components/footer/Footer';

function MyPageMeeting() {
  return (
    <div className="w-full">
      <Navbar />
      <div className="flex justify-center mt-20">
        <MenuBar />
        <div className="w-3/6">
          <Meeting />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MyPageMeeting;
