import Footer from 'components/footer/Footer';
import ReviewList from 'components/meeting/review/ReviewList';
import Navbar from 'components/navbar/Navbar';
import React, { useEffect, useState } from 'react';
import { Container, Layout } from 'utils/styles/GlobalStyles';
import { useNavigate, useParams } from 'react-router-dom';
import Paging from 'components/pagination/Paging';
import { apis } from 'api/api';

const MeetingReviewPage = () => {
  const navigate = useNavigate();
  const params = useParams().id;
  const [reviews, setReviews] = useState([]);
  const [totalElements, setTotalElements] = useState(1);

  useEffect(() => {
    apis
      .getMeetingReviewListAll(params - 1)
      .then((res) => {
        setReviews(res.data.data.content);
        setTotalElements(res.data.data.totalElements);
      })
      .catch((err) => console.log(err));
  }, [params]);

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
          <ReviewList reviewData={reviews} />
          <Paging totalElements={totalElements} pageName="review" />
          <Footer />
        </Container>
      </Layout>
    </>
  );
};

export default MeetingReviewPage;
