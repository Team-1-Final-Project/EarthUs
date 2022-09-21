import { useEffect, useState } from 'react';
import { apis } from 'api/api';
import styled from 'styled-components';

import { AiOutlinePlus } from 'react-icons/ai';

import Post from './Post';

const PostList = () => {
  const [data, setData] = useState();

  useEffect(() => {
    apis.getPosts().then((res) => {
      setData(res);
    });
  }, []);

  return (
    <>
      {data &&
        data.map((post) => {
          return <Post key={post.id} post={post} />;
        })}
      <AddPostButtonStyled>
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
