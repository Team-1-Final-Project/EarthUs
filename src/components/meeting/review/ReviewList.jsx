import React, { useEffect, useState } from 'react';
import { apis } from 'api/api';
import Review from './Review';

const ReviewList = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    apis
      .getMeetingReviewListAll()
      .then((res) => setReviews(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="m-auto mt-20 min-h-screen">
      <h1 className="text-2xl mb-10">모임 후기</h1>
      <div className="grid grid-cols-4 justify-items-center">
        {reviews && reviews.map((review) => <Review key={review.id} {...review} />)}
      </div>
    </div>
  );
};

export default ReviewList;
