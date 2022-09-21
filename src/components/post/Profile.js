import React from 'react';
import styled from 'styled-components';

const Profile = ({ post }) => {
  return (
    <div className="profileWrap">
      <ProfileStyled>
        <img className="img" src={post && post.profileimage} alt="profileimg" />
      </ProfileStyled>
      <NameStyled>{post && post.writerName}</NameStyled>
    </div>
  );
};

const ProfileStyled = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 70%;
  overflow: hidden;
  margin-bottom: 10px;
  .img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const NameStyled = styled.span`
  margin-left: 10px;
  color: #333;
  font-size: 14px;
  position: relative;
  top: 15px;
`;
export default Profile;
