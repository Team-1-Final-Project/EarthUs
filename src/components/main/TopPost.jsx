import React from 'react';
import Carousel from 'utils/Carousel/Carousel';
import { AiOutlineHeart, AiOutlineComment } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

function TopPost({ hitBoard }) {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full pt-2 m-auto mt-8 text-defaultText">
        <div className="text-xl font-bold text-left">주간 인기글</div>
        <Carousel>
          {hitBoard &&
            hitBoard.map((board) => (
              <div
                key={board.boardId}
                className="h-40 bg-white shadow-lg default_outline hover:cursor-pointer hover:scale-[1.02] ease-in duration-300"
                onClick={() => {
                  navigate(`/communitydetail/${board.boardId}`);
                }}
              >
                <div className="flex justify-between">
                  <div className="w-1/2 ml-4">
                    <div className="w-12 my-2 text-sm text-center rounded-3xl text-defaultColor bg-[#EAECEE]">
                      {board.tagBoard}
                    </div>
                    <div className="overflow-hidden h-28 text-ellipsis">
                      <div className="text-lg font-bold line-clamp-1">{board.title}</div>
                      <div className="mt-3 text-[0.9rem] line-clamp-3">{board.content}</div>
                    </div>
                    <div className="flex mt-2">
                      <div className="flex flex-row mr-2">
                        <AiOutlineComment className="m-auto" />
                        <span>{board.commentNums}</span>
                      </div>
                      <div className="flex flex-row">
                        <AiOutlineHeart className="m-auto" />
                        <span>{board.heartBoardNums}</span>
                      </div>
                    </div>
                  </div>
                  <div className="w-1/3">
                    {board && board.boardImage && (
                      <img
                        src={board.boardImage}
                        alt="boardImage"
                        className="w-full h-40 rounded-lg"
                      />
                    )}
                  </div>
                </div>
              </div>
            ))}
        </Carousel>
        <div className="mt-4 text-center">
          <button
            className="w-48 p-1 mt-4 default_button"
            onClick={() => {
              navigate('/community');
            }}
          >
            다른 글 더 보러가기
          </button>
        </div>
      </div>
    </>
  );
}

export default TopPost;
