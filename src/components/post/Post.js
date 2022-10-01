import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { AiOutlineHeart, AiFillHeart, AiOutlineComment } from 'react-icons/ai';
import { apis } from 'api/api';

const Post = ({ data }) => {
  const navigate = useNavigate();

  console.log(data.boardId);
  return (
    <ContainerStyle
      onClick={() => {
        navigate(`/communitydetail/${data?.boardId}`);
      }}
    >
      <TopWrapStyle>
        {/* <span className="tag">{data?.tagName} </span> */}
        <span className="tag"># 태그11 </span>
        <span className="date">{data?.createdAt.substr(0, 10)}</span>
      </TopWrapStyle>

      <ContentsWrapStyle>
        <div className="profileIconWrap">
          <div className="profileWrap">
            <ProfileStyle>
              <img className="img" src={data?.profileImage} alt="img" />
            </ProfileStyle>
            <NameStyle>{data?.writerName}</NameStyle>
          </div>

          <IconContainerstyle>
            <div
              className="iconWrap"
              onClick={(e) => {
                apis.postHeart(data?.boardId).then((res) => {
                  console.log(res);
                });
                e.stopPropagation();
              }}
            >
              {data?.heart ? <AiFillHeart style={{ color: '#3cc2df' }} /> : <AiOutlineHeart />}
              <span className="count">{data?.heartNums}</span>
            </div>
            <div
              className="iconWrap"
              onClick={(e) => {
                navigate(`/communitydetail/${data?.boardId}`);
                e.stopPropagation();
              }}
            >
              <AiOutlineComment />
              <span className="count">11</span>
            </div>
          </IconContainerstyle>
        </div>

        <ContentWrapStyle>
          <div className="titleContentWrap">
            <TitleStyle>{data?.title}</TitleStyle>
            <ContentStyle>{data?.content}</ContentStyle>
          </div>

          <ImageStyled>
            <img className="boardImg" src={data?.boardImage} alt="img" />
          </ImageStyled>
        </ContentWrapStyle>
      </ContentsWrapStyle>
    </ContainerStyle>
  );
};

const ContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: auto;
  margin-top: 2em;
  padding: 10px 20px;
  border: 1px solid #969696;
  border-radius: 10px;
`;

const TopWrapStyle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  .tag {
    width: max-content;
    margin-bottom: 10px;
    padding: 0px 10px;
    font-size: 14px;
    color: #3cc2df;
    background-color: #f3f4f5;
    border: 1px solid #f3f4f5;
    border-radius: 5px;
  }
  .date {
    color: #595f63;
    font-size: 14px;
  }
`;

const ContentsWrapStyle = styled.div`
  display: flex;
  .profileIconWrap {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 20px;
  }
  .profileWrap {
    display: flex;
    align-items: top;
  }
  @media (max-width: 900px) {
    /* display: flex;
    flex-direction: column; */
  }
`;

const ProfileStyle = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 70%;
  overflow: hidden;
  .img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const NameStyle = styled.span`
  margin-left: 10px;
  color: #333;
  font-size: 12px;
  position: relative;
  top: 15px;
`;

const IconContainerstyle = styled.div`
  display: flex;
  align-items: center;
  font-size: 17px;
  color: #595f63;
  .iconWrap {
    display: flex;
    align-items: center;
  }
  .count {
    margin-right: 10px;
    margin-left: 5px;
  }
  @media (max-width: 900px) {
    justify-content: flex-end;
  }
`;

const ContentWrapStyle = styled.div`
  display: flex;
  justify-content: space-between;
  .titleContentWrap {
    display: flex;
    flex-direction: column;
    margin-right: 20px;
  }
`;

const TitleStyle = styled.h1`
  margin-bottom: 10px;
  color: #333;
  font-size: 18px;
  font-weight: bold;
`;
const ContentStyle = styled.div`
  margin-right: 20px;
  max-width: 40%;
  font-size: 14px;
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
  border-radius: 10px;
  overflow: hidden;
  margin-right: 20px;
  max-width: 250px;

  .boardImg {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (max-width: 900px) {
    /* margin-top: 15px;
    width: 240px;
    height: 140px; */
  }
`;

export default Post;
