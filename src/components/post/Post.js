import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { AiOutlineHeart, AiFillHeart, AiOutlineComment } from 'react-icons/ai';
import 'react-toastify/dist/ReactToastify.css';
import { apis } from 'api/api';
import { useDispatch, useSelector } from 'react-redux';
const Post = ({ post }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginState = sessionStorage.getItem('Acess_token');

  //지어줄이름,비동기api요청,query 옵션
  // const { data } = useQuery('getHeartState', () => token.get(`/board/heart/${post?.boardId}`));
  // const heartState = data?.data.data.boardLike;
  // console.log(heartState, post);

  // const toggleHeart = async (id) => {
  //   return await token.put(`/board/heart/${id}`);
  // };

  // const queryClient = useQueryClient();

  // const { mutate } = useMutation(toggleHeart, {
  //   onSuccess: (data) => {
  //     queryClient.invalidateQueries('getHeartState');
  // console.log(data.data.data.boardLike);
  //   },
  // });

  const [heartState, setHeartState] = useState(false);
  useEffect(() => {
    // dispatch(getHeart(post?.boardId)).then((res) => {
    //   console.log(res.payload, res.meta.arg);
    //   console.log(heartState);

    //   setHeartState(...heartState);
    //   setHeartState([
    //     heartState.push({
    //       state: res.payload,
    //       boardId: res.meta.arg,
    //     }),
    //   ]);
    // console.log(heartState);
    // });

    apis.getHeart(post?.boardId).then((res) => {
      setHeartState(res.data.boardLike);
      console.log(heartState);
    });
  }, [dispatch, post?.boardId]);

  return (
    <ContainerStyle
      onClick={() => {
        navigate(`/communitydetail/${post?.boardId}`);
      }}
    >
      <TopWrapStyle>
        <div className="tagList">
          {post?.tagBoards.map((tag) => {
            return (
              <span key={tag.id} className="tag">
                {`#${tag.tagName}`}{' '}
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
                // dispatch(putChangeHeart(post?.boardId)).then((res) => {
                //   console.log(res.payload);
                // });
                // mutate(post?.boardId);

                apis.postHeart(post?.boardId).then((res) => {
                  console.log(res);
                });
                console.log(post?.boardId);
                console.log(heartState);
                e.stopPropagation();
              }}
            >
              {heartState ? <AiFillHeart style={{ color: '#3cc2df' }} /> : <AiOutlineHeart />}
              <span className="count">{post?.heartBoardNums}</span>
            </div>
            <div
              className="iconWrap"
              onClick={(e) => {
                // dispatch(getDetailPost(data?.boardId));
                navigate(`/communitydetail/${post?.boardId}`);
              }}
            >
              <AiOutlineComment />
              <span className="count">{post?.commentNums}</span>
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
  border: 1px solid #969696;
  border-radius: 10px;
  @media (max-width: 500px) {
    min-width: 300px;
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
    @media (max-width: 500px) {
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
  @media (max-width: 500px) {
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
  font-size: 16px;
  color: #595f63;
  .iconWrap {
    display: flex;
    align-items: center;
  }
  .count {
    margin-right: 10px;
    margin-left: 5px;
    @media (max-width: 500px) {
      margin-right: 0px;
    }
  }
  @media (max-width: 500px) {
    /* justify-content: flex-end; */
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
    @media (max-width: 500px) {
      width: 100%;
      margin-right: 0px;
      margin-bottom: 10px;
    }
  }
  @media (max-width: 500px) {
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
  @media (max-width: 500px) {
    -webkit-line-clamp: 3;
    margin-right: 0px;
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
    max-height: 200px;
    object-fit: cover;
  }
`;

export default Post;
