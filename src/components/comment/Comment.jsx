import React from 'react';

const Comment = () => {
  return (
    <div className="border-b p-3">
      <div className="flex flex-col pb-3">
        <span className="font-bold text-lg">닉네임</span>
        <span className="text-sm text-zinc-400">2022-09-20</span>
      </div>
      <div>
        <span className="text-lg">내용입니다.</span>
      </div>
    </div>
  );
};

export default Comment;
