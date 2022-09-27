import React from 'react';

const Tag = ({ selectedTag, tag, tagHandler }) => {
  return (
    <a
      className={`block  max-w-max h-8 px-5 flex items-center justify-center rounded-2xl mr-2 cursor-pointer
              ${selectedTag === tag ? `bg-blueColor text-white` : `bg-gray-100`}`}
      onClick={() => tagHandler(tag)}
    >
      {tag}
    </a>
  );
};

export default Tag;
