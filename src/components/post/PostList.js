import styled from 'styled-components';
import { AiOutlinePlus } from 'react-icons/ai';
import Post from './Post';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getPostList } from 'redux/modules/postSlice';
import { apis } from 'api/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { putChangeHeart } from 'redux/modules/heartSlice';

const PostList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginState = sessionStorage.getItem('Access_token');
  const [like, setLike] = useState('');

  useEffect(() => {
    dispatch(getPostList());
  }, []);

  const postList = useSelector((state) => state.post.post.data);
  const onClickHeart = (boardId, e) => {
    dispatch(putChangeHeart(boardId));

    dispatch(getPostList());
    e.stopPropagation();
  };

  return (
    <>
      <ToastContainer />
      {postList?.map((post) => {
        return <Post key={post?.boardId} data={post} onClickHeart={onClickHeart} like={like} />;
      })}
      <AddPostButtonStyled
        onClick={() => {
          if (loginState) {
            navigate('/addpost');
          } else {
            toast.error('로그인이 필요합니다.');
          }
        }}
      >
        <AiOutlinePlus />
      </AddPostButtonStyled>
    </>
  );
};

const AddPostButtonStyled = styled.div`
  font-size: 40px;
  color: white;
  padding: 10px;
  background-color: #3cc2df;
  border-radius: 48px;
  width: 60px;
  cursor: pointer;
  position: fixed;
  right: 20px;
  bottom: 80px;
`;
export default PostList;
