import React from 'react';
import Logo from 'assets/Logo.png';
import { Link } from 'react-router-dom';

function HomeButton() {
  return (
    <nav className="">
      <div className="max-w-6xl px-4 mx-auto">
        <div className="flex items-center justify-center h-20">
          <Link to="/">
            <img src={Logo} className="w-10 h-10 rounded-full" alt="Logo" />
            <div className="text-3xl font-bold text-defaultColor">Earth,us</div>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default HomeButton;
