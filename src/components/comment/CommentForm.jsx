import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const CommentForm = ({ addCommentHandler }) => {
  const [content, setContent] = useState('');
  const params = useParams();
  const loginState = useSelector((state) => state.login.loginState);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (content === '') return;
    addCommentHandler({ boardId: Number(params.id), content: content });
    setContent('');
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className={`${
        !loginState && 'bg-disabledColor'
      } border border-grayLineColor rounded-md mt-5 p-5 flex flex-col h-44`}
    >
      {loginState && (
        <>
          <textarea
            onChange={(e) => setContent(e.target.value)}
            className="shadow-none text-blackColor h-24"
            value={content}
          />
          <button className="self-end bg-blueColor text-white w-16 h-8 rounded-3xl mt-2">
            등록
          </button>
        </>
      )}
      {!loginState && (
        <>
          <div className="w-full h-full text-gray-400">로그인이 필요합니다.</div>
          <button
            className="self-end bg-gray-300 text-disabledColor w-16 h-8 rounded-3xl mt-2"
            disabled
          >
            등록
          </button>
        </>
      )}
    </form>
  );
};

export default CommentForm;
