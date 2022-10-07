import CardProfileIcon from './CardProfileIcon';
import styled from 'styled-components';
import { AiOutlineComment, AiOutlineCalendar } from 'react-icons/ai';
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import { IoMdPeople } from 'react-icons/io';
import { GrLocation } from 'react-icons/gr';
import { useState, useEffect } from 'react';
import { apis } from 'api/api';

const MeetingCard = (props) => {
  const data = { ...props.data };
  const admin = data.admin;

  const [liked, setLiked] = useState(false);
  const [meetingStatus, setMeetingStatus] = useState('');
  const loginState = sessionStorage.getItem('Access_token');

  useEffect(() => {
    if (loginState && data.id) {
      apis
        .getMeetingLike(data.id)
        .then((res) => {
          setLiked(res.data.data.meetingLike);
        })
        .catch((err) => console.log(err));
    }
  }, [loginState, data.id]);

  useEffect(() => {
    if (data.meetingStatus && data.meetingStatus.code === 'CAN_JOIN') {
      setMeetingStatus('모집중');
    }
    if (
      data.meetingStatus &&
      (data.meetingStatus.code === 'COMPLETE_JOIN' || data.meetingStatus.code === 'PASS_DEADLINE')
    ) {
      setMeetingStatus('모집완료');
    }
    if (data.meetingStatus && data.meetingStatus.code === 'COMPLETED_MEETING') {
      setMeetingStatus('모임완료');
    }
  }, [data.meetingStatus.code]);

  return (
    <>
      <StyledCard>
        <div>
          <img src={data.meetingImage}></img>
        </div>
        <StyledDetail>
          <div className="flex ">
            <span
              className={`mr-1 min-w-fit font-semibold ${
                meetingStatus === '모집중'
                  ? `text-defaultColor`
                  : meetingStatus === '모집완료'
                  ? `text-greenColor`
                  : `text-defaultLine`
              }`}
            >
              {meetingStatus}
            </span>
            <StyledH1 className="line-clamp-1">{data.title}</StyledH1>
          </div>
          <div className="flex items-center">
            <AiOutlineCalendar />
            <StyledH3>
              {data.joinStartDate}~{data.joinEndDate}
            </StyledH3>
          </div>
          <div className="flex items-center">
            <IoMdPeople />
            <StyledH3>
              {data.nowPeople}/{data.limitPeople}명 참여중
            </StyledH3>
          </div>
          <div className="flex items-center">
            <GrLocation />
            <StyledH3>{data.location}</StyledH3>
          </div>
          <StyledContentBox>{data.content}</StyledContentBox>
        </StyledDetail>
        <StyledSubDetail>
          <CardProfileIcon image={admin && admin.profileImage} />

          <div className="w-full flex justify-between items-center text-xs">
            <div>by {admin && admin.nickname}</div>
            <div className="w-1/2 flex justify-end items-center">
              {liked ? (
                <BsHeartFill className="m-2 text-red-600" />
              ) : (
                <BsHeart className="m-2 text-red-600" />
              )}
              {data.heartNums ? data.heartNums : 0}
            </div>
          </div>
        </StyledSubDetail>
      </StyledCard>
    </>
  );
};

export default MeetingCard;

const StyledSubDetail = styled.div`
  margin-top: 10px;
  width: 100%;
  height: 4rem;
  color: #333;
  display: flex;
  align-items: center;
  padding: 0 5%;
  & > img {
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 2%;
  }
`;

const StyledCard = styled.div`
  cursor: pointer;
  outline-style: solid;
  outline-width: 1px;
  outline-color: #eaecee;
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme?.color?.background || 'white'};
  width: 220px;
  height: 400px;
  max-width: 19rem;
  transition: 250ms transform;
  user-select: none;
  overflow: hidden;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  &:hover {
    transform: scale(1.04);
    transition: 800ms;
  }
  & > div:first-of-type {
    width: 100%;
    height: 50%;
    position: relative;
    overflow: hidden;
    & > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  @media (max-width: 500px) {
    width: 200px;
    height: 380px;
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
  font-size: 0.8em;
  margin: 1%;
  margin-left: 3%;
  color: #333;
`;
const StyledContentBox = styled.div`
  font-size: 0.8em;
  width: 100%;
  height: 36%;
  background-color: #f4f4f4;
  margin-top: 3%;
  padding: 3%;
  overflow: hidden;
  white-space: normal;
  text-overflow: ellipsis;
`;
