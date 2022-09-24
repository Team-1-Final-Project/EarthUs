import { apis } from 'api/api';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const KakaoMyInfo = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = localStorage.getItem('Access_token');
    apis
      .kakaoLogin(accessToken)
      .then((res) => {
        console.log(res);
        navigate('/');
      })
      .catch((err) => console.log(err));
  });

  return <div></div>;
};

export default KakaoMyInfo;
