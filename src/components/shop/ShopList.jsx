import React from 'react';

function ShopList({ shop }) {
  return (
    <div className="flex justify-center">
      {shop &&
        shop.map((shop) => (
          <>
            <div className="flex flex-row w-8/12 h-48 default_outline " key={shop.id}>
              <div className="w-1/2">
                <img className="h-48 rounded-lg " src={shop.image} alt="shopImage" />
              </div>
              <div className="flex flex-col w-1/2 gap-4 ml-2">
                <div className="mt-2 text-2xl font-bold">{shop.shopName}</div>
                <div className="mr-2 text-sm">{shop.content}</div>
                <div className="relative">
                  <button
                    onClick={() => window.open(`${shop.link}`, '_blank')}
                    className="absolute p-1 w-28 default_outline hover_button"
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
