import React, { useEffect, useState } from 'react';
import qs from 'query-string';
import swal from 'sweetalert';
import { apis } from 'api/api';
import { Layout, Container } from 'utils/styles/GlobalStyles';
import Navbar from 'components/navbar/Navbar';
import Footer from 'components/footer/Footer';
import Search from 'components/search/Search';
import { useNavigate } from 'react-router-dom';
import Post from 'components/post/Post';
import Paging from 'components/pagination/Paging';

const CommunitySearchPage = () => {
  const navigate = useNavigate();
  const keyword = qs.parse(window.location.search)['keyword'];
  const page = qs.parse(window.location.search)['page'];

  const [searchDataList, setSearchDataList] = useState([]);
  const [totalElements, setTotalElements] = useState(0);

  const getCommunitySearchResultHandler = async () => {
    try {
      const response = await apis.searchBoard(keyword, page - 1);
      setSearchDataList(response.data.data.content);
      setTotalElements(response.data.data.totalElements);
    } catch (err) {
      swal(err);
    }
  };

  useEffect(() => {
    getCommunitySearchResultHandler();
  }, [keyword, page]);

  const newCommunitySearchHandler = (searchKeyword) => {
    navigate(`/community/search?keyword=${searchKeyword}&page=1`);
  };

  return (
    <Layout>
      <Container>
        <Navbar />
        <Search
          onSearch={newCommunitySearchHandler}
          className="rounded-full border w-80 h-10 my-4 m-auto px-4 flex justify-center items-center"
          defaultValue={keyword}
        />
        <h1 className="text-xl mb-10">
          <span className="font-semibold">"{keyword}"</span> 커뮤니티 검색결과
        </h1>
        {searchDataList.length > 0 &&
          searchDataList.map((post) => <Post post={post} key={post.BoardId} />)}
        {searchDataList.length === 0 && (
          <div className="h-96 mt-10 m-auto text-2xl text-center text-gray-300">
            검색 결과가 없습니다.
          </div>
        )}
        {searchDataList.length > 0 && (
          <Paging
            totalElements={totalElements}
            queryString={`community/search?keyword=${keyword}&`}
          />
        )}
        <Footer />
      </Container>
    </Layout>
  );
};

export default CommunitySearchPage;
