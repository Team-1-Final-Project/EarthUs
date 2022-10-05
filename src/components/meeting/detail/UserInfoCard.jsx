import styled from 'styled-components';

const UserInfoCard = (props) => {
  return (
    <>
      <StyledCard>
        <div>
          <img src={props.profileImage && props.profileImage} />
        </div>
        <StyledDetail>{props.nickname && props.nickname}</StyledDetail>
        <StyledDetail2>{props.email && props.email}</StyledDetail2>
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
  width: 200px;
  height: 300px;
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
      width: 150px;
      height: 150px;
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
  font-size: large;
  font-weight: bold;
  margin-bottom: 30px;
`;

const StyledDetail2 = styled.div`
  width: 100%;
  text-align: center;
  font-size: small;
`;
