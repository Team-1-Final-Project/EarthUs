import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MeetingPage from 'pages/MeetingPage';
import MeetingCreatePage from 'pages/meetingCRUDpage/MeetingCreatePage';
import MeetingDetailPage from 'pages/meetingCRUDpage/MeetingDetailPage';
import MeetingUpdatePage from 'pages/meetingCRUDpage/MeetingUpdatePage';

const MeetingRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<MeetingPage />} />
      <Route path="/create" element={<MeetingCreatePage />} />
      <Route path="/detail/:id" element={<MeetingDetailPage />} />
      <Route path="/detail/update" element={<MeetingUpdatePage />} />
    </Routes>
  );
};

export default MeetingRoute;
