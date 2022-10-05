import ReviewList from 'components/meeting/review/ReviewList';
import { Routes, Route } from 'react-router-dom';
import React from 'react';
import ReviewForm from 'components/meeting/review/ReviewForm';
import ReviewDetail from 'components/meeting/review/ReviewDetail';

const ReviewRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<ReviewList />} />
      <Route path="/create" element={<ReviewForm />} />
      <Route path="/:id" element={<ReviewDetail />} />
    </Routes>
  );
};

export default ReviewRoute;
