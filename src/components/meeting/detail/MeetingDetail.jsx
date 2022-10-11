import styled from 'styled-components';
import { AiOutlineCalendar } from 'react-icons/ai';
import { IoMdPeople } from 'react-icons/io';
import { GrLocation } from 'react-icons/gr';
import { useState } from 'react';
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import { apis } from 'api/api';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import swal from 'sweetalert';

const MeetingDetail = (props) => {
  const detail = { ...props.data };

  const [liked, setLiked] = useState(false);
  const [likeNums, setLikeNums] = useState(0);
  const [meetingStatus, setMeetingStatus] = useState('');
  const loginState = sessionStorage.getItem('Access_token');

  const likeHandler = async () => {
    if (loginState) {
      try {
        const res = await apis.updateMeetingLike(detail.id);
        setLiked(res.data.data.meetingLike);
        res.data.data.meetingLike ? setLikeNums(likeNums + 1) : setLikeNums(likeNums - 1);
      } catch (err) {
        swal(err);
      }
    } else {
      toast.error('로그인이 필요합니다.');
    }
  };

  useEffect(() => {
    detail.heartNums && setLikeNums(detail.heartNums);
    if (loginState && detail.id) {
      apis
        .getMeetingLike(detail.id)
        .then((res) => {
          setLiked(res.data.data.meetingLike);
        })
        .catch((err) => console.log(err));
    }
  }, [loginState, detail.heartNums]);

  useEffect(() => {
    if (detail.meetingStatus && detail.meetingStatus.code === 'READY_FOR_JOIN') {
      setMeetingStatus('모집준비중');
    }
    if (detail.meetingStatus && detail.meetingStatus.code === 'CAN_JOIN') {
      setMeetingStatus('모집중');
    }
    if (
      detail.meetingStatus &&
      (detail.meetingStatus.code === 'COMPLETE_JOIN' ||
        detail.meetingStatus.code === 'PASS_DEADLINE')
    ) {
      setMeetingStatus('모집완료');
    }
    if (detail.meetingStatus && detail.meetingStatus.code === 'COMPLETED_MEETING') {
      setMeetingStatus('모임완료');
    }
  }, [detail.meetingStatus]);

  return (
    <>
      <ToastContainer />

      <div className="w-4/5 h-full px-5 py-5 flex flex-col">
        <h1 className="mb-5 text-3xl mt-3">
          <span
            className={`min-w-fit text-3xl font-semibold ${
              meetingStatus === '모집준비중'
                ? `text-gray-400`
                : meetingStatus === '모집중'
                ? `text-defaultColor`
                : meetingStatus === '모집완료'
                ? `text-greenColor`
                : `text-defaultLine`
            }`}
          >
            {meetingStatus}
          </span>
          {' | ' + detail.title}
        </h1>
        <TagListLayout>
          <div>
            {detail.tagMeetings &&
              Array.from(detail.tagMeetings).map((tag) => (
                <Tagbutton key={tag.id}># {tag.name}</Tagbutton>
              ))}
          </div>
          <div className="flex justify-center items-center">
            {liked ? (
              <BsHeartFill
                className="w-6 h-6 m-2 text-red-600 cursor-pointer"
                onClick={likeHandler}
              />
            ) : (
              <BsHeart className="w-6 h-6 m-2 text-red-600 cursor-pointer" onClick={likeHandler} />
            )}
            <span className="text-xl text-defaultText">{likeNums}</span>
          </div>
        </TagListLayout>
        <StyledDiv className="flex w-full flex-col py-2">
          <div className="w-full p-5 flex justify-center">
            <img
              className="rounded-2xl object-cover outline outline-2 outline-[#eaecee] shadow-lg"
              src={detail.meetingImage}
            ></img>
          </div>
          <div className="w-1/2">
            <div className="flex items-center">
              <AiOutlineCalendar />
              <h1 className="text-xl px-2 py-2">
                모집기간 : {detail.joinStartDate}~{detail.joinEndDate}
              </h1>
            </div>
            <div className="flex items-center">
              <AiOutlineCalendar />
              <h1 className="text-xl px-2 py-2">
                활동기간 : {detail.meetingStartDate}~{detail.meetingEndDate}
              </h1>
            </div>
            <div className="flex items-center">
              <IoMdPeople />
              <h1 className="text-xl px-2 py-2">
                {detail.nowPeople}/{detail.limitPeople}명 참여중
              </h1>
            </div>
            <div className="flex items-center">
              <GrLocation />
              <h1 className="text-xl px-2 py-2">모임 장소 : {detail.location}</h1>
            </div>
          </div>
          <div className="mt-2">
            <h1 className="text-2xl py-4">모임 설명</h1>{' '}
            <div className="text-ellipsis overflow-hidden">{detail.content}</div>
          </div>
        </StyledDiv>
      </div>
    </>
  );
};

export default MeetingDetail;

const StyledDiv = styled.div`
  @media (max-width: 800px) {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    font-size: small;
    & > div {
      width: 100%;
      font-size: medium;
      & > div {
        & > h1 {
          width: 100%;
          font-size: medium;
        }
      }
      & > h1 {
        width: 100%;
        font-size: x-large;
      }
    }
  }
`;

// const StyledCard = styled.div`;
//   position: relative;
//   display: flex;
//   width: 80%;
//   height: 100%;
//   user-select: none;
//   padding: 20px;
//   overflow: hidden;
//   & > div:first-of-type {
//     width: 100%;
//     height: 100%;
//     position: relative;
//     background-color: gray;
//     overflow: hidden;
//     & > img {
//       width: 100%;
//       height: 100%;
//       position: relative;
//       object-fit: cover;
//     }
//   }

// const StyledDetail = styled.div`
//   width: 100%;
//   height: 100%;
//   padding-left: 3%;
// `;

const TagListLayout = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Tagbutton = styled.button`
  padding: 0px 10px;
  height: 30px;
  color: white;
  background-color: #3cc2df; //서테이트로 클릭시 색깔 변경하믄 됨니데이
  border-radius: 40px;
  margin: 6px;
  transition: 100ms transform;
  &:hover {
    transform: scale(1.01);
  }
`;
