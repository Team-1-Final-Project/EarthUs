import React from 'react';

function Post() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="m-4 mt-10 text-xl font-bold">작성한 게시글</div>
        <div className="text-sm text-defaultLine">더 보기</div>
      </div>
      <div className="flex justify-center mt-8">
        <div className="w-2/5 h-40 mx-4 bg-gray-200 rounded-xl"></div>
        <div className="w-2/5 h-40 mx-4 bg-gray-200 rounded-xl"></div>
      </div>
    </div>
  );
}

export default Post;
