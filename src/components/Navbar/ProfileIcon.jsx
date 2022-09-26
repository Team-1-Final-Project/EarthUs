import { useSelector } from 'react-redux';
import styled from 'styled-components';

const ProfileIcon = () => {
  const data = useSelector((state) => {
    return state.login;
  });

  return <Icon src={data.image}></Icon>;
};

export default ProfileIcon;

const Icon = styled.img`
  object-fit: cover;
  border-radius: 50% 50%;
  width: 40px;
  height: 40px;
`;
