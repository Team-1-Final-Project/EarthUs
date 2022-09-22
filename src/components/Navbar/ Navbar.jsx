import React from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const list = ['zerowaste', 'community', 'zeromoim', 'zeroshop'];

  return (
    <nav className="">
      <div className="max-w-6xl px-4 mx-auto">
        <div className="flex items-center justify-center h-20">
          <div className="text-3xl font-bold text-defaultColor">Earth,us</div>
        </div>
        <div className="flex items-center justify-between h-16">
          {list.map((list) => (
            <div
              className="text-defaultText hover:cursor-pointer hover:text-defaultColor"
              onClick={() => {
                navigate(`${list}`);
              }}
            >
              {list}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
