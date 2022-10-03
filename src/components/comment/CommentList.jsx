import React, { useState } from 'react';
import Comment from 'components/comment/Comment';
import CommentForm from 'components/comment/CommentForm';
import { apis } from 'api/api';

const CommentList = () => {
  const [commentList, setCommentList] = useState([]);

  const addCommentHandler = async (content) => {
    try {
      const res = await apis.addComment(content);
      setCommentList([...commentList, res.data.data]);
    } catch (err) {
      alert(err);
    }
  };

  const editCommentHandler = async (data) => {
    try {
      const res = await apis.editComment(data);
      setCommentList(
        commentList.map((comment) =>
          comment.commentId === res.data.data.commentId ? (comment = res.data.data) : comment
        )
      );
    } catch (err) {
      alert(err);
    }
  };

  const deleteCommentHandler = async (id) => {
    try {
      await apis.deleteComment(id);
      setCommentList(commentList.filter((comment) => comment.commentId !== id));
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div className="w-screen m-auto mt-5 px-5 py-6 border border-grayLineColor rounded-lg comment:w-4/5">
      {commentList?.map((comment) => (
        <Comment
          {...comment}
          key={comment.commentId}
          editCommentHandler={editCommentHandler}
          deleteCommentHandler={deleteCommentHandler}
        />
      ))}
      <CommentForm addCommentHandler={addCommentHandler} />
    </div>
  );
};

export default CommentList;
