import React from 'react';

const Tag = ({ tag, id, tagHandler, selectedTag }) => {
  return (
    <button
      type="button"
      className={`block  min-w-max max-w-max h-6 px-3 text-xs flex items-center justify-center rounded-2xl mr-2 cursor-pointer ${
        selectedTag.indexOf(id) === -1 ? `bg-gray-100` : `bg-blueColor text-white`
      }`}
      onClick={() => tagHandler(id)}
    >
      # {tag}
    </button>
  );
};

export default Tag;
