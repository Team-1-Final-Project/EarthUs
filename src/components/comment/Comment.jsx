import React, { useEffect, useState } from 'react';
import { BsThreeDotsVertical, BsPencilSquare, BsTrash } from 'react-icons/bs';
import swal from 'sweetalert';

const Comment = ({
  content,
  commentId,
  commentWriter,
  createdAt,
  profileImage,
  editCommentHandler,
  deleteCommentHandler,
  onToastifyHandler,
}) => {
  const [editDeleteToggle, setEditDeleteToggle] = useState(false);
  const [editToggle, setEditToggle] = useState(false);
  const [editContent, setEditContent] = useState(content);

  const login = sessionStorage.getItem('nickname');

  useEffect(() => {
    setEditContent(content);
  }, []);

  const editHandler = (e) => {
    e.preventDefault();
    if (editContent === '') {
      onToastifyHandler();
      return;
    }
    editCommentHandler({ commentId, content: editContent });
    setEditToggle(false);
  };

  const deleteHandler = (e) => {
    e.preventDefault();
    swal('정말로 삭제하시겠습니까?', {
      buttons: {
        cancel: '취소',
        삭제: true,
      },
    }).then((value) => {
      switch (value) {
        case '삭제':
          deleteCommentHandler(commentId);
          break;

        default:
          break;
      }
    });
  };

  return (
    <>
      <div className="border-b border-lightGrayColor p-5 mb-4">
        <div className="flex justify-between mb-3">
          <div className="flex justify-center items-center pb-3">
            <img src={profileImage} alt="profile" className="w-12 h-12 rounded-full object-cover" />
            <div className="flex flex-col ml-3">
              <span className="font-bold text-lg text-blueColor">{commentWriter}</span>
              <span className="text-sm text-grayColor">{createdAt.split('T')[0]}</span>
            </div>
          </div>
          <div className="relative">
            {login === commentWriter && !editToggle ? (
              <BsThreeDotsVertical
                onClick={() => setEditDeleteToggle(!editDeleteToggle)}
                className="cursor-pointer text-grayColor mb-2"
              />
            ) : null}
            {editDeleteToggle ? (
              <div className="absolute right-2 bg-white border border-grayLineColor w-20 h-20">
                <div className="flex justify-center items-center border-b border-grayLineColor w-full h-1/2">
                  <BsPencilSquare />
                  <span
                    className="ml-1 cursor-pointer text-blackColor"
                    onClick={() => {
                      setEditToggle(!editToggle);
                      setEditDeleteToggle(false);
                    }}
                  >
                    수정
                  </span>
                </div>
                <div className="flex justify-center items-center w-full h-1/2">
                  <BsTrash />
                  <span
                    className="ml-1 cursor-pointer text-blackColor"
                    onClick={(e) => {
                      deleteHandler(e);
                      setEditDeleteToggle(false);
                    }}
                  >
                    삭제
                  </span>
                </div>
              </div>
            ) : null}
          </div>
        </div>
        <div className="whitespace-normal break-all">
          {editToggle ? (
            <form
              onSubmit={editHandler}
              className="outline outline-lightGrayColor outline-1 rounded-md mt-5 p-5 flex flex-col h-44"
            >
              <textarea
                onChange={(e) => setEditContent(e.target.value)}
                className="shadow-none text-blackColor h-24"
                defaultValue={editContent}
              />
              <div className="flex self-end">
                <button
                  type="button"
                  className="bg-gray-300 text-white w-16 h-8 rounded-3xl mt-3 mr-3"
                  onClick={() => {
                    setEditToggle(false);
                    setEditContent(content);
                  }}
                >
                  취소
                </button>
                <button className="bg-blueColor text-white w-20 h-8 rounded-3xl mt-3">
                  수정하기
                </button>
              </div>
            </form>
          ) : (
            <span className="text-lg text-blackColor">{content}</span>
          )}
        </div>
      </div>
    </>
  );
};

export default Comment;
