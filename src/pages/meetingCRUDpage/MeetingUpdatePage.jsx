import React from 'react';
import CardUpdateForm from 'components/meeting/update/CardUpdateForm';
import HomeButton from 'components/navbar/HomeButton';
import { Container, Layout } from 'utils/styles/GlobalStyles';

const MeetingUpdatePage = () => {
  return (
    <Layout>
      <Container>
        <HomeButton />
        <CardUpdateForm />
      </Container>
    </Layout>
  );
};

export default MeetingUpdatePage;
