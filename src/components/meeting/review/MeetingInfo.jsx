import React, { useEffect, useState } from 'react';
import { apis } from 'api/api';
import { useNavigate } from 'react-router-dom';

const MeetingInfo = ({ meetingID }) => {
  const [meeting, setMeeting] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    apis
      .getMeeting(meetingID)
      .then((res) => setMeeting(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div
      className="w-full sm:w-96 h-36 mb-10 default_outline cursor-pointer"
      onClick={() => navigate(`/meeting/detail/${meetingID}`)}
    >
      <div className="flex">
        <img
          src={meeting.meetingImage}
          alt="meetingImage"
          className="w-36 h-36 rounded-xl object-cover mr-5"
        />
        <div className="flex flex-col py-10">
          <h1 className="text-xl font-semibold line-clamp-1">{meeting.title}</h1>
          <p className="line-clamp-3">{meeting.content}</p>
        </div>
      </div>
    </div>
  );
};

export default MeetingInfo;
