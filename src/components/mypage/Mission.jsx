import Prepare from 'components/prepare/Prepare';
import React from 'react';

function Mission({ myMission }) {
  console.log(myMission);
  return (
    <div>
      <div className="m-4 mt-10 text-xl font-bold">성공한 미션</div>
      <div className="flex flex-col items-center justify-center shadow-md default_outline">
        {myMission?.map((mission) => (
          <div className="w-4/5 m-1 text-center bg-white rounded-full shadow-lg default_outline">
            <div>{mission.createdAt.substr(0, 10)}</div>
            <div>
              성공 미션 <span className="text-lg font-bold">[{mission.mission}]</span>
            </div>
          </div>
        ))}
      </div>
      {/* <Prepare /> */}
    </div>
  );
}

export default Mission;
