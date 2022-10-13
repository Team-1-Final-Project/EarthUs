import React, { useState, useEffect } from 'react';
import Pagination from 'react-js-pagination';
import styled from 'styled-components';

const Paging = ({ totalElements, selectedTag, onPagingAllMeeting, onPagingByTag }) => {
  const [page, setPage] = useState(1);

  const handlePageChange = (page) => {
    setPage(page);
    window.scrollTo(0, 0);
    if (selectedTag.length === 0) {
      onPagingAllMeeting(page);
    } else {
      onPagingByTag(page);
    }
  };

  useEffect(() => {
    setPage(1);
  }, [selectedTag]);

  return (
    <PaginationBox>
      <Pagination
        activePage={page} // 현재 페이지
        itemsCountPerPage={12} // 한 페이지랑 보여줄 아이템 갯수
        totalItemsCount={totalElements} // 총 아이템 갯수
        pageRangeDisplayed={10} // paginator의 페이지 범위
        prevPageText="<" // "이전"을 나타낼 텍스트
        nextPageText=">" // "다음"을 나타낼 텍스트
        onChange={handlePageChange} // 페이지 변경을 핸들링하는 함수
      />
    </PaginationBox>
  );
};

export default Paging;

const PaginationBox = styled.div`
  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  ul.pagination li {
    display: inline-block;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
  }
  ul.pagination li a {
    text-decoration: none;
    color: #333;
    font-size: 1rem;
  }
  ul.pagination li.active a {
    color: #3cc2df;
  }
`;
