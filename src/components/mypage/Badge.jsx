import React from 'react';

function Badge() {
  const badge = Array.from({ length: 10 }, () => null);
  console.log(badge);
  return (
    <div>
      <div className="m-4 mt-10 text-xl font-bold">내가 획득한 뱃지</div>
      <div className="flex justify-center">
        <div className="grid w-8/12 grid-cols-5 gap-10 justify-items-center">
          {badge &&
            badge.map((badge, index) => (
              <div key={index}>
                <div className="w-20 h-20 bg-gray-200 rounded-full">{badge}</div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Badge;
