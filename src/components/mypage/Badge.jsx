import React from 'react';
import badges from 'assets/images/badge';

function Badge({ myBadge }) {
  // console.log(myBadge);
  const successId = myBadge?.map((myBadge) => myBadge.id);

  return (
    <div>
      <div className="m-4 mt-10 text-xl font-bold">획득한 뱃지</div>
      <div className="flex justify-center">
        <div className="grid w-8/12 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 justify-items-center">
          {badges.map((badge, index) => (
            <div key={index}>
              <img
                className={`w-20 h-20 bg-gray-100 rounded-full ${
                  successId?.includes(index) ? null : 'grayscale'
                }`}
                src={badge}
                alt="badgeImage"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Badge;
