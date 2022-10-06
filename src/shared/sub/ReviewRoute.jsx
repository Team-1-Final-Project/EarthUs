import { Routes, Route } from 'react-router-dom';
import React from 'react';
import ReviewForm from 'components/meeting/review/ReviewForm';
import ReviewDetail from 'components/meeting/review/ReviewDetail';
import ReviewUpdate from 'components/meeting/review/ReviewUpdate';
import MeetingReviewPage from 'pages/MeetingReviewPage';

const ReviewRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<MeetingReviewPage />} />
      <Route path="/create" element={<ReviewForm />} />
      <Route path="/detail/:id" element={<ReviewDetail />} />
      <Route path="/update/:id" element={<ReviewUpdate />} />
    </Routes>
  );
};

export default ReviewRoute;
