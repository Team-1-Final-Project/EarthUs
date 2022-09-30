import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import loginSlice from 'redux/modules/loginSlice';

function MenuBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const user = useSelector((state) => {
    return state.login;
  });

  const menuList = [
    { menu: '마이 페이지', link: '/mypage' },
    { menu: '개인 정보 설정', link: '/mypage/setting' },
    { menu: '게시글 관리', link: '/mypage/post' },
    { menu: '모임 관리', link: '/mypage/meet' },
  ];

  return (
    <div className="flex flex-col w-56 bg-white">
      <div className="flex h-40">
        <img
          src={user.image}
          className="w-12 h-12 bg-gray-300 rounded-full hover:cursor-pointer"
          alt="프로필 이미지"
          onClick={() => {
            navigate('/mypage');
          }}
        ></img>
        <div className="ml-2 text-left">
          <div className="text-xl font-bold">{user.nickname}</div>
          <div className="text-sm ">{user.email}</div>
        </div>
      </div>
      <div className="text-left">
        {menuList.map((menu, index) => (
          <div key={index}>
            {
              <div
                className={`${
                  menu.link.includes(`${Object.values(params)[0]}` || ' ')
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
