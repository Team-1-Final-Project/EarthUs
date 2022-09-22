import React from 'react';
import { Routes, Route } from 'react-router-dom';
import GatheringPage from 'pages/GatheringPage';
import GatheringCreatePage from 'pages/gatheringCRUDpage/GatheringCreatePage';
import GatheringDetailPage from 'pages/gatheringCRUDpage/GatheringDetailPage';
import GatheringUpdatePage from 'pages/gatheringCRUDpage/GatheringCreatePage';

const GatheringRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<GatheringPage />} />
      <Route path="/create" element={<GatheringCreatePage />} />
      <Route path="/detail" element={<GatheringDetailPage />} />
      <Route path="/detail/update" element={<GatheringUpdatePage />} />
    </Routes>
  );
};

export default GatheringRoute;
