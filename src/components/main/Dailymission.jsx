import React from 'react';

function Dailymission({ mission, checkDailyMission }) {
  return (
    <>
      <div className="flex justify-center">
        <div className="flex flex-col items-center justify-center w-8/12 h-40 mt-8 default_outline  min-w-[400px]">
          {mission && (
            <>
              <div className="text-lg md:text-xl">오늘의 미션은</div>
              <span className="text-xl font-bold md:text-2xl text-defaultColor">
                {mission.mission}
              </span>
              <div className="m-2 text-base md:text-lg">
                현재까지 성공한 인원은&nbsp;
                <span className="text-lg font-bold text-defaultColor">{mission.clearCount}</span>명
                입니다.
              </div>
              <button className="w-20 p-1 default_button" onClick={checkDailyMission}>
                미션 성공
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Dailymission;
