import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import { AiOutlineHeart, AiFillHeart, AiOutlineComment } from 'react-icons/ai';
import { apis } from 'api/api';

const PostDetail = ({ heart }) => {
  const navigate = useNavigate();
  const params = useParams();
  const [postData, setPostData] = useState();

  const getPosts = async () => {
    const { data } = await apis.getDetail(params.id);
    setPostData(data);
    console.log(data);
  };
  console.log(postData);
  useEffect(() => {
    getPosts();
  }, []);
  return (
    <ContainerStyled>
      <div className="TopWrap">
        <TagStyled>{postData?.tag}</TagStyled>
        <TimeStyled>{postData?.createAt}</TimeStyled>
      </div>

      <ContentsContainerStyled>
        <ImageStyled>
          <img className="img" src={postData?.image} alt="img" />
        </ImageStyled>

        <TitleWrapStyled>
          <TitleStyled>{postData?.title}</TitleStyled>
          <ContentStyled>{postData?.content}</ContentStyled>
        </TitleWrapStyled>
      </ContentsContainerStyled>

      <WrapStyled>
        <IconContainerstyled>
          <div className="iconWrap">
            {heart ? <AiFillHeart style={{ color: '#3cc2df' }} /> : <AiOutlineHeart />}
            <span className="count">{postData?.heartNums}</span>
          </div>

          <div className="iconWrap">
            <AiOutlineComment />
            <span className="count">11</span>
          </div>
        </IconContainerstyled>
        <ProfileButtonWrap>
          <div className="profileWrap">
            <ProfileStyled>
              <img className="img" src={postData?.profileImage} alt="profileimg" />
            </ProfileStyled>
            <NameStyled>{postData?.writerName}</NameStyled>
          </div>
          <ButtonStyled>
            <div className="button">수정</div>
            <div
              className="button"
              onClick={() =>
                // alert('게시물을 삭제하시겠습니까?')
                {
                  navigate(-1);
                  apis.deletePost(postData?.boardId);
                }
              }
            >
              삭제
            </div>
          </ButtonStyled>
        </ProfileButtonWrap>
      </WrapStyled>
    </ContainerStyled>
  );
};

const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  min-width: 400px;
  margin: auto;
  margin-top: 2em;
  padding: 20px 20px 0 20px;
  border: 1px solid #969696;
  border-radius: 15px;
  .TopWrap {
    display: flex;
    justify-content: space-between;
  }
`;

const ContentsContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
`;

const TitleWrapStyled = styled.div`
  margin-left: 60px;
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
  width: 75px;
  height: 50px;
  border-radius: 70%;
  overflow: hidden;
  .img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const NameStyled = styled.span`
  color: #333;
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
`;

const WrapStyled = styled.div`
  display: flex;
  justify-content: space-between;
`;

const IconContainerstyled = styled.div`
  display: flex;
  align-items: center;
  font-size: 17px;
  color: #595f63;
  .count {
    margin-right: 10px;
    margin-left: 5px;
  }
  .iconWrap {
    display: flex;
    align-items: center;
  }
`;

const ProfileButtonWrap = styled.div`
  display: flex;
  flex-direction: row;
  .profileWrap {
    display: flex;
    align-items: center;
    margin: 0;
  }
`;

const ButtonStyled = styled.div`
  color: black;
  .button {
    border: 1px solid #d3c8c8;
    /* border-radius: 10px; */
    padding: 0 20px;
  }
`;

const ImageStyled = styled.div`
  width: 40%;
  height: 40%;
  max-width: 300px;
  max-height: 300px;
  border-radius: 10px;
  overflow: hidden;

  .img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default PostDetail;
