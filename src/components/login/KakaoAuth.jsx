import { api } from 'api/api';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const KakaoAuth = () => {
  const navigate = useNavigate();
  let code = new URL(window.location.href).searchParams.get('code');

  useEffect((e) => {
    e.preventDefault();
    api
      .get(`?code=${code}`)
      .then((res) => {
        const ACCESS_TOKEN = res.headers['access-token'];
        const kakaoToken = res.data.data.kakaoToken;
        const refreshToken = res.headers['refresh-token'];
        const email = res.data.data.email;
        sessionStorage.setItem('Access_token', ACCESS_TOKEN);
        sessionStorage.setItem('kakaoToken', kakaoToken);
        sessionStorage.setItem('Refresh_token', refreshToken);
        localStorage.setItem('email', email);
        console.log(res);
        navigate('/');
      })
      .catch((err) => {
        console.log(err);
      });
  });
};

export default KakaoAuth;
