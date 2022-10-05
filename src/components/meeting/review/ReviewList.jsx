import React, { useEffect, useState } from 'react';
import { apis } from 'api/api';
import Review from './Review';

const ReviewList = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    apis
      .getMeetingReviewList()
      .then((res) => setReviews(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h1 className="text-2xl">모임후기</h1>
      <div className="grid grid-cols-4">
        {reviews && reviews.map((review) => <Review key={review.id} {...review} />)}
      </div>
    </>
  );
};

export default ReviewList;
