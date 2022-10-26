import CardProfileIcon from './CardProfileIcon';
import styled from 'styled-components';
import { AiOutlineComment, AiOutlineCalendar } from 'react-icons/ai';
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import { IoMdPeople } from 'react-icons/io';
import { GrLocation } from 'react-icons/gr';
import { useState, useEffect } from 'react';
import { apis } from 'api/api';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

const MeetingCard = (props) => {
  const navigate = useNavigate();
  const data = { ...props.data };
  const admin = data?.admin;

  const [liked, setLiked] = useState(false);
  const [likeNums, setLikeNums] = useState(0);
  const [meetingStatus, setMeetingStatus] = useState('');
  const loginState = sessionStorage.getItem('Access_token');

  useEffect(() => {
    data.heartNums && setLikeNums(data.heartNums);
    if (loginState && data.id) {
      apis
        .getMeetingLike(data.id)
        .then((res) => {
          setLiked(res.data.data.meetingLike);
        })
        .catch((err) => console.log(err));
    }
  }, [loginState, data.heartNums]);

  useEffect(() => {
    if (data.meetingStatus && data.meetingStatus.code === 'READY_FOR_JOIN') {
      setMeetingStatus('모집준비중');
    }
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

  const likeHandler = async (e) => {
    e.stopPropagation();
    if (loginState) {
      try {
        const res = await apis.updateMeetingLike(data.id);
        setLiked(res.data.data.meetingLike);
        res.data.data.meetingLike ? setLikeNums(likeNums + 1) : setLikeNums(likeNums - 1);
      } catch (err) {
        swal(err);
      }
    } else {
      props.toastifyHandler();
    }
  };

  return (
    <>
      <StyledCardContainer onClick={() => navigate(`/meeting/detail/${data.id}`)}>
        <StyledCard>
          <div>
            {data?.meetingThumbImage ? (
              <img src={data.meetingThumbImage} alt="meetingThumbImage" />
            ) : null}
          </div>
          <StyledDetail>
            <div>
              <span
                className={`mr-1 min-w-fit font-semibold text-sm ${
                  meetingStatus === '모집준비중'
                    ? `text-defaultLine`
                    : meetingStatus === '모집중'
                    ? `text-defaultColor`
                    : meetingStatus === '모집완료'
                    ? `text-greenColor`
                    : `text-gray-400`
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

            <div className="flex items-center justify-between w-full text-xs">
              <div>by {admin && admin.nickname}</div>
              <div className="flex items-center justify-end w-1/2" onClick={likeHandler}>
                {liked ? (
                  <BsHeartFill className="w-4 h-4 m-2 text-red-600" />
                ) : (
                  <BsHeart className="w-4 h-4 m-2 text-red-600" />
                )}
                <span>{likeNums}</span>
              </div>
            </div>
          </StyledSubDetail>
        </StyledCard>
      </StyledCardContainer>
    </>
  );
};

export default MeetingCard;

const StyledCardContainer = styled.div`
  display: flex;
  width: 280px;
  height: 450px;
`;

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
  margin-bottom: 5%;
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
