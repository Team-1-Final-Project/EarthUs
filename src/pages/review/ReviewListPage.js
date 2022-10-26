import Footer from 'components/footer/Footer';
import ReviewList from 'components/meeting/review/ReviewList';
import Navbar from 'components/navbar/Navbar';
import React, { useEffect, useState } from 'react';
import { Container, Layout } from 'utils/styles/GlobalStyles';
import { useNavigate } from 'react-router-dom';
import ReviewPaging from 'components/pagination/Paging';
import { apis } from 'api/api';
import qs from 'query-string';

const MeetingReviewPage = () => {
  const navigate = useNavigate();
  const [reviews, setReviews] = useState([]);
  const [totalElements, setTotalElements] = useState(1);
  const page = qs.parse(window.location.search)['page'];

  useEffect(() => {
    apis
      .getMeetingReviewListAll(page - 1)
      .then((res) => {
        setReviews(res.data.data.content);
        setTotalElements(res.data.data.totalElements);
      })
      .catch((err) => console.log(err));
  }, [page]);

  return (
    <>
      <Layout>
        <Container>
          <Navbar />
          <div className="w-full flex justify-center">
            <button className="m-3 hover:cursor-pointer " onClick={() => navigate('/meeting')}>
              제로모임
            </button>
            <button className="m-3 hover:cursor-pointer text-defaultColor">모임후기</button>
          </div>
          <h1 className="text-2xl my-10">모임 후기</h1>
          {reviews && reviews.length === 0 && (
            <div className="m-auto text-center text-gray-300 mt-10 text-2xl">
              모임 후기가 없습니다.
            </div>
          )}
          <ReviewList reviewData={reviews} />
          {reviews && reviews.length > 0 && (
            <ReviewPaging totalElements={totalElements} queryString="review?" />
          )}
          <Footer />
        </Container>
      </Layout>
    </>
  );
};

export default MeetingReviewPage;
