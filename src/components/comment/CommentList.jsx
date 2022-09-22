import React, { useState, useEffect } from 'react';
import Comment from 'components/comment/Comment';
import CommentForm from 'components/comment/CommentForm';
import axios from 'axios';

const CommentList = () => {
  const [commentList, setCommentList] = useState([]);

  const addComment = async (content) => {
    try {
      const res = await axios.post('http://localhost:3001/comment', { content: content });
      setCommentList([...commentList, res.data]);
    } catch (err) {
      alert(err);
    }
  };

  const editComment = async (payload) => {
    try {
      const res = await axios.put(`http://localhost:3001/comment/${payload.id}`, payload);
      setCommentList(
        commentList.map((comment) => (comment.id === res.data.id ? (comment = res.data) : comment))
      );
    } catch (err) {
      alert(err);
    }
  };

  const deleteComment = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/comment/${id}`);
      setCommentList(commentList.filter((comment) => comment.id !== id));
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div className="max-w-5xl m-auto p-5 border border-grayLineColor rounded-lg">
      {commentList?.map((comment) => (
        <Comment
          {...comment}
          key={comment.id}
          editComment={editComment}
          deleteComment={deleteComment}
        />
      ))}
      <CommentForm addComment={addComment} />
    </div>
  );
};

export default CommentList;
