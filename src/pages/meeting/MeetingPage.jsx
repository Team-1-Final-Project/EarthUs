import React, { useState, useEffect } from 'react';
import MeetingCard from 'components/meeting/MeetingCard';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import Tag from 'components/tag/Tag';
import Navbar from 'components/navbar/Navbar';
import { apis } from 'api/api';
import { Layout, Container } from 'utils/styles/GlobalStyles';
import MeetingCarousel from 'utils/Carousel/MeetingCarousel';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { api } from 'api/api';
import Footer from 'components/footer/Footer';
import PostingButton from 'components/button/PostingButton';
import { useMemo } from 'react';

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
  const page = [1];
  const param = useParams();

  useEffect(() => {
    if (selectedTag.length === 0) {
      setShowAll(true);
      apis
        .getAllMeeting(param === '' ? param : 0)
        .then((res) => {
          setData(res.data.data.content);
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

  const [myMeeting, setMyMeeting] = useState();
  useEffect(() => {
    api.defaults.headers.common['Authorization'] = sessionStorage.getItem('Access_token');
    apis
      .getMyMeeting()
      .then((res) => {
        console.log('mymeetings', res);
        setMyMeeting(res.data);
      })
      .catch((err) => {
        console.log('err', err);
      });
  }, []);

  return (
    <Layout>
      {/* <Map></Map> */}
      <Container>
        <Navbar />
        <div className="w-full flex justify-center">
          <button className="m-3 hover:cursor-pointer text-defaultColor">제로모임</button>
          <button className="m-3 hover:cursor-pointer" onClick={() => navigate('/review')}>
            모임후기
          </button>
        </div>
        <div className="pt-20 px-20">
          <div className="flex-col py-3">
            <h1 className="text-2xl">참여중인 모임</h1>
            {/* <div className="flex justify-end">
              <Button
                onClick={() => {
                  loginState ? navigate('/meeting/create') : swal('로그인이 필요한 기능입니다.');
                }}
              >
                모임 생성
              </Button>
            </div> */}
          </div>

          {loginState ? (
            myMeeting && (
              <MeetingCarousel>
                {myMeeting.map((item) => {
                  return (
                    <Link
                      style={{ display: 'flex', width: '20vw' }}
                      to={`/meeting/detail/${item.id}`}
                    >
                      <MeetingCard
                        onClick={() => navigate(`/meeting/detail/${item.id}`)}
                        data={item}
                      />
                    </Link>
                  );
                })}
              </MeetingCarousel>
            )
          ) : (
            <div className="w-full flex justify-center items-center h-32">
              로그인이 필요한 기능입니다.
            </div>
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
          {data && data.length === 0 && (
            <div className="h-96 m-auto text-2xl text-center text-gray-300">
              해당 태그의 모임이 없습니다.
            </div>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
          </div>
        </div>
        {loginState && <PostingButton />}
        <div className="w-full flex justify-center mt-10">
          {page.map((item) => {
            return (
              <a href={'/meeting/' + (item - 1)}>
                <span className={item === param ? 'm-3 text-cyan-400' : 'm-2'}>{item}</span>
              </a>
            );
          })}
        </div>
        <Footer />
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
