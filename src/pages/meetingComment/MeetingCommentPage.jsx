import AddMeetingComment from 'components/meeting/comment/AddMeetingComment';
import MeetingCommentList from 'components/meeting/comment/MeetingCommentList';
import UpdateMeetingComment from 'components/meeting/comment/UpdateMeetingComment';
import styled from 'styled-components';

const MeetingCommentPage = () => {
  return (
    <div>
      <MeetingCommentList />
      <UpdateMeetingComment />
    </div>
  );
};

export default MeetingCommentPage;
