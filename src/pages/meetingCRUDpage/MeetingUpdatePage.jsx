import React from 'react';
import CardUpdateForm from 'components/meeting/update/CardUpdateForm';
import HomeButton from 'components/Navbar/HomeButton';

const MeetingUpdatePage = () => {
  return (
    <div>
      <HomeButton />
      <CardUpdateForm />
    </div>
  );
};

export default MeetingUpdatePage;
