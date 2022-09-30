import React from 'react';
import Logo from 'assets/Logo.png';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import ProfileIcon from './ProfileIcon';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'components/modal/Modal';
import { useState } from 'react';
import KakaoLogin from 'components/login/KakaoLogin';
import HomeButton from './HomeButton';
import loginSlice, { loginLocation } from 'redux/modules/loginSlice';

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const state = useLocation();
  const params = useParams();
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
                  const location = state.pathname;
                  setModalState(true);
                  dispatch(loginSlice.actions.loginLocation(location));
                  console.log('여기', location);
                }}
              >
                로그인
              </button>
            )}
            {modalState && (
              <Modal
                onConfirm={modalState}
                children={
                  <div className="flex items-center flex-col">
                    <div className="flex mb-20">
                      <HomeButton />
                    </div>
                    <KakaoLogin />
                    <button
                      className="absolute inset-x-0 bottom-0 m-10 p-2 text-slate-300 rounded-md text-white"
                      onClick={() => setModalState(false)}
                    >
                      닫기
                    </button>
                  </div>
                }
                width={300}
                height={300}
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
