import HomeButton from 'components/navbar/HomeButton';
import React from 'react';
import { Container, Layout } from 'utils/styles/GlobalStyles';
import Footer from 'components/footer/Footer';
import ReviewForm from 'components/meeting/review/ReviewForm';

const ReviewCreatePage = () => {
  return (
    <Layout>
      <Container>
        <HomeButton />
        <ReviewForm />
        <Footer />
      </Container>
    </Layout>
  );
};

export default ReviewCreatePage;
