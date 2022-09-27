import ProfileIcon from 'components/navbar/ProfileIcon';
import styled from 'styled-components';
import { AiFillHeart, AiOutlineComment, AiOutlineCalendar } from 'react-icons/ai';
import { IoMdPeople } from 'react-icons/io';
import { GrLocation } from 'react-icons/gr';

const MeetingCard = (props) => {
  const data = { ...props.data };
  const admin = data.admin;
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
          <StyledContentBox></StyledContentBox>
        </StyledDetail>
        <StyledSubDetail>
          <div>written by {admin && admin.nickname}</div>
          <ProfileIcon image={admin && admin.profileImage} />
          <div className="w-1/2 flex justify-end items-center">
            <AiFillHeart className="m-2 text-red-600"></AiFillHeart>
            40
            <AiOutlineComment className="m-2" />
            50
          </div>
        </StyledSubDetail>
      </StyledCard>
    </>
  );
};

export default MeetingCard;

const WriterImage = styled.div``;
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
    margin-left: 5%;
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
  width: 20vw;
  max-width: ${window.innerWidth / 4};
  height: 40vw;
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
  height: 40%;
  background-color: #f4f4f4;
  margin-top: 10%;
`;
