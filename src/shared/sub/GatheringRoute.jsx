import React from 'react';
import { Routes, Route } from 'react-router-dom';
import GatheringPage from 'pages/GatheringPage';
import GatheringCreatePage from 'pages/gatheringCRUDpage/GatheringCreatePage';
import GatheringDetailPage from 'pages/gatheringCRUDpage/GatheringDetailPage';

const GatheringRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<GatheringPage />} />
      <Route path="/create" element={<GatheringCreatePage />} />
      <Route path="/detail" element={<GatheringDetailPage />} />
    </Routes>
  );
};

export default GatheringRoute;
