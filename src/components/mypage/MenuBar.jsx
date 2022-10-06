import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams, useLocation } from 'react-router-dom';

function MenuBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const pathName = useLocation().pathname.split('/')[1];

  const loginState = sessionStorage.getItem('Access_token');
  const image = sessionStorage.getItem('profileImage');
  const nickname = sessionStorage.getItem('nickname');
  const email = sessionStorage.getItem('email');

  //pathName으로 메뉴바 체크하기

  // const user = useSelector((state) => {
  //   return state.login;
  // });

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
          src={image}
          className="w-12 h-12 bg-gray-300 rounded-full hover:cursor-pointer"
          alt=""
          onClick={() => {
            navigate('/mypage');
          }}
        ></img>
        <div className="ml-2 text-left">
          <div className="text-xl font-bold">{nickname}</div>
          <div className="text-sm ">{email}</div>
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
