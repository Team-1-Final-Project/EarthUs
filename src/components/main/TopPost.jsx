import React from 'react';
import Carousel from 'utils/Carousel/Carousel';
import { AiOutlineHeart, AiOutlineComment } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

function TopPost({ post }) {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-8/12 pt-2 m-auto mt-8 text-defaultText">
        <div className="text-xl font-bold text-left">주간 인기글</div>
        <Carousel>
          {post &&
            post.map((post) => (
              <div key={post.id} className="h-40 bg-white default_outline">
                <div className="flex justify-between">
                  <div className="ml-4">
                    <div className="w-12 my-2 text-sm text-center rounded-3xl text-defaultColor bg-defaultLine">
                      {post.tag}
                    </div>
                    <div className="h-20 overflow-hidden text-ellipsis">
                      <div className="text-lg font-bold">{post.title}</div>
                      <div className="text-[0.9rem]">{post.content}</div>
                    </div>
                    <div className="absolute flex bottom-4">
                      <div className="flex flex-row mr-2">
                        <AiOutlineComment className="m-auto" />
                        <span>{post.commentsList.length}</span>
                      </div>
                      <div className="flex flex-row">
                        <AiOutlineHeart className="m-auto" />
                        <span>{post.likeNums}</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <img src={post.image} className="w-40 h-40 rounded-lg" />
                  </div>
                </div>
              </div>
            ))}
        </Carousel>
        <div className="mt-4 text-center">
          <button
            className="w-48 p-1 mt-4 text-white transition duration-300 hover:ease-in-out rounded-3xl bg-defaultColor"
            onClick={() => {
              navigate('/post');
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
