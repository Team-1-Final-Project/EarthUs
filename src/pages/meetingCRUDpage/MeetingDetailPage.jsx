import React from 'react';
import MeetingDetail from 'components/meeting/detail/MeetingDetail';
import UserInfoCard from 'components/meeting/detail/UserInfoCard';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Navbar from 'components/navbar/Navbar';
import { useEffect } from 'react';
import { apis } from 'api/api';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Layout } from 'utils/styles/GlobalStyles';

const MeetingDetailPage = () => {
  const navigate = useNavigate();

  const loginData = useSelector((state) => {
    return state.login;
  });

  let params = useParams().id;

  const [detailData, setDetailData] = useState();

  useEffect(() => {
    apis
      .getMeeting(params)
      .then((res) => {
        setDetailData(res.data.data);
      })
      .catch((err) => console.log('err', err, params));
  }, []);

  const onClickDelete = () => {
    apis
      .deleteMeeting(params)
      .then((res) => {
        console.log(res);
        alert(res.data.data);
        navigate('/meeting');
      })
      .catch((err) => console.log(err));
  };

  return (
    <Layout>
      <Container>
        <Navbar />
        <div className="flex justify-center py-10">
          <MeetingDetail data={detailData} />
        </div>
        <ButtonLayout>
          <Button>신청 하기</Button>
          <Button
            onClick={() => {
              loginData.email === detailData.admin.email
                ? navigate(`/meeting/update/${params}`)
                : alert('접근권한이 없습니다'); //작성자가 아닐경우에는 입장못하게 해야함.
            }}
          >
            수정 하기
          </Button>
          <Button
            onClick={() => {
              loginData.email === detailData.admin.email
                ? navigate(`/meeting/update/${params}`)
                : alert('접근권한이 없습니다'); //작성자가 아닐경우에는 입장못하게 해야함.
            }}
          >
            삭제 하기
          </Button>
        </ButtonLayout>
        <div>
          <h1 className="py-10 ml-20 text-3xl">Leader Info</h1>
          <div className="px-20">
            <UserInfoCard data={detailData} />
          </div>
        </div>
        <div>
          <h1 className="py-10 ml-20 text-3xl">Leader Info</h1>
          <div className="px-20 flex flex-wrap">
            <UserInfoCard />
            <UserInfoCard />
            <UserInfoCard />
            <UserInfoCard />
            <UserInfoCard />
            <UserInfoCard />
            <UserInfoCard />
            <UserInfoCard />
            <UserInfoCard />
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default MeetingDetailPage;

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
