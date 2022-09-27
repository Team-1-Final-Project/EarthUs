import Modal from 'components/modal/Modal';
import React, { useEffect, useState } from 'react';
import {
  BsThreeDotsVertical,
  BsPencilSquare,
  BsTrash,
  BsFillExclamationTriangleFill,
} from 'react-icons/bs';

const Comment = ({ content, id, editCommentHandler, deleteCommentHandler }) => {
  const [editDeleteToggle, setEditDeleteToggle] = useState(false);
  const [editToggle, setEditToggle] = useState(false);
  const [editContent, setEditContent] = useState(content);
  const [deleteModal, setDeleteModal] = useState(false);

  useEffect(() => {
    setEditContent(content);
  }, []);

  const editHandler = async (e) => {
    e.preventDefault();
    if (editContent === '') return;
    editCommentHandler({ id, content: editContent });
    setEditToggle(false);
  };

  const deleteHandler = async () => {
    deleteCommentHandler(id);
    setEditDeleteToggle(false);
  };

  return (
    <>
      {deleteModal ? (
        <Modal onConfirm={() => setDeleteModal(false)} width="w-3/12" height="3/6">
          <BsFillExclamationTriangleFill className="w-16 h-16 text-blueColor mb-8" />
          <h1 className="text-4xl text-blackColor mb-3 font-semibold">삭제</h1>
          <span className="text-2xl text-blackColor">댓글을 삭제하시겠습니까?</span>
          <div className="mt-16">
            <button
              className="bg-gray-300 text-white w-20 h-8 rounded mt-3 mr-3"
              onClick={() => setDeleteModal(false)}
            >
              취소
            </button>
            <button
              className="bg-blueColor text-white w-20 h-8 rounded mt-3"
              onClick={deleteHandler}
            >
              삭제
            </button>
          </div>
        </Modal>
      ) : null}
      <div className="border-b border-grayLineColor p-5">
        <div className="flex justify-between mb-3">
          <div className="flex justify-center items-center pb-3">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135789.png"
              alt="profile"
              className="w-12 h-12 rounded-full"
            />
            <div className="flex flex-col ml-3">
              <span className="font-bold text-lg text-blueColor">닉네임</span>
              <span className="text-sm text-grayColor">2022-09-20</span>
            </div>
          </div>
          <div className="relative">
            <BsThreeDotsVertical
              onClick={() => setEditDeleteToggle(!editDeleteToggle)}
              className="cursor-pointer text-grayColor mb-2"
            />
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
                    onClick={() => {
                      setDeleteModal(true);
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
        <div>
          {editToggle ? (
            <form
              onSubmit={editHandler}
              className="border border-grayLineColor rounded-md mt-5 p-5 flex flex-col h-44"
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
                  onClick={() => setEditToggle(false)}
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
