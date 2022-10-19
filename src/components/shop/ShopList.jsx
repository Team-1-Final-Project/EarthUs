import React from 'react';

function ShopList({ shop }) {
  console.log(shop);
  return (
    <div className="grid grid-cols-1 gap-2 place-content-center">
      {shop &&
        shop.map((shop) => (
          <>
            <div
              className="flex flex-row w-full h-48 text-center shadow-lg default_outline "
              key={shop.id}
            >
              <div className="w-4/12">
                <img className="h-48 rounded-lg " src={shop.image} alt="shopImage" />
              </div>
              <div className="flex flex-col justify-center w-full gap-4 ml-2">
                <div className="mt-2 text-2xl font-bold">{shop.shopName}</div>
                <div className="mr-2 text-sm">{shop.content}</div>
                <div className="">
                  <button
                    onClick={() => window.open(`${shop.link}`, '_blank')}
                    className="p-1 w-28 default_outline hover_button"
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
