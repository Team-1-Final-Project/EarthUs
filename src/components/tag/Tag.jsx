import React, { useState } from 'react';

const Tag = ({ tag, id, tagHandler }) => {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <a
      className={`block  max-w-max h-8 px-5 flex items-center justify-center rounded-2xl mr-2 cursor-pointer ${
        isSelected ? `bg-blueColor text-white` : `bg-gray-100`
      }`}
      onClick={() => {
        setIsSelected(!isSelected);
        tagHandler(id);
      }}
    >
      {tag}
    </a>
  );
};

export default Tag;
