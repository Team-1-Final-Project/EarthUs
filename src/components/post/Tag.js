import React, { useState } from 'react';
import styled from 'styled-components';

const Tag = () => {
  const [tag1, setTag1] = useState(false);
  const [tag2, setTag2] = useState(false);
  const [tag3, setTag3] = useState(false);

  return (
    <Container>
      <TagStyled>
        <span
          className="tag1"
          onClick={() => {
            setTag1(!tag1);
            console.log(tag1);
          }}
          tag1={tag1}
        >
          # 태그명
        </span>
        <span
          className="tag2"
          onClick={() => {
            setTag2(!tag2);
            console.log(tag1);
          }}
          tag2={tag2}
        >
          # 태그명
        </span>
        <span
          className="tag3"
          onClick={() => {
            setTag3(!tag3);
          }}
          tag3={tag3}
        >
          # 태그명
        </span>
      </TagStyled>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 80%;
  margin: auto;
  margin-top: 2em;
`;

const TagStyled = styled.div`
  span {
    width: auto;
    padding: 10px 20px;
    font-size: 16px;
    border: 1px solid #3cc2df;
    border-radius: 30px;
  }

  .tag1 {
    background-color: ${({ tag1 }) => (tag1 ? '#3cc2df' : 'white')};
    color: ${({ tag1 }) => (tag1 ? 'white' : '#3cc2df')};
  }
  .tag2 {
    background-color: ${({ tag2 }) => (tag2 ? '#3cc2df' : 'white')};
    color: ${({ tag2 }) => (tag2 ? 'white' : '#3cc2df')};
  }
  .tag3 {
    background-color: ${({ tag3 }) => (tag3 ? '#3cc2df' : 'white')};
    color: ${({ tag3 }) => (tag3 ? 'white' : '#3cc2df')};
  }
`;

export default Tag;
