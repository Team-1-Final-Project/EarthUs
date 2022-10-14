import Footer from 'components/footer/Footer';
import ReviewDetail from 'components/meeting/review/ReviewDetail';
import Navbar from 'components/navbar/Navbar';
import React from 'react';
import { Container, Layout } from 'utils/styles/GlobalStyles';

const ReviewDetailPage = () => {
  return (
    <Layout>
      <Container>
        <Navbar />
        <ReviewDetail />
        <Footer />
      </Container>
    </Layout>
  );
};

export default ReviewDetailPage;
