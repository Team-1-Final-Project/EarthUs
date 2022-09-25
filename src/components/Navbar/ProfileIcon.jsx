import { useSelector } from 'react-redux';

const ProfileIcon = () => {
  const data = useSelector((state) => {
    return state.login;
  });

  return <div>{data.loginState ? <img src={data.image}></img> : console.log(data.loginState)}</div>;
};

export default ProfileIcon;
