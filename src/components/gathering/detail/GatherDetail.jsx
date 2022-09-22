import styled from 'styled-components';

const GatherDetail = () => {
  return (
    <>
      <StyledLayout>
        <StyledCard>
          <div>
            <img src="../image/card/cardimg.jpg"></img>
          </div>
          <StyledDetail>
            <StyledH1>아차산 플로깅 주2회</StyledH1>
            <StyledH3>22.10.22~22.12.30</StyledH3>
            <StyledH3>3/10명 참여중</StyledH3>
            <StyledH3>서울시 성동구 서울숲로 2길</StyledH3>
            <StyledContentBox>
              안녕하세요 서울숲길에 사는 홍길동입니다. 다름이 아니라 제가 이번엥 플로깅 행사를 열게
              되었습니다. 플로깅하다가 보물이 나오면 가져가시면 되요. 잘 찾아보세요.
            </StyledContentBox>
          </StyledDetail>
        </StyledCard>
      </StyledLayout>
    </>
  );
};

export default GatherDetail;

const StyledLayout = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 4rem 1rem;
  display: flex;
  justify-content: center;
`;

const StyledCard = styled.div`
  border-radius: 20px;
  border: 0.5px solid;
  border-color: #d3c8c8;
  position: relative;
  display: flex;
  background-color: ${({ theme }) => theme?.color?.background || 'white'};
  width: 80%;
  height: 60%;
  user-select: none;
  padding: 20px;
  & > div:first-of-type {
    width: 100%;
    height: 100%;
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
  background-color: #f4f4f4;
  margin-top: 10%;
  padding: 20px;
`;
