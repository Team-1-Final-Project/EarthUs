import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MeetingPage from 'pages/meeting/MeetingPage';
import MeetingCreatePage from 'pages/meeting/MeetingCreatePage';
import MeetingDetailPage from 'pages/meeting/MeetingDetailPage';
import MeetingUpdatePage from 'pages/meeting/MeetingUpdatePage';

const MeetingRoute = () => {
  return (
    <Routes>
      <Route path="/:id" element={<MeetingPage />} />
      <Route path="/create" element={<MeetingCreatePage />} />
      <Route path="/detail/:id" element={<MeetingDetailPage />} />
      <Route path="/update/:id" element={<MeetingUpdatePage />} />
    </Routes>
  );
};

export default MeetingRoute;
