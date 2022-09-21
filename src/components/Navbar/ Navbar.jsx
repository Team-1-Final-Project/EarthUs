import React from 'react';

function Navbar() {
  return (
    <nav className="">
      <div className="max-w-6xl px-4 mx-auto">
        <div className="flex items-center justify-between h-16">
          {/* 메뉴 */}
          <div className="flex flex-row items-center gap-8">
            <div className="text-2xl font-bold text-green-600">Logo</div>
            <div className="">커뮤니티</div>
            <div>모임</div>
            <div>추천샵</div>
          </div>
          {/* 메뉴2 */}
          <div>로그인</div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
