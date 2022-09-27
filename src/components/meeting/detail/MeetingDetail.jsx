import styled from 'styled-components';
import { AiOutlineCalendar } from 'react-icons/ai';
import { IoMdPeople } from 'react-icons/io';
import { GrLocation } from 'react-icons/gr';

const MeetingDetail = (props) => {
  const detail = { ...props.data };
  return (
    <>
      <StyledCard>
        <div>
          <img src={detail.meetingImage}></img>
        </div>
        <StyledDetail>
          <TagListLayout>
            <Tagbutton>#아차산</Tagbutton>
            <Tagbutton>#플로깅</Tagbutton>
          </TagListLayout>
          <StyledH1>{detail.title}</StyledH1>
          <div className="flex items-center">
            <AiOutlineCalendar />
            <StyledH3>
              모집기간 : {detail.joinStartDate}~{detail.joinEndDate}
            </StyledH3>
          </div>
          <div className="flex items-center">
            <AiOutlineCalendar />
            <StyledH3>
              활동기간 : {detail.meetingStartDate}~{detail.meetingEndDate}
            </StyledH3>
          </div>
          <div className="flex items-center">
            <IoMdPeople />
            <StyledH3>
              {detail.nowPeople}/{detail.limitPeople}명 참여중
            </StyledH3>
          </div>
          <div className="flex items-center">
            <GrLocation />
            <StyledH3>모임 장소 : {detail.location}</StyledH3>
          </div>
          <StyledContentBox>{detail.content}</StyledContentBox>
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
const StyledH1 = styled.h1`
  font-size: x-large;
  margin-bottom: 7%;
  color: #333;
`;
const StyledH3 = styled.h3`
  font-size: 1em;
  margin-left: 2%;
  color: #333;
`;
const StyledContentBox = styled.div`
  width: 100%;
  background-color: #f4f4f4;
  margin-top: 10%;
  padding: 20px;
`;

const TagListLayout = styled.div`
  width: 100%;
  height: 40px;
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
