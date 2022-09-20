import React from 'react';
import Comment from 'components/comment/Comment';
import CommentForm from 'components/comment/CommentForm';

const CommentList = () => {
  return (
    <div className="max-w-5xl m-auto p-5 border">
      <Comment />
      <CommentForm />
    </div>
  );
};

export default CommentList;
