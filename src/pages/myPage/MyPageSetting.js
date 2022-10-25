import React, { useState } from 'react';
import Navbar from 'components/navbar/Navbar';
import MenuBar from 'components/mypage/MenuBar';
import Footer from 'components/footer/Footer';
import Badge from 'components/mypage/Badge';
import ImageSetting from 'components/mypage/ImageSetting';
import NicknameSetting from 'components/mypage/NicknameSetting';
import { useInput } from 'hooks/useInput';
import { apis } from 'api/api';

function MyPageSetting({ myBadge }) {
  const badgeSetting = true;
  const profileImage = sessionStorage.getItem('profileImage');

  const [repBadge, setRepBadge] = useInput();
  const [repImage, setRepImage, imageChange] = useInput(profileImage);
  const [nickname, setNickname] = useInput();

  const deleteImage = () => {};
  const changeImage = () => {
    apis.updateProfileImage(repImage).then((res) => console.log(res));
    console.log('hi');
  };

  return (
    <>
      <div className="w-full">
        <Navbar />
        <div className="flex justify-center mt-20">
          <MenuBar />
          <div className="w-3/6">
            <div className="flex flex-col">
              <div className="m-4 text-xl font-bold">닉네임 설정</div>
              <div>
                <NicknameSetting />
              </div>
              <div className="m-4 text-xl font-bold">대표 이미지 설정</div>
              <div>
                <ImageSetting repImage={repImage} changeImage={changeImage} />
              </div>
              <div className="m-4 text-xl font-bold">대표 뱃지 설정</div>
              <div>
                <Badge myBadge={myBadge} badgeSetting={badgeSetting} />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default MyPageSetting;
