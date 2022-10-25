import React from 'react';

function ImageSetting({ repImage, changeImage }) {
  return (
    <div>
      <div className="flex flex-col items-center">
        <img className="w-40 h-40 bg-gray-400 rounded-full" src={repImage}></img>
        <button className="px-2 mt-2 default_button hover_button" onClick={changeImage}>
          이미지 업로드
        </button>
        <button className="px-2 mt-2 text-gray-300">이미지 제거</button>
      </div>
    </div>
  );
}

export default ImageSetting;
