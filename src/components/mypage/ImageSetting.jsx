import React from 'react';

function ImageSetting({ repImage, changeImage, deleteImage }) {
  return (
    <div>
      <div className="flex flex-col items-center">
        <img className="w-40 h-40 bg-gray-400 rounded-full" src={repImage}></img>
        <label htmlFor="input-file" className="px-2 mt-2 default_button hover_button">
          이미지 업로드
        </label>
        <input
          id="input-file"
          type="file"
          className="hidden"
          onChange={(e) => {
            changeImage(e);
          }}
          accept="image/jpg,image/png,image/jpeg"
        />
        <button className="px-2 mt-2 text-gray-300" onClick={deleteImage}>
          이미지 제거
        </button>
      </div>
    </div>
  );
}

export default ImageSetting;
