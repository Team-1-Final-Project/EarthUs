import React from 'react';
import CardCreateForm from 'components/meeting/create/CardCreateForm';
import HomeButton from 'components/navbar/HomeButton';
import { Container, Layout } from 'utils/styles/GlobalStyles';

const MeetingCreatePage = () => {
  return (
    <Layout>
      <Container>
        <HomeButton />
        <CardCreateForm />
      </Container>
    </Layout>
  );
};

export default MeetingCreatePage;
