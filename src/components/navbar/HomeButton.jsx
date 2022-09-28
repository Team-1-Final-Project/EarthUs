import React from 'react';
import { Link } from 'react-router-dom';

function HomeButton() {
  return (
    <nav className="">
      <div className="max-w-6xl px-4 mx-auto">
        <div className="flex items-center justify-center h-20">
          <Link to="/">
            <div className="text-3xl font-bold text-defaultColor">Earth,us</div>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default HomeButton;
