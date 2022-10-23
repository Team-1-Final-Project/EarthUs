import React from 'react';
import Banner1 from 'assets/images/banner/Banner1.png';
import Banner2 from 'assets/images/banner/Banner2.png';
import Slider from 'react-slick';

function Banner() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 300,
    autoplaySpeed: 5000,
    fade: true,
    cssEase: 'linear',
  };

  return (
    <>
      <Slider {...settings}>
        <div className="flex justify-center ">
          <div className="flex items-center justify-center w-full gap-10 bg-green-800 h-96 rounded-2xl">
            <div className="text-2xl font-bold text-white md:text-5xl">
              <div className="m-2">제로웨이스트의 모든 것</div>
              <span className="px-2 text-[#f4da48] rounded-full">Earth, us</span>
              <span>에서</span>
            </div>
            <img className="w-40 h-10/12 md:w-80" src={Banner1}></img>
          </div>
        </div>
        <div
          className="flex justify-center hover:cursor-pointer"
          onClick={() => window.open('https://forms.gle/CTmqop6WDoXrzyfEA', '_blank')}
        >
          <div className="flex items-center justify-center w-full gap-10 bg-sky-300 h-96 rounded-2xl">
            <img className="w-40 h-10/12 md:w-80" src={Banner2}></img>
            <div className="text-2xl font-bold text-white md:text-5xl">
              <div className="m-2">피드백 이벤트 진행중!</div>
              <span className="px-2 text-blue-800 rounded-full">참여하러 가기!</span>
              <div className="px-2 mt-4 text-base text-gray-500">
                * 배너 클릭시 구글폼으로 이동합니다.
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </>
  );
}

export default Banner;
