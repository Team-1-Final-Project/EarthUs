import styled from 'styled-components';
import { BsTrash, BsPencil } from 'react-icons/bs';

const MeetingComment = ({ data }) => {
  const name = sessionStorage.getItem('nickname');

  return (
    <ContentsWrapStyle>
      <div className="profileWrap">
        <ProfileStyle>
          <img src={data.profileImage} alt="profileimg" />
        </ProfileStyle>
        <NameStyle>{data.nickname}</NameStyle>
      </div>
      <ContentIconWrap>
        <ContentStyle>{data.content}</ContentStyle>

        {data?.nickname === name ? (
          <IconStyled>
            <BsPencil className="button cursor-pointer" onClick={() => {}} />
            <BsTrash className="button cursor-pointer" onClick={() => {}} />
          </IconStyled>
        ) : null}
      </ContentIconWrap>
    </ContentsWrapStyle>
  );
};

const ContentsWrapStyle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  margin-top: 1em;
  padding: 10px 20px;
  border-radius: 10px;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  outline-color: #eaecee;

  .profileWrap {
    display: flex;
    align-items: top;
  }
  /* @media (max-width: 750px) {
    flex-direction: column;
  } */
`;

const ProfileStyle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 70%;
  overflow: hidden;
  .img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const NameStyle = styled.span`
  margin-left: 10px;
  width: 70px;
  color: #333;
  font-size: 14px;
  position: relative;
  top: 10px;
`;

const ContentIconWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

const ContentStyle = styled.span`
  margin-right: 20px;
  font-size: 14px;
  color: #595f63;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  /* @media (max-width: 750px) {
    -webkit-line-clamp: 3;
    margin-right: 0px;
  } */
`;

const IconStyled = styled.div`
  display: flex;
  flex-direction: column;
  .button {
    margin-top: 1px;
    color: #22d3ee;
    background-color: white;
    border: 1px solid #22d3ee;
    width: 30px;
    height: 20px;
    padding: 2px 3px;
    border-radius: 3px;
  }
`;
export default MeetingComment;
