import styled from 'styled-components';

const UserInfoCard = () => {
  return (
    <>
      <StyledCard>
        <div>
          <img src="../image/card/맥구.jpg"></img>
        </div>
        <StyledDetail>Mc Greger</StyledDetail>
        <StyledDetail2>보유한 뱃지</StyledDetail2>
      </StyledCard>
    </>
  );
};

export default UserInfoCard;

const StyledCard = styled.div`
  margin: 10px;
  border-radius: 20px;
  border: 0.5px solid;
  border-color: #d3c8c8;
  position: relative;
  flex-direction: column;
  width: 300px;
  height: 500px;
  max-width: ${window.innerWidth / 10};
  transition: 250ms transform;
  user-select: none;
  &:hover {
    transform: scale(1.01);
  }
  & > div:first-of-type {
    border-radius: 30px;
    width: 100%;
    height: 60%;
    position: relative;
    background-color: gray;
    overflow: hidden;
    background-color: white;
    padding: 5%;
    & > img {
      border-radius: 50%;
      width: 280px;
      height: 280px;
      position: relative;
      object-fit: cover;
    }
  }
  & > div:last-of-type {
    width: 100%;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

const StyledDetail = styled.div`
  width: 100%;
  text-align: center;
  font-size: x-large;
  margin-top: 10px;
  margin-bottom: 30px;
`;

const StyledDetail2 = styled.div`
  width: 100%;
  font-size: large;
  margin-left: 10px;
`;
