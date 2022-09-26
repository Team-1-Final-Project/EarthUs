import React from 'react';
import CardCreateForm from 'components/meeting/create/CardCreateForm';
import HomeButton from 'components/Navbar/HomeButton';

const MeetingCreatePage = () => {
  return (
    <div>
      <HomeButton />
      <CardCreateForm />
    </div>
  );
};

export default MeetingCreatePage;
