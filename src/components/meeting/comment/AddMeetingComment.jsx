import { apis } from 'api/api';
import { useRef } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const AddMeetingComment = () => {
  const ref = useRef(null);
  const params = useParams().id;

  const onClick = () => {
    apis.addMeetingComment(params, { content: ref.current.value }).then((res) => {
      console.log(res);
    });

    ref.current.value = '';
  };

  return (
    <div>
      <FormWrap>
        <InputStyled type="text" ref={ref} placeholder="댓글을 입력해주세요" />
        <ButtonStyle onClick={onClick}>작성완료</ButtonStyle>
      </FormWrap>
    </div>
  );
};
const FormWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 50px;
`;

const InputStyled = styled.input`
  box-shadow: 0 1px 3px -1px #e5e7eb;
  padding: 5px 10px;
  height: ${(props) => props.height || '2.25rem'};
  input::placeholder {
    font-size: 14px;
  }
`;
const ButtonStyle = styled.div`
  padding: 5px 10px;
  font-size: 14px;
  border-radius: 5px;
  color: white;
  background-color: #22d3ee;
`;

export default AddMeetingComment;
