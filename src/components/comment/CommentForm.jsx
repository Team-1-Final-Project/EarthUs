import React, { useState } from 'react';

const CommentForm = ({ addCommentHandler }) => {
  const [content, setContent] = useState('');

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (content === '') return;
    addCommentHandler({ content: content });
    setContent('');
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="border border-grayLineColor rounded-md mt-5 p-5 flex flex-col h-44"
    >
      <textarea
        onChange={(e) => setContent(e.target.value)}
        className="shadow-none text-blackColor h-24"
        value={content}
      />
      <button className="self-end bg-blueColor text-white w-16 h-8 rounded-3xl mt-2">등록</button>
    </form>
  );
};

export default CommentForm;
