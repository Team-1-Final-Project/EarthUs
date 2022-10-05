import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { apis } from 'api/api';
import { useNavigate, useParams } from 'react-router-dom';
import { AiOutlineHeart, AiFillHeart, AiOutlineComment } from 'react-icons/ai';
import { BsTrash, BsPencil } from 'react-icons/bs';
import Navbar from 'components/navbar/Navbar';
import CommentList from 'components/comment/CommentList';
import { useDispatch, useSelector } from 'react-redux';
import { deletePost, getDetailPost, getPostList } from 'redux/modules/postSlice';
import { getHeart, putChangeHeart } from 'redux/modules/heartSlice';

// import { BsThreeDotsVertical, BsPencilSquare, BsTrash } from 'react-icons/bs';
const PostDetail = () => {
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetailPost(params.id));
    dispatch(getHeart(params.id));
  }, [dispatch, params.id]);

  const data = useSelector((state) => state.post.detailPost.data);

  const heartData = useSelector((state) => state.heart.heart);

  console.log(heartData);

  return (
    <>
      <Navbar />

      <ContainerStyle>
        {/* <TopWrapStyle>
          <div className="tagList">
            {data?.tagBoards.map((tag) => {
              return <span key={tag.id} className="tag">{`#${tag.tagName}`} </span>;
            })}
          </div>
          <span className="date">{data?.createdAt.substr(0, 10)}</span>
        </TopWrapStyle> */}

        <ContentWrapStyle>
          <ImageStyled>
            <img className="boardImg" src={data?.boardImage} alt="img" />
          </ImageStyled>

          <div className="titleContentWrap">
            <TitleStyle>{data?.title}</TitleStyle>
            <ContentStyle>{data?.content}</ContentStyle>
          </div>
        </ContentWrapStyle>

        <IconButtonWrapStyle>
          <IconContainerstyle>
            <div
              className="iconWrap"
              onClick={(e) => {
                dispatch(putChangeHeart(data?.boardId)).then(() => {
                  dispatch(getDetailPost(data?.boardId));
                });

                e.stopPropagation();
              }}
            >
              {heartData ? <AiFillHeart style={{ color: '#3cc2df' }} /> : <AiOutlineHeart />}
              <span className="count">{data?.heartBoardNums}</span>
            </div>
            <div
              className="iconWrap"
              onClick={(e) => {
                navigate(`/communitydetail/${data?.boardId}`);
                e.stopPropagation();
              }}
            >
              <AiOutlineComment />
              <span className="count">{data?.commentNums}</span>
            </div>
          </IconContainerstyle>
          <ProfileButtonWrapStyle>
            <ContentsWrapStyle>
              <div className="profileIconWrap">
                <div className="profileWrap">
                  <ProfileStyle>
                    <img className="img" src={data?.profileImage} alt="img" />
                  </ProfileStyle>
                  <NameStyle>{data?.writerName}</NameStyle>
                </div>
              </div>
            </ContentsWrapStyle>

            <ButtonStyled>
              <BsPencil className="button" />
              <BsTrash
                className="button"
                onClick={() => {
                  dispatch(deletePost(params.id)).then(() => dispatch(getPostList()));
                  navigate('/community');
                }}
              />
            </ButtonStyled>
          </ProfileButtonWrapStyle>
        </IconButtonWrapStyle>
      </ContainerStyle>
      <CommentList commentListData={data?.commentResponseDtoList} />
    </>
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

  @media (max-width: 500px) {
    width: 100%;
    min-width: 300px;
  }
`;

const ImageStyled = styled.div`
  border-radius: 10px;
  overflow: hidden;
  margin-right: 20px;
  max-width: 200px;

  .boardImg {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (max-width: 500px) {
    margin: auto;
    margin-bottom: 10px;
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
  /* .tag {
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
  } */
`;

const ContentWrapStyle = styled.div`
  display: flex;
  .titleContentWrap {
    display: flex;
    flex-direction: column;
  }
  @media (max-width: 500px) {
    display: block;
  }
`;

const IconButtonWrapStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
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
`;

const ButtonStyled = styled.div`
  display: flex;
  flex-direction: column;

  .button {
    margin-top: 1px;
    color: #22d3ee;
    background-color: white;
    border: 1px solid #22d3ee;
    font-size: 20px;
    width: 60px;
    height: 30px;
    padding: 5px 10px;
    border-radius: 5px;
    &:hover {
      font-size: 21px;
    }
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
`;

const ProfileStyle = styled.div`
  width: 30px;
  height: 30px;
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
  top: 7px;
`;

const TitleStyle = styled.h1`
  margin-bottom: 10px;
  color: #333;
  font-size: 18px;
  font-weight: bold;
`;
const ContentStyle = styled.span`
  margin-right: 20px;
  font-size: 14px;
  color: #595f63;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  @media (max-width: 500px) {
    -webkit-line-clamp: 3;
  }
`;

const ProfileButtonWrapStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

export default PostDetail;
