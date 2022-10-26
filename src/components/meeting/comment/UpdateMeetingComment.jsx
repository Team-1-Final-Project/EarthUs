import { BsPencil } from 'react-icons/bs';
import { AiOutlineCheck } from 'react-icons/ai';

const UpdateMeetingComment = ({ onClick, setUpdate, update }) => {
  return (
    <div>
      {update ? (
        <AiOutlineCheck
          className="button cursor-pointer"
          onClick={() => {
            onClick();
          }}
        />
      ) : (
        <BsPencil
          className="button cursor-pointer"
          onClick={() => {
            setUpdate(true);
          }}
        />
      )}
    </div>
  );
};

export default UpdateMeetingComment;
