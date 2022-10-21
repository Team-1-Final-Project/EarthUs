import React from 'react';
import Logo from 'assets/images/Logo.png';
import { Link } from 'react-router-dom';

function HomeButton() {
  return (
    <nav className="">
      <div className="max-w-6xl px-4 mx-auto">
        <Link to="/">
          <div className="flex items-center justify-center h-20">
            <img src={Logo} className="w-10 h-10 mr-2" />
            <div
              className="text-4xl mt-2 text-[#52A4E2]"
              style={{ fontFamily: 'HiMelody-Regular' }}
            >
              Earth, us
            </div>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default HomeButton;
