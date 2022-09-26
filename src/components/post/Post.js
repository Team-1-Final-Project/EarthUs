import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { AiOutlineHeart, AiFillHeart, AiOutlineComment } from 'react-icons/ai';

const Post = ({ data, heart, setHeart }) => {
  const navigate = useNavigate();
  console.log(data, heart, setHeart);

  return (
    <ContainerStyled
      onClick={() => {
        navigate(`/postdetail/${data?.boardId}`);
      }}
    >
      <div className="TopWrap">
        <TagStyled>{data?.tag} </TagStyled>
        <TimeStyled>{data?.createAt}</TimeStyled>
      </div>

      <ContentsContainerStyled>
        <div className="profileWrap">
          <ProfileStyled>
            <img className="img" src={data?.profileImage} alt="profileimg" />
          </ProfileStyled>
          <NameStyled>{data?.writerName}</NameStyled>
        </div>

        <div>
          <TitleStyled>{data?.title}</TitleStyled>
          <ContentStyled>{data?.content}</ContentStyled>
        </div>

        <ImageStyled>
          <img className="img" src={data?.image} alt="img" />
        </ImageStyled>

        <IconContainerstyled>
          <div
            className="iconWrap"
            onClick={(e) => {
              setHeart(!heart);
              e.stopPropagation();
            }}
          >
            {heart ? <AiFillHeart style={{ color: '#3cc2df' }} /> : <AiOutlineHeart />}
            <span className="count">{data?.heartNums}</span>
          </div>
          <div
            className="iconWrap"
            onClick={(e) => {
              navigate(`/postdetail/${data?.boardId}`);
              e.stopPropagation();
            }}
          >
            <AiOutlineComment />
            <span className="count">11</span>
          </div>
        </IconContainerstyled>
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

const ProfileStyled = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 70%;
  overflow: hidden;
  margin-bottom: 10px;
  .img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const NameStyled = styled.span`
  margin-left: 10px;
  color: #333;
  font-size: 14px;
  position: relative;
  top: 15px;
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
