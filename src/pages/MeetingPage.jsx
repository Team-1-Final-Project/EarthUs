import React, { useState, useEffect } from 'react';
import MeetingCard from 'components/meeting/MeetingCard';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Tag from 'components/tag/Tag';
import Navbar from 'components/navbar/Navbar';
import { apis } from 'api/api';
import { Layout, Container } from 'utils/styles/GlobalStyles';
import MeetingCarousel from 'utils/Carousel/MeetingCarousel';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

const MeetingPage = () => {
  const navigate = useNavigate();
  const loginState = sessionStorage.getItem('Access_token');
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
          console.log('getall', res);
        })
        .catch((err) => console.log('err', err));
    } else {
      setShowAll(false);
      apis
        .searchMeetingTag({ tagIds: selectedTag })
        .then((res) => setData(res.data.data))
        .catch((err) => swal(err));
    }
  }, [selectedTag]);

  const [myMeeting, setMyMeeting] = useState([]);
  useEffect(() => {
    apis
      .getMyMeeting()
      .then((res) => {
        console.log('mymeetings', res);
        setMyMeeting(res.data);
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
          <div className="flex-col py-3">
            <h1 className="text-2xl">참여중인 모임</h1>
            <div className="flex justify-end">
              <Button
                onClick={() => {
                  loginState ? navigate('/meeting/create') : swal('로그인하셔야 이용가능합니다');
                }}
              >
                모임 생성
              </Button>
            </div>
          </div>

          {loginState ? (
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
            <h1 className="text-2xl">전체 모임</h1>
          </div>
          <div className="py-10">
            <TagListStyle className="max-w-fit pb-2 grid grid-cols-meeting overflow-x-scroll overflow-y-hidden meeting:overflow-x-hidden">
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
            </TagListStyle>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {data &&
              data.map((item) => {
                return (
                  <Link
                    style={{ display: 'flex', width: '280px', height: '450px' }}
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
  padding: 0.5em;
  padding-left: 2em;
  padding-right: 2em;
  border-radius: 40px;
  margin-top: 7vh;
  margin-right: 3vw;
  transition: 250ms transform;
  @media (max-width: 500px) {
    padding-left: 1em;
    padding-right: 1em;
    font-size: small;
  }
  &:hover {
    transform: scale(1.03);
  }
`;

const TagListStyle = styled.div`
  &::-webkit-scrollbar {
    width: 20px;
    height: 20px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #e7e8ec;
    border-radius: 10px;
    background-clip: padding-box;
    border: 6px solid transparent;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
    box-shadow: inset 0px 0px 3px white;
  }
`;
