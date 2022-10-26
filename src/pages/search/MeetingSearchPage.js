import React, { useEffect, useState } from 'react';
import queryString from 'query-string';
import swal from 'sweetalert';
import { apis } from 'api/api';
import { Layout, Container } from 'utils/styles/GlobalStyles';
import Navbar from 'components/navbar/Navbar';
import Footer from 'components/footer/Footer';
import Search from 'components/search/Search';
import { useNavigate } from 'react-router-dom';
import Paging from 'components/pagination/Paging';
import MeetingCard from 'components/meeting/MeetingCard';

const CommunitySearchPage = () => {
  const navigate = useNavigate();
  const keyword = queryString.parse(window.location.search)['keyword'];
  const page = queryString.parse(window.location.search)['page'];

  const [searchDataList, setSearchDataList] = useState([]);
  const [totalElements, setTotalElements] = useState(0);

  const getMeetingSearchResultHandler = async () => {
    try {
      const response = await apis.searchMeeting(keyword, page - 1);
      setSearchDataList(response.data.data.content);
      setTotalElements(response.data.data.totalElements);
    } catch (err) {
      swal(err);
    }
  };

  useEffect(() => {
    getMeetingSearchResultHandler();
  }, [keyword, page]);

  const newMeetingSearchHandler = (searchKeyword) => {
    navigate(`/meeting/search?keyword=${searchKeyword}&page=1`);
  };

  return (
    <Layout>
      <Container>
        <Navbar />
        <Search
          onSearch={newMeetingSearchHandler}
          className="border border-defaultText w-80 h-10 my-4 mx-auto px-4 flex justify-center items-center"
          defaultValue={keyword}
        />
        <h1 className="text-xl mb-10">
          <span className="font-semibold">"{keyword}"</span> 모임 검색결과
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {searchDataList.length > 0 &&
            searchDataList.map((meeting) => <MeetingCard data={meeting} key={meeting.id} />)}
        </div>
        {searchDataList.length === 0 && (
          <div className="h-96 mt-10 m-auto text-2xl text-center text-gray-300">
            검색 결과가 없습니다.
          </div>
        )}
        {searchDataList.length > 0 && (
          <Paging
            totalElements={totalElements}
            queryString={`meeting/search?keyword=${keyword}&`}
          />
        )}
        <Footer />
      </Container>
    </Layout>
  );
};

export default CommunitySearchPage;
