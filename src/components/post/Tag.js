import React from 'react';
import styled from 'styled-components';

const Tag = () => {
  return (
    <Container>
      <TagStyled>
        <span># 태그명</span>
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
    color: #3cc2df;
    border-radius: 30px;
  }
`;

export default Tag;
