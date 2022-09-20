import React from 'react';

const CommentForm = () => {
  return (
    <div className="border rounded-md mt-5 p-5 flex flex-col h-44">
      <textarea name="" id="" cols="30" rows="10" className="shadow-none"></textarea>
      <button className="self-end bg-gray-300 w-16 h-8 rounded-3xl mt-3">등록</button>
    </div>
  );
};

export default CommentForm;
