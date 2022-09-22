import React from 'react';
import Carousel from 'utils/Carousel/Carousel';

function TopPost({ post }) {
  return (
    <>
      <div className="w-9/12 pt-2 m-auto text-center">
        <div className="text-left">주간 인기글</div>
        <Carousel>
          {post &&
            post.map((post) => (
              <div
                key={post.id}
                className="relative flex items-center w-10 h-40 bg-gray-200 rounded-3xl"
              >
                <div className="h-20">{post.title}</div>
                <img src={post.image} className="absolute w-20 pb-2" />
                <div>{post.content}</div>
                <div>{post.tag}</div>
              </div>
            ))}
        </Carousel>
      </div>
    </>
  );
}

export default TopPost;
