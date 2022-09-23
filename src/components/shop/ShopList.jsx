import React from 'react';

function ShopList({ shop }) {
  console.log(shop);
  return (
    <div className="flex justify-center">
      {shop &&
        shop.map((shop) => (
          <>
            <div
              className="flex flex-row w-9/12 h-48 border-2 border-defaultColor rounded-xl"
              key={shop.id}
            >
              <div className="w-1/2">
                <img
                  className="object-cover h-[190px] border-defaultColor rounded-l-xl"
                  src={shop.image}
                />
              </div>
              <div className="flex flex-col w-1/2 gap-4">
                <div className="mt-2 text-2xl font-bold">{shop.shopName}</div>
                <div className="mr-2 text-sm">{shop.content}</div>
                <div className="relative">
                  <button
                    onClick={() => window.open(`${shop.link}`, '_blank')}
                    className="absolute p-1 border-2 w-28 border-defaultColor rounded-3xl text-defaultColor"
                  >
                    사이트 이동
                  </button>
                </div>
              </div>
            </div>
          </>
        ))}
    </div>
  );
}

export default ShopList;
