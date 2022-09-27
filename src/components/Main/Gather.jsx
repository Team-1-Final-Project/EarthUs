import React from 'react';
import Carousel from 'utils/Carousel/Carousel';
import { MdPeopleOutline } from 'react-icons/md';

function Gather({ gather }) {
  return (
    <>
      <div className="w-9/12 pt-2 m-auto mt-8 text-defaultText">
        <div className="text-xl font-bold text-left">신규 모임</div>
        <Carousel>
          {gather &&
            gather.map((gather) => (
              <div
                key={gather.id}
                className="relative flex items-center w-10 h-40 bg-white border-2 border-defaultLine rounded-xl"
              >
                <div className="flex justify-between ">
                  <div className="mt-2 ml-4">
                    <div className="">
                      <span className="font-bold text-defaultColor">모집 중 </span>
                      <span className="font-bold">{gather.title}</span>
                    </div>
                    <div className="mt-2 text-sm">
                      <div>일시 : {gather.period}</div>
                      <div className="flex flex-row items-center">
                        <MdPeopleOutline />
                        <span>
                          &nbsp;참여 인원 : {gather.nowPeople} / {gather.limitPeople}
                        </span>
                      </div>
                      <div>장소 : 서울 어딘가</div>
                    </div>
                  </div>
                  <div>
                    <img src={gather.image} className="w-40 h-40 rounded-lg" />
                  </div>
                </div>
              </div>
            ))}
        </Carousel>
        <div className="mt-4 text-center">
          <button className="w-48 p-1 mt-4 text-white rounded-3xl bg-defaultColor">
            다른 모임 더 보러가기
          </button>
        </div>
      </div>
    </>
  );
}

export default Gather;
