import React from 'react';
import { Routes, Route } from 'react-router-dom';
import GatheringPage from 'pages/GatheringPage';
import GatheringCreatePage from 'pages/gatheringCRUDpage/GatheringCreatePage';

const GatheringRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<GatheringPage />} />
      <Route path="/create" element={<GatheringCreatePage />} />
    </Routes>
  );
};

export default GatheringRoute;
