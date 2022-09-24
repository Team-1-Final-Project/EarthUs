import { api, apis } from 'api/api';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const KakaoAuth = () => {
  const navigate = useNavigate();
  let code = new URL(window.location.href).searchParams.get('code');

  useEffect(() => {
    api
      .get(`kauth?code=${code}`)
      .then((res) => {
        const ACCESS_TOKEN = res.headers['authorization'];
        sessionStorage.setItem('Access_token', ACCESS_TOKEN);
        api.defaults.headers.common['authorization'] = ACCESS_TOKEN;
        apis
          .kakaoLogin()
          .then((res) => {
            console.log(res);
            navigate('/');
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => {
        console.log(err);
      });
  });
};

export default KakaoAuth;
