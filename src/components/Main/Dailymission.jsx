import React from 'react';

function Dailymission({ mission }) {
  return (
    <div className="flex justify-center">
      {mission && (
        <div className="flex flex-col items-center justify-center w-8/12 h-40 mt-8 default_outline">
          <div className="text-2xl">
            오늘의 미션은&nbsp;
            <span className="text-3xl font-bold text-defaultColor">{mission[0].dailyMission}</span>
            입니다.
          </div>
          <div className="m-4">
            현재까지 성공한 인원은&nbsp;
            <span className="text-lg font-bold text-defaultColor">{mission[0].successUser}</span>명
            입니다.
          </div>
          <button className="p-2 default_outline hover:bg-defaultColor hover:text-white hover:outline-none">
            미션 성공
          </button>
        </div>
      )}
    </div>
  );
}

export default Dailymission;
