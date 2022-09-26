import React from 'react';
import Logo from 'assets/Logo.png';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import ProfileIcon from './ProfileIcon';
import { useSelector } from 'react-redux';

function Navbar() {
  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();

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
                <ProfileIcon></ProfileIcon>
                <div
                  className="hover:cursor-pointer"
                  onClick={() => {
                    navigate('/mypage');
                  }}
                >
                  <span className=" text-[12px] text-defaultLine ml-2">로그아웃</span>
                </div>
              </div>
            ) : null}
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
