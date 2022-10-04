import React, { useState, useEffect } from 'react';
import MeetingCard from 'components/meeting/MeetingCard';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Tag from 'components/tag/Tag';
import Navbar from 'components/navbar/Navbar';
import { apis } from 'api/api';
import { Layout, Container } from 'utils/styles/GlobalStyles';
import MeetingCarousel from 'utils/Carousel/MeetingCarousel';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Map from 'components/shop/Map';

const MeetingPage = () => {
  const navigate = useNavigate();
  const loginData = useSelector((state) => {
    return state.login;
  });

  const [data, setData] = useState();
  const [selectedTag, setSelectedTag] = useState([]);
  const [showAll, setShowAll] = useState(true);

  const tags = ['챌린지', '플로깅', '비건', '재활용', '이모저모(친목)', '반려용품', '기타'];

  const tagHandler = (id) => {
    if (selectedTag.indexOf(id) === -1) {
      setSelectedTag([...selectedTag, id]);
    } else {
      setSelectedTag(selectedTag.filter((ele) => ele !== id));
    }
  };

  useEffect(() => {
    if (selectedTag.length === 0) {
      setShowAll(true);
      apis
        .getAllMeeting()
        .then((res) => {
          setData(res.data.data);
        })
        .catch((err) => console.log('err', err));
    } else {
      setShowAll(false);
      apis
        .searchMeetingTag({ tagIds: selectedTag })
        .then((res) => setData(res.data.data))
        .catch((err) => alert(err));
    }
  }, [selectedTag]);

  const [myMeeting, setMyMeeting] = useState([]);
  useEffect(() => {
    apis
      .getMyMeeting()
      .then((res) => {
        console.log('mymeetings', res);
        setMyMeeting(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Layout>
      {/* <Map></Map> */}
      <Container>
        <Navbar />
        <div className="pt-20 px-20">
          <div className="flex justify-between py-3">
            <h1 className="text-2xl">참여중인 모임</h1>
            <Button
              onClick={() => {
                loginData.loginState
                  ? navigate('/meeting/create')
                  : alert('로그인하셔야 이용가능합니다');
              }}
            >
              모임 생성
            </Button>
          </div>

          {loginData.loginState ? (
            myMeeting ? (
              <MeetingCarousel>
                {myMeeting.map((item) => {
                  return (
                    <Link
                      style={{ display: 'flex', width: '20vw' }}
                      to={`/meeting/detail/${item.id}`}
                    >
                      <MeetingCard data={item} />
                    </Link>
                  );
                })}
              </MeetingCarousel>
            ) : null
          ) : (
            <div className="w-full flex justify-center">로그인이 필요합니다</div>
          )}
        </div>
        <div className="pt-10 px-20">
          <div>
            <h1 className="text-2xl">태그 목록</h1>
          </div>
          <div className="py-10">
            <div className="max-w-fit pb-2 grid grid-cols-meeting overflow-x-scroll overflow-y-hidden meeting:overflow-x-hidden">
              <button
                type="button"
                className={`block min-w-max max-w-max h-6 px-3 text-xs flex items-center justify-center rounded-2xl mr-2 cursor-pointer ${
                  showAll ? `bg-blueColor text-white` : `bg-gray-100`
                }`}
                onClick={() => {
                  setShowAll(true);
                  setSelectedTag([]);
                }}
              >
                # 전체보기
              </button>
              {tags.map((tag, index) => (
                <Tag
                  key={tag}
                  tag={tag}
                  id={index + 1}
                  tagHandler={tagHandler}
                  selectedTag={selectedTag}
                />
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {data &&
              data.map((item) => {
                return (
                  <Link
                    style={{ display: 'flex', width: '320px', height: '550px' }}
                    to={`/meeting/detail/${item.id}`}
                  >
                    <MeetingCard id={item.id} data={item} />
                  </Link>
                );
              })}
            {data && data.length === 0 && (
              <div className="w-full h-96 m-20 text-4xl text-center text-gray-300">
                해당 태그의 모임이 없습니다.
              </div>
            )}
          </div>
        </div>
      </Container>
    </Layout>
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
