import React from 'react';
import { useNavigate } from 'react-router-dom';
import Carousel from 'utils/Carousel/Carousel';
import { MdPeopleOutline } from 'react-icons/md';
import { GrLocation } from 'react-icons/gr';

function Meeting({ meeting }) {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-8/12 pt-2 m-auto mt-8 text-defaultText">
        <div className="text-xl font-bold text-left">신규 모임</div>
        <Carousel>
          {meeting &&
            meeting.map((meeting) => (
              <div
                key={meeting.id}
                className="h-40 bg-white shadow-lg default_outline"
                onClick={() => {
                  console.log('hi');
                  navigate(`meeting/detail/${meeting.id}`);
                }}
              >
                <div className="flex justify-between ">
                  <div className="mt-2 ml-4">
                    <div className="">
                      <span className="font-bold text-defaultColor">모집 중 </span>
                      <span className="font-bold">{meeting.title}</span>
                    </div>
                    <div className="mt-2 text-sm">
                      <div>일시 : {meeting.meetingStartDate}</div>
                      <div className="flex flex-row items-center">
                        <MdPeopleOutline />
                        <span>
                          &nbsp;참여 인원 : {meeting.nowPeople} / {meeting.limitPeople}
                        </span>
                      </div>
                      <div className="flex flex-row items-center text-sm">
                        <GrLocation />
                        <span>&nbsp;장소 : {meeting.location}</span>
                      </div>
                    </div>
                    <div
                      className={`flex items-center w-full h-10 p-2 mt-2 text-sm truncate bg-gray-100 rounded-2xl`}
                    >
                      {meeting.content}
                    </div>
                  </div>
                  {meeting.meetingImage && (
                    <div className="w-1/3">
                      <img
                        src={meeting.meetingImage}
                        className="w-full h-40 rounded-lg"
                        alt="이미지"
                      />
                    </div>
                  )}
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

export default Meeting;
