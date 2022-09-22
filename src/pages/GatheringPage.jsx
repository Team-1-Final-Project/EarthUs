import React from 'react';
import GatherCard from 'components/gathering/GatherCard';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import TagList from 'components/gathering/TagList';

const GatheringPage = () => {
  return (
    <div>
      <StyledDiv1>
        <Link to="/gathering/create">
          <Button>모임 생성</Button>
        </Link>
      </StyledDiv1>
      <StyledCardLayout1>
        <StyledDiv2>
          <h1>참여중인 모임</h1>
        </StyledDiv2>
        <Link style={{ display: 'flex', width: '20vw' }} to="/gathering/detail">
          <GatherCard />
        </Link>
        <GatherCard />
        <GatherCard />
        <GatherCard />
      </StyledCardLayout1>
      <StyledCardLayout2>
        <StyledDiv2>
          <h1>태그 목록</h1>
        </StyledDiv2>
        <TagList />
        <GatherCard />
        <GatherCard />
        <GatherCard />
        <GatherCard />
        <GatherCard />
        <GatherCard />
      </StyledCardLayout2>
    </div>
  );
};

export default GatheringPage;

const StyledDiv1 = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
`;

const Button = styled.button`
  background-color: #edf3ec;
  color: #3bc2df;
  padding: 10px;
  padding-left: 40px;
  padding-right: 40px;
  border-radius: 40px;
  margin: 20px;
  margin-right: 100px;
  transition: 250ms transform;
  &:hover {
    transform: scale(1.03);
  }
`;

const StyledCardLayout1 = styled.div`
  width: 100%;
  height: 670px;
  padding: 4rem 5rem;
  gap: 2rem calc(90% * 0.05 / 2);
  display: flex;
  flex-wrap: wrap;
`;
const StyledCardLayout2 = styled.div`
  width: 100%;
  height: 10%;
  padding: 4rem 5rem;
  gap: 2rem calc(90% * 0.05 / 2);
  display: flex;
  flex-wrap: wrap;
`;
const StyledDiv2 = styled.div`
  width: 100%;
  font-size: 1.5rem;
  color: #333;
  font-weight: 700;
`;
