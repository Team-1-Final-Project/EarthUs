import Footer from 'components/footer/Footer';
import ReviewList from 'components/meeting/review/ReviewList';
import Navbar from 'components/navbar/Navbar';
import React from 'react';
import { Container, Layout } from 'utils/styles/GlobalStyles';

const MeetingReviewPage = () => {
  return (
    <>
      <Layout>
        <Container>
          <Navbar />
          <ReviewList />
        </Container>
      </Layout>
      <Footer />
    </>
  );
};

export default MeetingReviewPage;
