import Footer from 'components/footer/Footer';
import ReviewList from 'components/meeting/review/ReviewList';
import Navbar from 'components/navbar/Navbar';
import React from 'react';
import { Container, Layout } from 'utils/styles/GlobalStyles';
import { useNavigate } from 'react-router-dom';

const MeetingReviewPage = () => {
  const navigate = useNavigate();

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
          <ReviewList />
          <Footer />
        </Container>
      </Layout>
    </>
  );
};

export default MeetingReviewPage;
