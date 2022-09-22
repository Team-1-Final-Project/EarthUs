import styled from 'styled-components';

const GatherCard = () => {
  return (
    <>
      <StyledCard>
        <div>
          <img src="image/card/cardimg.jpg"></img>
        </div>
        <StyledDetail>
          <StyledH1>아차산 플로깅 주2회</StyledH1>
          <StyledH3>22.10.22~22.12.30</StyledH3>
          <StyledH3>3/10명 참여중</StyledH3>
          <StyledH3>서울시 성동구 서울숲로 2길</StyledH3>
          <StyledContentBox></StyledContentBox>
        </StyledDetail>
        <StyledSubDetail>Written by</StyledSubDetail>
      </StyledCard>
    </>
  );
};

export default GatherCard;

const StyledCard = styled.div`
  cursor: pointer;
  border: 0.5px solid;
  border-color: #d3c8c8;
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme?.color?.background || 'white'};
  width: 20vw;
  max-width: ${window.innerWidth / 4};
  height: 35vw;
  transition: 250ms transform;
  user-select: none;
  &:hover {
    transform: scale(1.03);
  }
  & > div:first-of-type {
    width: 100%;
    height: 50%;
    position: relative;
    background-color: gray;
    overflow: hidden;
    & > img {
      width: 100%;
      height: 100%;
      position: relative;
      object-fit: cover;
    }
  }
  & > div:last-of-type {
    width: 100%;
    height: 10%;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    & > .title {
      font-weight: bold;
      color: black;
      font-size: 1.75vw;
      margin: 1rem;
      word-wrap: normal;
    }
    & > .link-to {
      margin: 1rem;
      font-weight: bold;
      font-size: 0.8vw;
    }
    & > .link-to:hover {
      text-decoration: underline;
    }
  }
`;

const StyledDetail = styled.div`
  width: 100%;
  height: 50%;
  padding: 5%;
`;
const StyledSubDetail = styled.div`
  width: 100%;
  height: 10%;
  padding: 5%;
  color: #333;
`;
const StyledH1 = styled.h1`
  font-size: 1em;
  margin-bottom: 7%;
  color: #333;
`;
const StyledH3 = styled.h3`
  font-size: 1em;
  margin: 1%;
  color: #333;
`;
const StyledContentBox = styled.div`
  width: 100%;
  height: 40%;
  background-color: #f4f4f4;
  margin-top: 10%;
`;
