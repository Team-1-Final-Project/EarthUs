import styled from 'styled-components';
import { useState } from 'react';
import UserInfoModal from 'components/modal/UserInfoModal';
import Close from 'assets/images/Close.png';

const UserInfoCard = (props) => {
  const [userModal, setUserModal] = useState(false);
  return (
    <div
      onClick={() => {
        userModal ? setUserModal(false) : setUserModal(true);
      }}
    >
      <StyledCard>
        <div>
          <img src={props.profileImage && props.profileImage} />
        </div>
        <StyledDetail>{props.nickname && props.nickname}</StyledDetail>
        <StyledDetail2>{props.email && props.email}</StyledDetail2>
      </StyledCard>
      {userModal ? (
        <UserInfoModal
          children={
            <div className="w-full h-full flex flex-col items-center">
              <button className="absolute right-5 top-5" onClick={() => setUserModal(false)}>
                <StyledImg className="h-8 w-8" src={Close} />
              </button>
              <div className="py-5">
                <img
                  className="rounded-full w-48 h-48 shadow-lg shadow-[#d6d5d5]"
                  src={props.profileImage}
                />
              </div>
              <div className="text-xl m-2">{props.nickname}</div>
              <div className="text-xl py-4 text-[#8e8a8a]">
                "소개글입니다 안녕하세요 김민석입니다. 플로깅을 좋아하고 어디어디에서 활동하고
                있습니다"
              </div>
              <div className="w-4/5 h-1/5 bg-yellow-200 p-4">보유한 뱃지</div>
            </div>
          }
          onConfirm={() => setUserModal(false)}
          nickname={props.nickname}
          email={props.email}
          profileImage={props.profileImage}
        />
      ) : null}
    </div>
  );
};

export default UserInfoCard;

const StyledImg = styled.img`
  filter: opacity(0.5) drop-shadow(0 0 0 #ffffff);
`;

const StyledCard = styled.div`
  cursor: pointer;
  margin: 15px;
  border-radius: 10px;
  outline-style: solid;
  outline-width: 1px;
  outline-color: #eaecee;
  background-color: white;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  position: relative;
  flex-direction: column;
  width: 200px;
  height: 300px;
  max-width: ${window.innerWidth / 10};
  transition: 250ms transform;
  user-select: none;
  &:hover {
    transform: scale(1.04);
    transition: 500ms;
  }
  & > div:first-of-type {
    border-radius: 30px;
    width: 100%;
    height: 60%;
    position: relative;
    background-color: white;
    overflow: hidden;
    background-color: white;
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
      border-color: white;
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
  font-size: large;
  font-weight: bold;
  margin-bottom: 30px;
`;

const StyledDetail2 = styled.div`
  width: 100%;
  text-align: center;
  font-size: small;
`;
