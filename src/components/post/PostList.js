import styled from 'styled-components';
import { AiOutlinePlus } from 'react-icons/ai';
import Post from './Post';
import { useNavigate } from 'react-router-dom';

const PostList = ({ data, heart, setHeart }) => {
  const navigate = useNavigate();

  return (
    <>
      {data &&
        data.map((post) => {
          return <Post key={post.boardId} post={post} heart={heart} setHeart={setHeart} />;
        })}
      <AddPostButtonStyled onClick={() => navigate('/addpost')}>
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
