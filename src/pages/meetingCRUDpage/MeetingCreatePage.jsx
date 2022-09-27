import React from 'react';
import CardCreateForm from 'components/meeting/create/CardCreateForm';
import HomeButton from 'components/navbar/HomeButton';

const MeetingCreatePage = () => {
  return (
    <div>
      <HomeButton />
      <CardCreateForm />
    </div>
  );
};

export default MeetingCreatePage;
