import styled from 'styled-components';
import { AiOutlineLike, AiOutlineComment } from 'react-icons/ai';
import axios from 'axios';
import { useEffect, useState } from 'react';

const PostList = () => {
  const [data, setData] = useState();

  const getPosts = async () => {
    const response = await axios.get('http://localhost:3001/posts');
    setData(response.data[0]);
    return response.data[0];
  };
  useEffect(() => {
    getPosts().then((res) => {
      setData(res);
    });
  }, []);
  console.log(data);
  return (
    <ContainerStyled>
      <TagStyled>{data && data.tag}</TagStyled>
      <TitleStyled>{data && data.title}</TitleStyled>
      <ContentStyled>{data && data.content}</ContentStyled>
      <div className="iconWrap">
        <AiOutlineLike />
        <span className="count">{data && data.likeNums}</span>
        <AiOutlineComment />
        <span className="count">{data && data.commentNums}</span>
      </div>
    </ContainerStyled>
  );
};

const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 80%;
  margin: auto;
  margin-top: 2em;
  padding: 20px;
  border: 1px solid #e9e0f5;
  border-radius: 15px;

  .iconWrap {
    display: flex;
    align-items: center;
    margin-top: 30px;
    font-size: 15px;
    color: #595f63;
  }
  .count {
    margin-right: 10px;
    margin-left: 5px;
  }
`;

const TagStyled = styled.span`
  width: max-content;
  margin-bottom: 15px;
  padding: 0px 10px;
  font-size: 14px;
  color: #595f63;
  background-color: #f3f4f5;
  border: 1px solid #f3f4f5;
  border-radius: 5px;
`;
const TitleStyled = styled.h1`
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: bold;
`;
const ContentStyled = styled.span`
  font-size: 14px;
  color: #595f63;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
export default PostList;
