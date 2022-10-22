import { apis } from 'api/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import AddMeetingComment from './AddMeetingComment';
import MeetingComment from './MeetingComment';

const MeetingCommentList = () => {
  const params = useParams().id;
  const [CommentList, setCommentList] = useState();

  useEffect(() => {
    apis.getMeetingCommentList(params).then((res) => {
      setCommentList(res.data);
    });
  }, [params]);

  return (
    <Container>
      <AddMeetingComment />

      {CommentList?.map((data) => {
        return <MeetingComment key={data.commentId} data={data} />;
      })}
    </Container>
  );
};

const Container = styled.div`
  width: 70%;
  margin: auto;
  margin-top: 100px;
`;
export default MeetingCommentList;
