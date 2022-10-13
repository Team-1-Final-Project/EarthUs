import React from 'react';
import { useLocation, useNavigate, NavLink } from 'react-router-dom';
import ProfileIcon from './ProfileIcon';
import Modal from 'components/modal/Modal';
import { useState } from 'react';
import HomeButton from './HomeButton';
import KakaoLogin from 'components/login/KakaoLogin';

function Navbar() {
  const navigate = useNavigate();
  const state = useLocation();
  const [modalState, setModalState] = useState(false);
  const loginState = sessionStorage.getItem('Access_token');
  const image = sessionStorage.getItem('profileImage');

  const links = [
    {
      path: '/',
      label: '홈',
      exact: 'true',
      end: 'true',
    },
    {
      path: '/community',
      label: '커뮤니티',
      exact: 'false',
      end: 'false',
    },
    {
      path: '/meeting',
      label: '제로모임',
      exact: 'false',
      end: 'false',
    },
    {
      path: '/zeroshop',
      label: '제로샵',
      exact: 'false',
      end: 'false',
    },
  ];
  return (
    <nav className="">
      <div className="max-w-6xl px-4 mx-auto">
        <div className="flex items-center justify-between h-20">
          <HomeButton />
          <div className="flex items-center justify-center ">
            {loginState ? (
              <div className="flex items-center gap-3">
                <div className="hover:cursor-pointer">
                  <ProfileIcon image={image}></ProfileIcon>
                </div>
              </div>
            ) : (
              <button
                className="p-2 text-slate-300"
                onClick={() => {
                  const LOCATION = state.pathname;
                  setModalState(true);
                  sessionStorage.setItem('Location', LOCATION);
                }}
              >
                로그인
              </button>
            )}
            {modalState && (
              <Modal
                onConfirm={() => setModalState(false)}
                children={
                  <div className="flex flex-col items-center">
                    <div className="flex mb-10 xl:mb-20">
                      <HomeButton />
                    </div>
                    <KakaoLogin />
                    <button
                      className="inset-x-0 bottom-0 p-2 mt-10 rounded-md text-slate-300"
                      onClick={() => setModalState(false)}
                    >
                      닫기
                    </button>
                  </div>
                }
              />
            )}
          </div>
        </div>

        <div className="flex items-center justify-between h-16">
          {links.map(({ path, label, exact, end }) => (
            <NavLink
              to={path}
              className={({ isActive }) =>
                isActive ? 'py-1 border-b-2 border-black font-black' : ''
              }
              exact={exact}
              end={end}
              onClick={() => {
                navigate();
              }}
            >
              {label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
