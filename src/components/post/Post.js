import React from 'react';
import styled from 'styled-components';

// import Moment from 'react-moment';

import { useNavigate } from 'react-router-dom';
import LikeComment from './LikeComment';
import Profile from './Profile';

const Post = ({ post }) => {
  const navigate = useNavigate();
  //   const displayCreatedAt = (createdAt) => {
  //     let startTime = new Date(createdAt);
  //     let nowTime = Date.now();
  //     if (parseInt(startTime - nowTime) > -60000) {
  //       return <Moment format="방금 전">{startTime}</Moment>;
  //     }
  //     if (parseInt(startTime - nowTime) < -86400000) {
  //       return <Moment format="MMM D일">{startTime}</Moment>;
  //     }
  //     if (parseInt(startTime - nowTime) > -86400000) {
  //       return <Moment fromNow>{startTime}</Moment>;
  //     }
  //   };

  return (
    <ContainerStyled
      onClick={() => {
        navigate(`/postdetail/${post.id}`);
      }}
    >
      <div className="TopWrap">
        <TagStyled>{post && post.tag}</TagStyled>
        <TimeStyled>5분전</TimeStyled>
      </div>

      <ContentsContainerStyled>
        <Profile post={post} />

        <div>
          <TitleStyled>{post && post.title}</TitleStyled>
          <ContentStyled>{post && post.content}</ContentStyled>
        </div>

        <ImageStyled>
          <img className="img" src={post && post.image} alt="img" />
        </ImageStyled>
        <LikeComment post={post} />
      </ContentsContainerStyled>
    </ContainerStyled>
  );
};

const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  min-width: 400px;
  height: 250px;
  margin: auto;
  margin-top: 2em;
  padding: 20px;
  border: 1px solid #969696;
  border-radius: 15px;
  .TopWrap {
    display: flex;
    justify-content: space-between;
  }
  @media (max-width: 900px) {
    height: 405px;
    width: 80%;
  }
`;

const ContentsContainerStyled = styled.div`
  display: grid;
  grid-template-columns: 130px auto 170px;
  .profileWrap {
    display: flex;
    align-items: top;
    margin: 0;
  }
  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
  }
`;

const TagStyled = styled.span`
  width: max-content;
  margin-bottom: 10px;
  padding: 0px 10px;
  font-size: 14px;
  color: #3cc2df;
  background-color: #f3f4f5;
  border: 1px solid #f3f4f5;
  border-radius: 5px;
`;

const TimeStyled = styled.span`
  color: #595f63;
  font-size: 14px;
`;

const TitleStyled = styled.h1`
  margin-bottom: 20px;
  color: #333;
  font-size: 18px;
  font-weight: bold;
`;
const ContentStyled = styled.span`
  margin-right: 20px;
  font-size: 15px;
  color: #595f63;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  @media (max-width: 900px) {
    -webkit-line-clamp: 3;
  }
`;

const ImageStyled = styled.div`
  width: 170px;
  height: 170px;
  max-width: 250px;
  max-height: 250px;
  border-radius: 10px;
  overflow: hidden;

  .img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (max-width: 900px) {
    margin-top: 15px;
    width: 240px;
    height: 140px;
  }
`;

export default Post;
