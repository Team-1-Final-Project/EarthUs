import React, { useEffect, useState } from 'react';
import Review from './Review';

const ReviewList = ({ reviewData }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    setReviews(reviewData);
  }, [reviewData]);

  return (
    <div className="m-auto mt-20 min-h-screen">
      <h1 className="text-2xl mb-10">모임 후기</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
        {reviews && reviews.map((review) => <Review key={review.id} {...review} />)}
      </div>
    </div>
  );
};

export default ReviewList;
