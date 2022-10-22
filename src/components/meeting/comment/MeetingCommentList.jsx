import { apis } from 'api/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import AddMeetingComment from './AddMeetingComment';
import MeetingComment from './MeetingComment';

const MeetingCommentList = () => {
  const params = useParams().id;
  const [CommentList, setCommentList] = useState();
  const [state, setState] = useState('read');

  useEffect(() => {
    apis.getMeetingCommentList(params).then((res) => {
      setCommentList(res.data);
      setState('read');
    });
  }, [params, state]);

  return (
    <Container>
      <AddMeetingComment setState={setState} />

      {CommentList?.map((data) => {
        return (
          <MeetingComment key={data.commentId} data={data} setState={setState} state={state} />
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  width: 70%;
  margin: auto;
  margin-top: 100px;
  min-width: 300px;
`;
export default MeetingCommentList;
