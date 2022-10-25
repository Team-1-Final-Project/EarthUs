import React from 'react';
import { useNavigate, NavLink } from 'react-router-dom';

function MenuBar() {
  const navigate = useNavigate();

  const loginState = sessionStorage.getItem('Access_token');
  const image = sessionStorage.getItem('profileImage');
  const nickname = sessionStorage.getItem('nickname');
  const email = sessionStorage.getItem('email');

  const links = [
    {
      path: '/mypage',
      label: '마이 페이지',
      exact: 'true',
      end: 'true',
    },
    {
      path: '/mypage/setting',
      label: '개인 정보 설정',
      exact: 'false',
      end: 'false',
    },
    {
      path: '/mypage/post',
      label: '게시글 관리',
      exact: 'false',
      end: 'false',
    },
    {
      path: '/mypage/meet',
      label: '모임 관리',
      exact: 'false',
      end: 'false',
    },
  ];
  return (
    <div className="flex flex-col w-56 bg-white">
      <div className="flex h-40">
        <img
          src={image}
          className="w-12 h-12 bg-gray-300 rounded-full hover:cursor-pointer backdrop-grayscale"
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
        {links.map(({ path, label, exact, end }) => (
          <div className="flex h-20" key={path}>
            <NavLink
              to={path}
              className={({ isActive }) => (isActive ? 'font-bold' : '')}
              exact={exact}
              end={end}
              onClick={() => {
                navigate();
              }}
            >
              {label}
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
}
export default MenuBar;
