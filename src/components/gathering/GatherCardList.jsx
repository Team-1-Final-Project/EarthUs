import styled from 'styled-components';
import GatherCard from './GatherCard';
import TagList from './TagList';

const GatherCardList = () => {
  return (
    <>
      <StyledCardLayout>
        <StyledDiv>
          <h1>참여중인 모임</h1>
        </StyledDiv>
        <GatherCard />
        <GatherCard />
        <GatherCard />
        <GatherCard />
      </StyledCardLayout>
      <StyledCardLayout>
        <StyledDiv>
          <h1>태그 목록</h1>
        </StyledDiv>
        <TagList />
        <GatherCard />
        <GatherCard />
        <GatherCard />
        <GatherCard />
        <GatherCard />
        <GatherCard />
        <GatherCard />
        <GatherCard />
      </StyledCardLayout>
    </>
  );
};

export default GatherCardList;

const StyledCardLayout = styled.div`
  width: 100%;
  height: 100%;
  padding: 6rem 7rem;
  gap: 2rem calc(90% * 0.05 / 2);
  display: flex;
  flex-wrap: wrap;
`;

const StyledDiv = styled.div`
  width: 100%;
  font-size: 1.5rem;
  color: #333;
  font-weight: 700;
`;
