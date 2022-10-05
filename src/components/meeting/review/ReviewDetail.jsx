import React, { useEffect, useState } from 'react';
import { apis } from 'api/api';
import { useParams } from 'react-router-dom';
import { Container, Layout } from 'utils/styles/GlobalStyles';
import Navbar from 'components/navbar/Navbar';
import { useSelector } from 'react-redux';

const ReviewDetail = () => {
  const params = useParams();
  const [review, setReview] = useState('');
  const user = useSelector((state) => state.login.nickname);

  console.log(review);
  useEffect(() => {
    apis
      .getMeetingReview(Number(params.id))
      .then((res) => setReview(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Layout>
      <Container>
        <Navbar />
        <div className="mt-20 mx-40">
          <div className="flex items-center mb-8 justify-between">
            <div className="flex items-center">
              <img
                src={review && review.author.profileImage}
                alt="writerProfile"
                className="w-16 h-16 object-cover rounded-full mr-4"
              />
              <div className="flex flex-col">
                <span className="font-semibold text-xl">{review && review.author.nickname}</span>
                <span className="font-light">{review && review.createdAt.split('T')[0]}</span>
              </div>
            </div>
            {review && user === review.author.nickname && (
              <div>
                <span className="mr-2 text-gray-400 cursor-pointer hover:text-defaultText">
                  수정
                </span>
                <span className="text-gray-400 cursor-pointer hover:text-defaultText">삭제</span>
              </div>
            )}
          </div>
          <img
            src={review && review.reviewImage}
            alt="reviewImage"
            className="max-w-4xl max-h-96 mb-5"
          />
          <div>{review && review.content}</div>
        </div>
      </Container>
    </Layout>
  );
};

export default ReviewDetail;
