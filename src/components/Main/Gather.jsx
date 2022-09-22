import React from 'react';
import Carousel from 'utils/Carousel/Carousel';

function Gather({ gather }) {
  console.log(gather);
  return (
    <>
      <div className="w-9/12 pt-2 m-auto text-center">
        <div className="text-left">신규 모임</div>
        <Carousel>
          {gather &&
            gather.map((gather) => (
              <div
                key={gather.id}
                className="relative flex items-center w-10 h-40 bg-gray-200 rounded-3xl"
              >
                <div className="h-20">{gather.title}</div>
                <img src={gather.image} className="absolute w-20 pb-2" />
                <div>{gather.content}</div>
                <div>{gather.tag}</div>
              </div>
            ))}
        </Carousel>
        <div className="mt-4">
          <button>hi</button>
        </div>
      </div>
    </>
  );
}

export default Gather;
