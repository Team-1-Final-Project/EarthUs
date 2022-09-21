import styled from 'styled-components';
import GatherCard from './GatherCard';

const StyledCardLayout = styled.div`
  width: 100%;
  height: 100%;
  padding: 6rem 8rem;
  gap: 2rem calc(90% * 0.05 / 3);
  display: flex;
  flex-wrap: wrap;
`;

const GatherCardList = () => {
  return (
    <StyledCardLayout>
      <GatherCard />
      <GatherCard />
      <GatherCard />
      <GatherCard />
      <GatherCard />
      <GatherCard />
      <GatherCard />
      <GatherCard />
    </StyledCardLayout>
  );
};

export default GatherCardList;
