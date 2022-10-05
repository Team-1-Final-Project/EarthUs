import React from 'react';
import Logo from 'assets/Logo.png';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import ProfileIcon from './ProfileIcon';
import { useSelector } from 'react-redux';
import Modal from 'components/modal/Modal';
import { useState } from 'react';
import KakaoLogin from 'components/Login/KakaoLogin';
import HomeButton from './HomeButton';

function Navbar() {
  const navigate = useNavigate();
  const state = useLocation();
  const [modalState, setModalState] = useState(false);

  const list = [
    ['zerowaste', ''],
    ['community', 'community'],
    ['zeromoim', 'meeting'],
    ['zeroshop', 'zeroshop'],
  ];
  const data = useSelector((state) => {
    return state.login;
  });

  return (
    <nav className="">
      <div className="max-w-6xl px-4 mx-auto">
        <div className="flex items-center justify-between h-20">
          <HomeButton />
          <div className="flex items-center justify-center ">
            {data.loginState ? (
              <div className="flex items-center gap-3">
                <div className="hover:cursor-pointer">
                  <ProfileIcon image={data.image}></ProfileIcon>
                </div>
              </div>
            ) : (
              <button
                className="p-2 text-slate-300"
                onClick={() => {
                  const LOCATION = state.pathname;
                  setModalState(true);
                  sessionStorage.setItem('Location', LOCATION);
                  console.log('여기', LOCATION);
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
                      className="inset-x-0 bottom-0 p-2 mt-10 text-white rounded-md text-slate-300"
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
          {list.map((list, index) => (
            <div
              className={'text-defaultText hover:cursor-pointer hover:text-defaultColor'}
              key={index}
              onClick={() => {
                navigate(`/${list[1]}`);
              }}
            >
              {list[0]}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
