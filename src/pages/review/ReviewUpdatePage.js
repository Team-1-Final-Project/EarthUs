import Footer from 'components/footer/Footer';
import ReviewUpdate from 'components/meeting/review/ReviewUpdate';
import HomeButton from 'components/navbar/HomeButton';
import React from 'react';
import { Container, Layout } from 'utils/styles/GlobalStyles';

const ReviewUpdatePage = () => {
  return (
    <Layout>
      <Container>
        <HomeButton />
        <ReviewUpdate />
        <Footer />
      </Container>
    </Layout>
  );
};

export default ReviewUpdatePage;
