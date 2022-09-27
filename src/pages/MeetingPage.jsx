import React, { useState, useEffect } from 'react';
import MeetingCard from 'components/meeting/MeetingCard';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Tag from 'components/tag/Tag';
import Navbar from 'components/navbar/Navbar';
import { apis } from 'api/api';
import KakaoLogin from 'components/login/KakaoLogin';

const MeetingPage = () => {
  const [data, setData] = useState();
  const [selectedTag, setSelectedTag] = useState([]);

  const tags = ['챌린지', '플로깅', '비건', '재활용', '이모저모(친목)', '반려용품', '기타'];

  const tagHandler = (id) => {
    if (Array.from(selectedTag).indexOf(id) === -1) {
      setSelectedTag([...selectedTag, id]);
    } else {
      setSelectedTag(selectedTag.filter((ele) => ele !== id));
    }
  };

  useEffect(() => {
    if (Array.from(selectedTag).length === 0) {
      apis
        .getAllMeeting()
        .then((res) => {
          setData(res.data.data);
        })
        .catch((err) => console.log('err', err));
    } else {
      apis
        .searchMeetingTag({ tagIds: selectedTag })
        .then((res) => setData(res.data.data))
        .catch((err) => alert(err));
    }
  }, [selectedTag]);

  return (
    <div>
      <Navbar />
      <StyledCardLayout1>
        <KakaoLogin />
        <StyledDiv2>
          <h1>참여중인 모임</h1>
          <Link to="/meeting/create">
            <Button>모임 생성</Button>
          </Link>
        </StyledDiv2>
        <Link style={{ display: 'flex', width: '20vw' }} to="/meeting/detail">
          <MeetingCard />
        </Link>
        <MeetingCard />
        <MeetingCard />
        <MeetingCard />
      </StyledCardLayout1>
      <StyledCardLayout2>
        <StyledDiv2>
          <h1>태그 목록</h1>
        </StyledDiv2>
        <StyledTagList>
          {tags.map((tag, index) => (
            <Tag
              key={tag}
              tag={tag}
              id={index + 1}
              tagHandler={tagHandler}
              selectedTag={selectedTag}
              setSelectedTag={setSelectedTag}
            />
          ))}
        </StyledTagList>
        {data &&
          data.map((item) => {
            return (
              <Link style={{ display: 'flex', width: '20vw' }} to={`/meeting/detail/${item.id}`}>
                <MeetingCard id={item.id} data={item} />
              </Link>
            );
          })}
      </StyledCardLayout2>
    </div>
  );
};

export default MeetingPage;

const Button = styled.button`
  background-color: #3cc2df;
  color: #ffffff;
  padding: 0.7vw;
  padding-left: 3vw;
  padding-right: 3vw;
  border-radius: 40px;
  margin-top: 7vh;
  margin-right: 3vw;
  transition: 250ms transform;
  &:hover {
    transform: scale(1.03);
  }
`;

const StyledCardLayout1 = styled.div`
  width: 100%;
  height: 55rem;
  padding: 4rem 5rem;
  gap: 2rem calc(90% * 0.05 / 2);
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 6vh;
`;
const StyledCardLayout2 = styled.div`
  width: 100%;
  padding: 4rem 5rem;
  gap: 2rem calc(90% * 0.05 / 2);
  display: flex;
  flex-wrap: wrap;
`;
const StyledDiv2 = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  & > h1:first-of-type {
    font-size: 1.7rem;
    color: #333;
    font-weight: 700;
    position: relative;
  }
`;
const StyledTagList = styled.div`
  display: flex;
  width: 100vw;
`;
