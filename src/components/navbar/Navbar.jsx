import React from 'react';
import Logo from 'assets/Logo.png';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import ProfileIcon from './ProfileIcon';
import { useSelector } from 'react-redux';
import Modal from 'components/modal/Modal';
import { useState } from 'react';
import KakaoLogin from 'components/login/KakaoLogin';

function Navbar() {
  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
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
          <div className="flex items-center text-3xl font-bold text-defaultColor">
            <img src={Logo} className="w-10 h-10 rounded-full" />
            <span className="ml-2">Earth, us </span>
          </div>
          <div className="flex items-center justify-center ">
            {data.loginState ? (
              <div className="flex items-center gap-3">
                <div
                  className="hover:cursor-pointer"
                  onClick={() => {
                    navigate('/mypage');
                  }}
                >
                  <ProfileIcon image={data.image}></ProfileIcon>
                </div>
                <span className=" text-[12px] text-defaultLine ml-2">
                  <button>로그아웃</button>
                </span>
              </div>
            ) : (
              <button
                className="p-2 text-slate-300"
                onClick={() => {
                  setModalState(true);
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
                    <KakaoLogin />
                    <button
                      className="absolute inset-x-0 bottom-0 m-10 p-2 bg-cyan-400 hover:bg-cyan-500 rounded-md text-white"
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
              className={
                'text-defaultText hover:cursor-pointer hover:text-defaultColor' +
                (true ? true : true)
              }
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
