import React from 'react';

function Dailymission({ mission }) {
  return (
    <div className="flex justify-center">
      {mission && (
        <div className="flex flex-col items-center justify-center w-9/12 h-40 mt-8 border-2 rounded-xl">
          <div className="text-3xl">{mission[0].dailyMission}</div>
          <div>성공한 인원은 {mission[0].successUser}명 입니다.</div>
          <button className="p-2 border-2 rounded-3xl hover:bg-green-600 hover:text-white">
            미션 성공
          </button>
        </div>
      )}
    </div>
  );
}

export default Dailymission;
