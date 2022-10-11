import React from 'react';
import { useNavigate } from 'react-router-dom';

const Review = ({ author, content, id, meetingId, reviewImage, createdAt }) => {
  const navigate = useNavigate();

  return (
    <div className="cursor-pointer py-2" onClick={() => navigate(`/review/detail/${id}`)}>
      <div className="w-64">
        {reviewImage ? (
          <img
            src={reviewImage}
            alt="reviewImage"
            className="w-72 h-56 object-cover mb-2 rounded"
          />
        ) : (
          <div className="w-72 h-56 mb-2" />
        )}
        <p className="h-20 p-2 line-clamp-3">{content}</p>
        <div className="flex mt-2">
          <img
            src={author.profileImage}
            alt="writerProfile"
            className="w-9 h-9 rounded-full object-cover mr-2"
          />
          <div className="flex flex-col">
            <span className="text-sm">{author.nickname}</span>
            <span className="text-xs">{createdAt.split('T')[0]}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
