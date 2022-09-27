import React from 'react';
import MeetingDetail from 'components/meeting/detail/MeetingDetail';
import UserInfoCard from 'components/meeting/detail/UserInfoCard';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Navbar from 'components/navbar/ Navbar';
import { useEffect } from 'react';
import { apis } from 'api/api';
import { useState } from 'react';

const MeetingDetailPage = () => {
  const data = useSelector((state) => {
    return state.login;
  });

  let params = useParams().id;

  const [detailData, setDetailData] = useState([]);

  useEffect(() => {
    apis
      .getMeeting(params)
      .then((res) => {
        setDetailData(res.data.data);
        console.log(detailData);
      })
      .catch((err) => console.log('err', err, params));
  }, []);

  return (
    <div>
      <Navbar />
      <StyledLayout>
        <MeetingDetail data={detailData} />
      </StyledLayout>
      <ButtonLayout>
        <Button>신청 하기</Button>
        <Link to="/meeting/detail/update">
          <Button>수정 하기</Button>
        </Link>
        <Button>삭제 하기</Button>
      </ButtonLayout>
      <StyledLayout2>Leader Information</StyledLayout2>
      <StyledLayout3>
        <UserInfoCard img={data.image} name={data.nickname} email={data.email} />
      </StyledLayout3>
      <StyledLayout2>Member Information</StyledLayout2>
      <StyledLayout3>
        <UserInfoCard />
        <UserInfoCard />
        <UserInfoCard />
        <UserInfoCard />
        <UserInfoCard />
      </StyledLayout3>
    </div>
  );
};

export default MeetingDetailPage;

const StyledLayout = styled.div`
  width: 100vw;
  height: 65vh;
  padding: 2rem;
  display: flex;
  justify-content: center;
`;

const StyledLayout2 = styled.div`
  width: 100vw;
  padding-left: 4rem;
  font-size: xx-large;
  margin-bottom: 30px;
  margin-top: 30px;
`;

const StyledLayout3 = styled.div`
  width: 100vw;
  height: 62vh;
  padding-left: 5rem;
  display: flex;
  flex-wrap: wrap;
`;

const ButtonLayout = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 2%;
`;

const Button = styled.button`
  padding: 0px 10px;
  height: 40px;
  width: 120px;
  background-color: #3cc2df;
  color: #ffffff;
  border-radius: 40px;
  margin-right: 20px;
  transition: 100ms transform;
  &:hover {
    transform: scale(1.05);
  }
  float: right;
`;
