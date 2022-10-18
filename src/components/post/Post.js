import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { AiOutlineHeart, AiFillHeart, AiOutlineComment } from 'react-icons/ai';
import { apis } from 'api/api';
import { useDispatch } from 'react-redux';

const Post = ({ post, onToastifyHandler }) => {
  const navigate = useNavigate();
  const [heartState, setHeartState] = useState(false);
  const [heartNum, setHeartNum] = useState(post?.heartBoardNums);

  const loginState = sessionStorage.getItem('Access_token');

  useEffect(() => {
    if (loginState) {
      apis.getHeart(post?.boardId).then((res) => {
        setHeartState(res.data.boardLike);
      });
    }
  }, [loginState, post?.boardId]);

  return (
    <ContainerStyle
      className="hover:scale-[1.02] ease-in duration-300 cursor-pointer"
      onClick={() => {
        navigate(`/communitydetail/${post?.boardId}`);
      }}
    >
      <TopWrapStyle>
        <div className="tagList">
          {post?.tagBoards.map((tag) => {
            return (
              <span key={tag.id} className="tag">
                {`# ${tag.tagName}`}
              </span>
            );
          })}
        </div>
        <span className="date">{post?.createdAt.substr(0, 10)}</span>
      </TopWrapStyle>

      <ContentsWrapStyle>
        <div className="profileIconWrap">
          <div className="profileWrap">
            <ProfileStyle>
              <img
                className="img"
                onError={(e) => {
                  e.currentTarget.style = 'null';
                }}
                src={post?.profileImage}
                alt="img"
              />
            </ProfileStyle>
            <NameStyle>{post?.writerName}</NameStyle>
          </div>

          <IconContainerstyle>
            <div
              className="iconWrap"
              onClick={(e) => {
                e.stopPropagation();
                if (loginState) {
                  apis.postHeart(post?.boardId).then((res) => {
                    setHeartState(res.data.boardLike);
                    res.data.boardLike ? setHeartNum(heartNum + 1) : setHeartNum(heartNum - 1);
                  });
                } else {
                  onToastifyHandler();
                }
              }}
            >
              {heartState ? <AiFillHeart style={{ color: '#3cc2df' }} /> : <AiOutlineHeart />}
              <span className="count ">{heartNum}</span>
              {/* <span className="count ">{heartNum}</span> */}
            </div>
            <div
              className="iconWrap"
              onClick={(e) => {
                // dispatch(getDetailPost(data?.boardId));
                navigate(`/communitydetail/${post?.boardId}`);
              }}
            >
              <AiOutlineComment />
              <span className="count count1">{post?.commentNums}</span>
            </div>
          </IconContainerstyle>
        </div>

        <ContentWrapStyle>
          <div className="titleContentWrap">
            <TitleStyle>{post?.title}</TitleStyle>
            <ContentStyle>{post?.content}</ContentStyle>
          </div>

          <ImageStyled>
            <img className="boardImg" src={post?.boardImage} alt="img" />
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
  border-radius: 10px;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  outline-color: #eaecee;

  @media (max-width: 750px) {
    min-width: 400px;
  }
`;

const TopWrapStyle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  .tagList {
    width: 70%;
  }
  .tag {
    /* width: max-content; */
    margin-bottom: 10px;
    padding: 0px 5px;
    font-size: 12px;
    color: #3cc2df;
    background-color: #f3f4f5;
    border: 1px solid #f3f4f5;
    border-radius: 20px;
    margin-right: 5px;
    word-break: keep-all;
    white-space: normal;
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
    align-items: flex-start;
    justify-content: space-between;
    margin-right: 30px;
    @media (max-width: 750px) {
      flex-direction: row;
      margin-bottom: 20px;
      align-items: center;
      margin-right: 0px;
    }
  }
  .profileWrap {
    display: flex;
    align-items: top;
  }
  @media (max-width: 750px) {
    flex-direction: column;
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
  width: 70px;
  color: #333;
  font-size: 15px;
  position: relative;
  top: 15px;
`;

const IconContainerstyle = styled.div`
  display: flex;
  align-items: center;
  font-size: 17px;
  color: #595f63;
  cursor: pointer;
  .iconWrap {
    display: flex;
    align-items: center;
    color: #3cc2df;
  }
  .count {
    margin-right: 10px;
    margin-left: 5px;
    color: #595f63;
  }
  .count1 {
    @media (max-width: 750px) {
      margin: 0;
      margin-left: 5px;
    }
  }
`;

const ContentWrapStyle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  .titleContentWrap {
    display: flex;
    flex-direction: column;
    width: 60%;
    margin-right: 20px;
    @media (max-width: 750px) {
      width: 100%;
      margin-right: 0px;
      margin-bottom: 10px;
    }
  }
  @media (max-width: 750px) {
    flex-direction: column;
    align-items: center;
  }
`;

const TitleStyle = styled.h1`
  margin-bottom: 10px;
  color: #333;
  font-size: 18px;
  font-weight: bold;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;
const ContentStyle = styled.div`
  margin-right: 20px;
  font-size: 14px;
  color: #595f63;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  @media (max-width: 750px) {
    -webkit-line-clamp: 3;
    margin-right: 0px;
  }
`;

const ImageStyled = styled.div`
  border-radius: 10px;
  overflow: hidden;
  max-width: 250px;
  width: 250px;
  height: 150px;

  .boardImg {
    width: 100%;
    height: 100%;
    /* max-height: 200px; */
    overflow: hidden;
    object-fit: cover;
  }
  @media (max-width: 750px) {
    margin: 0;
  }
`;

export default Post;
