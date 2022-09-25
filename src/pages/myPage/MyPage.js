import React from 'react';
import Navbar from 'components/Navbar/ Navbar';

function MyPage() {
  const menuList = [
    { menu: '개인 정보 설정', link: '' },
    { menu: '작성한 게시글', link: '' },
    { menu: '좋아요한 게시글', link: '' },
    { menu: '참여중인 모임', link: '' },
  ];
  return (
    <div className="w-full">
      <Navbar />
      <div className="flex justify-center mt-20">
        <div className="flex flex-col w-56 bg-gray-100">
          <div className="h-40 text-center border-b-2 border-black">프로필</div>
          {menuList.map((menu, index) => (
            <div key={index}>
              <div className="h-20 text-center">■ {menu.menu}</div>
            </div>
          ))}
        </div>
        <div className="w-3/6 bg-gray-300">2</div>
      </div>
    </div>
  );
}

export default MyPage;
