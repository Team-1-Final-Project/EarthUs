import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const CommentForm = ({ addCommentHandler }) => {
  const [content, setContent] = useState('');
  const params = useParams();
  const loginState = sessionStorage.getItem('nickname');

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (content === '') {
      toast.error('내용이 비어있습니다.');
      return;
    }
    addCommentHandler({ boardId: Number(params.id), content: content });
    setContent('');
  };

  return (
    <>
      <ToastContainer />
      <form
        onSubmit={onSubmitHandler}
        className="outline outline-lightGrayColor outline-1 rounded-lg my-2 p-5 flex flex-col h-44"
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
            <div className="w-full h-24 text-gray-300">로그인이 필요합니다.</div>
            <button
              className="self-end bg-gray-300 text-gray-100 w-16 h-8 rounded-3xl mt-2"
              disabled
            >
              등록
            </button>
          </>
        )}
      </form>
    </>
  );
};

export default CommentForm;
