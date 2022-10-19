import React from 'react';
import Navbar from 'components/navbar/Navbar';
import MenuBar from 'components/mypage/MenuBar';
import Footer from 'components/footer/Footer';
import Setting from 'components/mypage/Setting';

function MyPageSetting() {
  return (
    <>
      <div className="w-full">
        <Navbar />
        <div className="flex justify-center mt-20">
          <MenuBar />
          <div className="w-3/6">
            <Setting />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default MyPageSetting;
