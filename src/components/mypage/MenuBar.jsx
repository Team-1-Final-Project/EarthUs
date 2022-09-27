import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function MenuBar() {
  const navigate = useNavigate();
  const params = useParams();

  const menuList = [
    { menu: '마이 페이지', link: '/mypage' },
    { menu: '개인 정보 설정', link: '/mypage/setting' },
    { menu: '게시글 관리', link: '/mypage/post' },
    { menu: '모임 관리', link: '/mypage/meet' },
  ];

  return (
    <div className="flex flex-col w-56 bg-white">
      <div className="flex h-40">
        <div className="w-12 h-12 bg-gray-300 rounded-full" />
        <div className="ml-2 text-left">
          <div className="text-xl font-bold">홍길동</div>
          <div className="text-sm ">test@test.com</div>
        </div>
      </div>
      <div className="text-left">
        {menuList.map((menu, index) => (
          <div key={index}>
            {
              <div
                className={`${
                  menu.link.includes(`${Object.values(params)[0]}`)
                    ? 'font-bold h-20 hover:font-bold hover:cursor-pointer'
                    : `h-20 hover:font-bold hover:cursor-pointer`
                }`}
                onClick={() => {
                  navigate(`${menu.link}`);
                }}
              >
                {menu.menu}
              </div>
            }
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenuBar;
