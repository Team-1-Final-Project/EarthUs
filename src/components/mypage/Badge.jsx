import React from 'react';
import badges from 'assets/images/badge';

function Badge() {
  console.log(badges);
  return (
    <div>
      <div className="m-4 mt-10 text-xl font-bold">내가 획득한 뱃지</div>
      <div className="flex justify-center">
        <div className="grid w-8/12 grid-cols-4 gap-10 justify-items-center">
          {badges.map((badge, index) => (
            <div key={index}>
              <img className="w-20 h-20 bg-gray-100 rounded-full grayscale" src={badge} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Badge;
