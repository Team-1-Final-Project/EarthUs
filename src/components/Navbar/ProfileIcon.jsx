import { useSelector } from 'react-redux';
import styled from 'styled-components';

const ProfileIcon = () => {
  const data = useSelector((state) => {
    return state.login;
  });

  return (
    <Div>{data.loginState ? <Icon src={data.image}></Icon> : console.log(data.loginState)}</Div>
  );
};

export default ProfileIcon;

const Div = styled.div`
  display: flex;
  justify-content: end;
`;
const Icon = styled.img`
  object-fit: cover;
  border-radius: 50% 50%;
  width: 60px;
  height: 60px;
`;
