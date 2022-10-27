import React from 'react';
import { Oval } from 'react-loader-spinner';

const Loading = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <Oval
        type="Oval"
        color="#3CC2DF"
        secondaryColor="#d3c8c8"
        height={80}
        width={80}
        timeout={3000}
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  );
};

export default Loading;
