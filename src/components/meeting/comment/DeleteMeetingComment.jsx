import { apis } from 'api/api';
import { BsTrash } from 'react-icons/bs';

const DeleteMeetingComment = ({ data, setState }) => {
  return (
    <div>
      <BsTrash
        className="button cursor-pointer"
        onClick={() => {
          apis.deleteMeetingComment(data.commentId).then((res) => {
            setState('deletet');
          });
        }}
      />
    </div>
  );
};
export default DeleteMeetingComment;
