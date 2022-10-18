import React from 'react';
import styled from 'styled-components';
import { BsChevronLeft } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const MeetingChat = () => {
  const navigate = useNavigate();
  return (
    <>
      <Container>
        <TopWrap>
          <BsChevronLeft className="back" onClick={() => navigate(-1)} />
          <span className="meetingName">meeting Name</span>
        </TopWrap>

        <ChatWrap>
          <ProfileImage>
            <img
              className="img"
              src={'https://intermusicakorea.com/common/img/default_profile.png'}
              alt="img"
            />
          </ProfileImage>
          <>
            <div className="chat">안녕하세</div>
            <div className="time">오전 7:00</div>
          </>
        </ChatWrap>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 50%;
  margin: auto;
  margin-top: 30px;
  border: 2px solid #3cc2df;
  border-radius: 5px;
  padding: 10px;
`;

const TopWrap = styled.div`
  display: flex;
  align-items: center;
  color: #d3c8c8;
  margin: 10px 0px 20px 0;
  .back {
    cursor: pointer;
    margin-right: 20px;
    font-size: 15px;
    font-weight: bold;
  }
  .meetingName {
    font-weight: bold;
  }
`;

const ChatWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin-right: 30px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;

  .chat {
    background-color: #f5f0f0;
    padding: 5px 15px;
    border-radius: 0 10px 10px 10px;
    font-size: 14px;
    margin-right: 5px;
  }
  .time {
    color: #c9c5c5;
    font-size: 10px;
  }
`;

const ProfileImage = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 70%;
  overflow: hidden;
  margin-right: 10px;
  .img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default MeetingChat;
