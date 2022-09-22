import React, { useState } from 'react';
import styled from 'styled-components';
import { AiOutlineHeart, AiFillHeart, AiOutlineComment } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const LikeComment = ({ post }) => {
  const [LikeChange, SetLikeChange] = useState(false);
  const navigate = useNavigate();
  return (
    <IconContainerstyled>
      <div
        className="iconWrap"
        onClick={(event) => {
          SetLikeChange(!LikeChange);
          event.stopPropagation();
          console.log(LikeChange);
        }}
      >
        {LikeChange ? <AiFillHeart style={{ color: '#3cc2df' }} /> : <AiOutlineHeart />}
        <span className="count">{post && post.likeNums}</span>
      </div>

      <div
        className="iconWrap"
        onClick={(event) => {
          navigate('/postdetail');
          event.stopPropagation();
        }}
      >
        <AiOutlineComment />
        <span className="count">{post && post.commentNums}</span>
      </div>
    </IconContainerstyled>
  );
};

const IconContainerstyled = styled.div`
  display: flex;
  align-items: center;
  font-size: 17px;
  color: #595f63;
  position: relative;
  bottom: 20px;
  .count {
    margin-right: 10px;
    margin-left: 5px;
  }
  .iconWrap {
    display: flex;
    align-items: center;
  }
  @media (max-width: 900px) {
    justify-content: flex-end;
  }
`;
export default LikeComment;
