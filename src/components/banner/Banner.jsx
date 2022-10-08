import React from 'react';
import Banner1 from 'assets/images/Banner1.png';

function Banner() {
  return (
    <>
      <div className="flex justify-center">
        <div className="flex items-center justify-center w-full gap-10 bg-green-800 h-96">
          <div className="text-2xl font-bold text-white md:text-5xl">
            <div className="m-2">제로웨이스트의 모든 것</div>
            <span className="px-2 text-[#f4da48] rounded-full">Earth, us</span>
            <span>에서</span>
          </div>
          <img className="w-40 h-10/12 md:w-80" src={Banner1}></img>
        </div>
      </div>
    </>
  );
}

export default Banner;
