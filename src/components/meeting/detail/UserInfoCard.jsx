import styled from 'styled-components';

const UserInfoCard = () => {
  return (
    <>
      <StyledCard>
        <div>
          <img src="../image/card/차정원.jpg"></img>
        </div>
        <StyledDetail>Car center</StyledDetail>
        <StyledDetail2>보유 뱃지</StyledDetail2>
      </StyledCard>
    </>
  );
};

export default UserInfoCard;

const StyledCard = styled.div`
  cursor: pointer;
  margin: 15px;
  border-radius: 20px;
  border: 0.5px solid;
  border-color: #d3c8c8;
  background-color: #f5f5f5;
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
    background-color: #f5f5f5;
    padding: 5%;
    display: flex;
    justify-content: center;
    & > img {
      border-radius: 50%;
      width: 250px;
      height: 250px;
      position: relative;
      object-fit: cover;
      border: 4px solid;
      border-color: #dadada;
    }
  }
  & > div:last-of-type {
    width: 100%;
    background-color: #f5f5f5;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

const StyledDetail = styled.div`
  width: 100%;
  text-align: center;
  font-size: x-large;
  margin-bottom: 30px;
`;

const StyledDetail2 = styled.div`
  font-size: large;
  padding-left: 20px;
`;
