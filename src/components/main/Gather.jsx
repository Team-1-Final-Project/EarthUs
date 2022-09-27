import React from 'react';
import { useNavigate } from 'react-router-dom';
import Carousel from 'utils/Carousel/Carousel';

function Gather({ gather }) {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-8/12 pt-2 m-auto mt-8 text-defaultText">
        <div className="text-xl font-bold text-left">신규 모임</div>
        <Carousel>
          {gather &&
            gather.map((gather) => (
              <div
                key={gather.id}
                className="relative flex items-center w-10 h-40 bg-white default_outline"
              >
                <div className="flex justify-between ">
                  <div className="mt-2 ml-4">
                    <div className="">
                      <span className="font-bold text-defaultColor">모집 중 </span>
                      <span className="font-bold">{gather.title}</span>
                    </div>
                    <div className="mt-2 text-sm">
                      <div>일시 : {gather.period}</div>
                      <div>
                        참여 인원 : {gather.nowPeople} / {gather.limitPeople}
                      </div>
                      <div>장소 : 서울 어딘가</div>
                    </div>
                  </div>
                  <div className="w-1/3">
                    <img src={gather.image} className="w-full h-40 rounded-lg" />
                  </div>
                </div>
              </div>
            ))}
        </Carousel>
        <div className="mt-4 text-center">
          <button
            className="w-48 p-1 mt-4 default_button"
            onClick={() => {
              navigate('/meeting');
            }}
          >
            다른 모임 더 보러가기
          </button>
        </div>
      </div>
    </>
  );
}

export default Gather;
