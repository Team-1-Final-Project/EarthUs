import { Routes, Route } from 'react-router-dom';
import React from 'react';
import MeetingReviewPage from 'pages/review/ReviewListPage';
import ReviewDetailPage from 'pages/review/ReviewDetailPage';
import ReviewCreatePage from 'pages/review/ReviewCreatePage';
import ReviewUpdatePage from 'pages/review/ReviewUpdatePage';

const ReviewRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<MeetingReviewPage />} />
      <Route path="/create/:id" element={<ReviewCreatePage />} />
      <Route path="/detail/:id" element={<ReviewDetailPage />} />
      <Route path="/update/:id" element={<ReviewUpdatePage />} />
    </Routes>
  );
};

export default ReviewRoute;
