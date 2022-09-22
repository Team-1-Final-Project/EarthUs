import React from 'react';
import GatherDetail from 'components/gathering/detail/GatherDetail';
import UserInfoCard from 'components/gathering/detail/UserInfoCard';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

const GatheringDetailPage = () => {
  return (
    <>
      <StyledLayout>
        <GatherDetail />
      </StyledLayout>
      <ButtonLayout>
        <Button>신청 하기</Button>
        <Link to="/gathering/detail/update">
          <Button>수정 하기</Button>
        </Link>
        <Button>삭제 하기</Button>
      </ButtonLayout>
      <StyledLayout2>Leader Information</StyledLayout2>
      <StyledLayout3>
        <UserInfoCard />
      </StyledLayout3>
      <StyledLayout2>Member Information</StyledLayout2>
      <StyledLayout3>
        <UserInfoCard />
        <UserInfoCard />
        <UserInfoCard />
        <UserInfoCard />
        <UserInfoCard />
      </StyledLayout3>
    </>
  );
};

export default GatheringDetailPage;

const StyledLayout = styled.div`
  width: 100vw;
  height: 65vh;
  padding: 2rem;
  display: flex;
  justify-content: center;
`;

const StyledLayout2 = styled.div`
  width: 100vw;
  padding-left: 4rem;
  font-size: xx-large;
  margin-bottom: 30px;
  margin-top: 30px;
`;

const StyledLayout3 = styled.div`
  width: 100vw;
  height: 62vh;
  padding-left: 5rem;
  display: flex;
  flex-wrap: wrap;
`;

const ButtonLayout = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 2%;
`;

const Button = styled.button`
  padding: 0px 10px;
  height: 40px;
  width: 120px;
  background-color: #edf3ec;
  color: #3bc2df;
  border-radius: 40px;
  margin-right: 20px;
  transition: 100ms transform;
  &:hover {
    transform: scale(1.05);
  }
  float: right;
`;
