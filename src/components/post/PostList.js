import styled from 'styled-components';
import { AiOutlinePlus } from 'react-icons/ai';
import Post from './Post';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getPostList, searchPostTag } from 'redux/modules/postSlice';
import { getHeart } from 'redux/modules/heartSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PostList = ({ selectedTag }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginState = sessionStorage.getItem('Access_token');

  useEffect(() => {
    if (selectedTag.length === 0) {
      dispatch(getPostList());
    } else {
      dispatch(searchPostTag(selectedTag));
    }
  }, [dispatch, selectedTag]);

  const postList = useSelector((state) => state?.post.post.data);

  return (
    <>
      <ToastContainer />
      {postList?.map((post) => {
        return <Post key={post?.boardId} post={post} />;
      })}
      {postList?.length === 0 && (
        <div className="h-96 mt-10 m-auto text-2xl text-center text-gray-300">
          해당 태그의 게시물이 없습니다.
        </div>
      )}
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
