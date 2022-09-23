import React from 'react';
import MeetingCard from 'components/meeting/MeetingCard';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import TagList from 'components/meeting/TagList';
import Navbar from 'components/Navbar/ Navbar';

const MeetingPage = () => {
  return (
    <div>
      <Navbar />
      <StyledCardLayout1>
        <StyledDiv2>
          <h1>참여중인 모임</h1>
          <Link to="/meeting/create">
            <Button>모임 생성</Button>
          </Link>
        </StyledDiv2>
        <Link style={{ display: 'flex', width: '20vw' }} to="/meeting/detail">
          <MeetingCard />
        </Link>
        <MeetingCard />
        <MeetingCard />
        <MeetingCard />
      </StyledCardLayout1>
      <StyledCardLayout2>
        <StyledDiv2>
          <h1>태그 목록</h1>
        </StyledDiv2>
        <TagList />
        <MeetingCard />
        <MeetingCard />
        <MeetingCard />
        <MeetingCard />
        <MeetingCard />
        <MeetingCard />
      </StyledCardLayout2>
    </div>
  );
};

export default MeetingPage;

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
  display: flex;
  justify-content: space-between;
  & > h1:first-of-type {
    font-size: 1.5rem;
    color: #333;
    font-weight: 700;
    position: relative;
  }
`;
