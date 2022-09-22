import React from 'react';
import GatherDetail from 'components/gathering/detail/GatherDetail';
import UserInfoCard from 'components/gathering/detail/UserInfoCard';

import styled from 'styled-components';

const GatheringDetailPage = () => {
  return (
    <>
      <StyledLayout>
        <GatherDetail />
      </StyledLayout>
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
  padding: 4rem 1rem;
  display: flex;
  justify-content: center;
`;

const StyledLayout2 = styled.div`
  width: 100vw;
  padding-left: 7rem;
  font-size: xx-large;
  margin-bottom: 4%;
`;

const StyledLayout3 = styled.div`
  width: 100vw;
  height: 62vh;
  padding-left: 8rem;
  display: flex;
  flex-wrap: wrap;
`;
