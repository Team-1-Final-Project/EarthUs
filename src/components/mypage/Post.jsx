import React from 'react';
import { AiOutlineHeart, AiOutlineComment } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

export function WritePost({ writePost }) {
  const navigate = useNavigate();

  return (
    <div>
      <div className="m-4 text-xl font-bold">작성한 게시글</div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {writePost?.map((post) => (
          <div
            key={post.boardId}
            className="h-40 bg-white shadow-lg default_outline hover:cursor-pointer"
            onClick={() => {
              navigate(`/communitydetail/${post.boardId}`);
            }}
          >
            <div className="flex justify-between">
              <div className="w-1/2 ml-4">
                <div className="w-12 my-2 text-sm text-center rounded-3xl text-defaultColor bg-[#EAECEE]">
                  {post.tagBoard}
                </div>
                <div className="h-24 overflow-hidden text-ellipsis">
                  <div className="text-lg font-bold">{post.title}</div>
                  <div className="text-[0.9rem]">{post.content}</div>
                </div>
                <div className="flex">
                  <div className="flex flex-row mr-2">
                    <AiOutlineComment className="m-auto" />
                    <span>{post.commentsList?.length ? 'board.commentsList?.length' : '0'}</span>
                  </div>
                  <div className="flex flex-row">
                    <AiOutlineHeart className="m-auto" />
                    <span>{post.heartBoardNums}</span>
                  </div>
                </div>
              </div>
              <div className="w-1/3">
                {post && post.boardImage && (
                  <img src={post.boardImage} className="w-full h-40 rounded-lg" alt="boardImage" />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      {writePost?.length == 0 && (
        <div className="flex items-center justify-center w-full h-20 text-xl text-defaultLine">
          작성된 게시글이 없습니다.
        </div>
      )}
    </div>
  );
}

export function LikePost({ likePost }) {
  const navigate = useNavigate();

  return (
    <div>
      <div className="m-4 text-xl font-bold">좋아요한 게시글</div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {likePost &&
          likePost.map((post) => (
            <div
              key={post.boardId}
              className="h-40 bg-white shadow-lg default_outline hover:cursor-pointer"
              onClick={() => {
                navigate(`/communitydetail/${post.boardId}`);
              }}
            >
              <div className="flex justify-between">
                <div className="w-1/2 ml-4">
                  <div className="w-12 my-2 text-sm text-center rounded-3xl text-defaultColor bg-[#EAECEE]">
                    {post.tagBoard}
                  </div>
                  <div className="h-20 overflow-hidden text-ellipsis">
                    <div className="text-lg font-bold">{post.title}</div>
                    <div className="text-[0.9rem]">{post.content}</div>
                  </div>
                  <div className="flex">
                    <div className="flex flex-row mr-2">
                      <AiOutlineComment className="m-auto" />
                      <span>{post.commentsList?.length ? 'board.commentsList?.length' : '0'}</span>
                    </div>
                    <div className="flex flex-row">
                      <AiOutlineHeart className="m-auto" />
                      <span>{post.heartBoardNums}</span>
                    </div>
                  </div>
                </div>
                <div className="w-1/3">
                  {post && post.boardImage && (
                    <img
                      src={post.boardImage}
                      className="w-full h-40 rounded-lg"
                      alt="boardImage"
                    />
                  )}
                </div>
              </div>
            </div>
          ))}
      </div>
      {likePost?.length == 0 && (
        <div className="flex items-center justify-center w-full h-20 text-xl text-defaultLine">
          좋아요한 게시글이 없습니다.
        </div>
      )}
    </div>
  );
}
