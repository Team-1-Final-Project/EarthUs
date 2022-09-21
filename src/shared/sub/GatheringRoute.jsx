import React from 'react';
import { Routes, Route } from 'react-router-dom';
import GatheringPage from 'pages/GatheringPage';

const GatheringRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<GatheringPage />} />
    </Routes>
  );
};

export default GatheringRoute;
