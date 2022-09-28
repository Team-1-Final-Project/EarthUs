import styled from 'styled-components';
import { AiOutlineCalendar } from 'react-icons/ai';
import { IoMdPeople } from 'react-icons/io';
import { GrLocation } from 'react-icons/gr';
import { useState } from 'react';
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { apis } from 'api/api';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MeetingDetail = (props) => {
  const detail = { ...props.data };

  const [liked, setLiked] = useState(false);
  const loginState = useSelector((state) => state.login.loginState);

  const likeHandler = async () => {
    if (loginState) {
      try {
        const res = await apis.updateMeetingLike(detail.id);
        setLiked(res.data.data);
      } catch (err) {
        alert(err);
      }
    } else {
      toast.error('로그인이 필요합니다.');
    }
  };

  useEffect(() => {
    if (loginState) {
      apis
        .getMeetingLike(detail.id)
        .then((res) => {
          setLiked(res.data.data);
        })
        .catch((err) => alert(err));
    }
  }, [loginState]);

  return (
    <>
      <StyledCard>
        <ToastContainer />
        <div>
          <img src={detail.meetingImage}></img>
        </div>
        <StyledDetail>
          <TagListLayout>
            <div>
              {detail.tagMeetings &&
                Array.from(detail.tagMeetings).map((tag) => (
                  <Tagbutton key={tag.id}>#{tag.name}</Tagbutton>
                ))}
            </div>
            <div>
              {liked ? (
                <BsHeartFill
                  className="m-2 text-red-600 w-16 h-16 cursor-pointer"
                  onClick={likeHandler}
                />
              ) : (
                <BsHeart
                  className="m-2 text-red-600 w-6 h-6 cursor-pointer"
                  onClick={likeHandler}
                />
              )}
              <span>{detail.heartNum}</span>
            </div>
          </TagListLayout>
          <StyledH1>{detail.title}</StyledH1>
          <div className="flex items-center">
            <AiOutlineCalendar />
            <h1 className="px-2 py-1">
              모집기간 : {detail.joinStartDate}~{detail.joinEndDate}
            </h1>
          </div>
          <div className="flex items-center">
            <AiOutlineCalendar />
            <h1 className="px-2 py-1">
              활동기간 : {detail.meetingStartDate}~{detail.meetingEndDate}
            </h1>
          </div>
          <div className="flex items-center">
            <IoMdPeople />
            <h1 className="px-2 py-1">
              {detail.nowPeople}/{detail.limitPeople}명 참여중
            </h1>
          </div>
          <div className="flex items-center">
            <GrLocation />
            <h1 className="px-2 py-1">모임 장소 : {detail.location}</h1>
          </div>
          <div className="py-1 h-full text-gray-500 mt-2 ">
            <h3>내용 : {detail.content}</h3>
          </div>
        </StyledDetail>
      </StyledCard>
    </>
  );
};

export default MeetingDetail;

const StyledCard = styled.div`
  border-radius: 20px;
  border: 0.5px solid;
  border-color: #d3c8c8;
  position: relative;
  display: flex;
  background-color: ${({ theme }) => theme?.color?.background || 'white'};
  width: 80%;
  height: 100%;
  user-select: none;
  padding: 20px;
  overflow: hidden;
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
    height: 100%;
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
  height: 100%;
  padding-left: 3%;
`;

const TagListLayout = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
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
