import React from 'react';
import GatherCard from 'components/gathering/GatherCard';
import styled from 'styled-components';

const MainPage = () => {
  return (
    <div>
      MainPage
      <StyledCardLayout>
        <GatherCard />
        <GatherCard />
        <GatherCard />
        <GatherCard />
      </StyledCardLayout>
    </div>
  );
};

export default MainPage;

const StyledCardLayout = styled.div`
  display: flex;
`;
