import ProfileIcon from 'components/navbar/ProfileIcon';
import styled from 'styled-components';
import { AiOutlineComment, AiOutlineCalendar } from 'react-icons/ai';
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import { IoMdPeople } from 'react-icons/io';
import { GrLocation } from 'react-icons/gr';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { apis } from 'api/api';

const MeetingCard = (props) => {
  const data = { ...props.data };
  const admin = data.admin;

  const [liked, setLiked] = useState(false);
  const loginState = useSelector((state) => state.login.loginState);

  useEffect(() => {
    if (loginState) {
      apis
        .getMeetingLike(data.id)
        .then((res) => {
          setLiked(res.data.data);
        })
        .catch((err) => alert(err));
    }
  }, [loginState]);

  return (
    <>
      <StyledCard>
        <div>
          <img src={data.meetingImage}></img>
        </div>
        <StyledDetail>
          <StyledH1>{data.title}</StyledH1>
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
          <ProfileIcon image={admin && admin.profileImage} />
          <div className="w-3/4 flex justify-between items-center">
            <div>by {admin && admin.nickname}</div>
            <div className="w-1/2 flex justify-end items-center">
              {liked ? (
                <BsHeartFill className="m-2 text-red-600" />
              ) : (
                <BsHeart className="m-2 text-red-600" />
              )}
              40
              <AiOutlineComment className="m-2" />
              50
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
  padding-left: 5%;
  & > img {
    width: 1.7rem;
    height: 1.7rem;
    margin-right: 5%;
  }
`;

const StyledCard = styled.div`
  cursor: pointer;
  border: 0.5px solid;
  border-color: #d3c8c8;
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme?.color?.background || 'white'};
  width: 310px;
  height: 520px;
  max-width: 19rem;
  transition: 250ms transform;
  user-select: none;
  overflow: hidden;
  &:hover {
    transform: scale(1.03);
  }
  & > div:first-of-type {
    width: 100%;
    height: 50%;
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
  margin-left: 3%;
  color: #333;
`;
const StyledContentBox = styled.div`
  width: 100%;
  height: 43%;
  background-color: #f4f4f4;
  margin-top: 3%;
  padding: 3%;
`;
