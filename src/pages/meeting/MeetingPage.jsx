import React, { useState, useEffect } from 'react';
import MeetingCard from 'components/meeting/MeetingCard';
import styled from 'styled-components';
import Tag from 'components/tag/Tag';
import Navbar from 'components/navbar/Navbar';
import { apis } from 'api/api';
import { Layout, Container } from 'utils/styles/GlobalStyles';
import MeetingCarousel from 'utils/Carousel/MeetingCarousel';
import swal from 'sweetalert';
import Footer from 'components/footer/Footer';
import { toast } from 'react-toastify';
import PostingButton from 'components/button/PostingButton';
import { useNavigate } from 'react-router-dom';
import MeetingPaging from 'components/pagination/MeetingPaging';
import Search from 'components/search/Search';

const MeetingPage = () => {
  const navigate = useNavigate();
  const loginState = sessionStorage.getItem('Access_token');
  const [data, setData] = useState();
  const [selectedTag, setSelectedTag] = useState([]);
  const [showAll, setShowAll] = useState(true);

  const tags = ['챌린지', '플로깅', '비건', '재활용', '이모저모(친목)', '반려용품', '기타'];

  const meetingSearchHandler = (searchKeyword) => {
    navigate(`/meeting/search?keyword=${searchKeyword}&page=1`);
  };

  const tagHandler = (id) => {
    if (selectedTag.indexOf(id) === -1) {
      setSelectedTag([...selectedTag, id]);
    } else {
      setSelectedTag(selectedTag.filter((ele) => ele !== id));
    }
  };
  const [totalElements, setTotalElements] = useState(1);

  const toastifyHandler = () => {
    toast.error('로그인이 필요합니다.');
  };

  const pagingAllMeeting = (page) => {
    apis
      .getAllMeeting(page - 1)
      .then((res) => {
        setData(res.data.data.content);
        setTotalElements(res.data.data.totalElements);
      })
      .catch((err) => console.log('err', err));
  };

  const pagingByTag = (page) => {
    apis
      .searchMeetingTag(page - 1, { tagIds: selectedTag })
      .then((res) => {
        setData(res.data.data.content);
        setTotalElements(res.data.data.totalElements);
      })
      .catch((err) => swal(err));
  };

  useEffect(() => {
    if (selectedTag.length === 0) {
      setShowAll(true);
      pagingAllMeeting(1);
    } else {
      setShowAll(false);
      pagingByTag(1);
    }
  }, [selectedTag]);

  const [myMeeting, setMyMeeting] = useState();

  useEffect(() => {
    if (loginState) {
      apis
        .getMyMeeting()
        .then((res) => {
          setMyMeeting(res.data);
        })
        .catch((err) => {
          console.log('err', err);
        });
    }
  }, [loginState]);

  return (
    <Layout>
      {/* <Map></Map> */}
      <Container>
        <Navbar />
        <div className="w-full flex justify-center">
          <button className="m-3 hover:cursor-pointer text-defaultColor">제로모임</button>
          <button className="m-3 hover:cursor-pointer" onClick={() => navigate('/review?page=1')}>
            모임후기
          </button>
        </div>
        <Search
          onSearch={meetingSearchHandler}
          className="rounded-full border w-64 h-8 my-4 mr-4 px-4 float-right flex justify-center items-center"
          defaultValue=""
        />
        <div className="pt-20 px-20">
          <h1 className="text-2xl">참여중인 모임</h1>

          {loginState ? (
            myMeeting && (
              <MeetingCarousel>
                {myMeeting.map((item) => (
                  <MeetingCard key={item.id} data={item} toastifyHandler={toastifyHandler} />
                ))}
              </MeetingCarousel>
            )
          ) : (
            <div className="w-full flex justify-center items-center h-32 text-gray-300">
              로그인이 필요한 기능입니다.
            </div>
          )}
        </div>
        <div className="pt-10 px-20">
          <h1 className="text-2xl">전체 모임</h1>

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
              data.map((item) => (
                <MeetingCard key={item.id} data={item} toastifyHandler={toastifyHandler} />
              ))}
          </div>
        </div>
        {loginState && <PostingButton />}
        {data && data.length > 0 && (
          <MeetingPaging
            totalElements={totalElements}
            selectedTag={selectedTag}
            onPagingAllMeeting={pagingAllMeeting}
            onPagingByTag={pagingByTag}
          />
        )}
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
