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

  //여기부터 참여하기 파트입니다
  const [applyState, setApplyState] = useState(false);
  const onClickApplyHandler = () => {
    console.log(loginData.loginState);
    loginData.loginState
      ? applyState
        ? apis.cancelMeeting(params) && setApplyState(false)
        : apis.applyMeeting(params) && setApplyState(true)
      : alert('로그인 먼저하세요');
  };

  //여기부터 수정하기 파트입니다
  const loginData = useSelector((state) => {
    return state.login;
  });

  let params = useParams().id; // URL로 부터 params를 따옵니다.

  const [detailData, setDetailData] = useState(); //detailData는 모임 상세정보 데이터입니다.

  useEffect(() => {
    apis
      .getMeeting(params)
      .then((res) => {
        setDetailData(res.data.data);
        console.log('detaildata', detailData);
      })
      .catch((err) => console.log('err', err, params));
  }, []);
  //여기까지 수정하기 파트입니다

  //여기부터 삭제하기 파트입니다
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

  //여기부터 모임 참여 유저 조회 파트입니다.
  const [applyerData, setApplyerData] = useState();
  useEffect(() => {
    apis
      .getMeetingUser(params)
      .then((res) => {
        setApplyerData(res.data.data);
        console.log('유저정보', res.data.data);
      })
      .catch((err) => console.log('err', err));
  }, []);
  return (
    <Layout>
      <Container>
        <Navbar />
        <div className="flex justify-center py-10">
          <MeetingDetail data={detailData} />
        </div>
        <ButtonLayout>
          {applyState ? (
            <Button
              onClick={() => {
                onClickApplyHandler();
              }}
            >
              참여 취소
            </Button>
          ) : (
            <Button
              onClick={() => {
                onClickApplyHandler();
              }}
            >
              참여 하기
            </Button>
          )}
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
                ? onClickDelete()
                : alert('접근권한이 없습니다'); //작성자가 아닐경우에는 입장못하게 해야함.
            }}
          >
            삭제 하기
          </Button>
        </ButtonLayout>
        <div>
          <h1 className="py-10 ml-20 text-3xl">Leader Info</h1>
          <div className="px-20">
            <UserInfoCard
              nickname={detailData.admin.nickname}
              email={detailData.admin.email}
              profileImage={detailData.admin.profileImage}
            />
          </div>
        </div>
        <div>
          <h1 className="py-10 ml-20 text-3xl">Member Info</h1>
          <div className="px-20 flex flex-wrap">
            {applyerData.map((item) => {
              return (
                <UserInfoCard
                  nickname={item.nickname}
                  email={item.email} /**profileImage={applyerData.profileImage}**/
                />
              );
            })}
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
