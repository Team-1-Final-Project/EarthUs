//redirct uri페이지
import { localApi, api, apis, multi } from 'api/api';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const KakaoAuth = () => {
  const navigate = useNavigate();
  let code = new URL(window.location.href).searchParams.get('code');

  useEffect(() => {
    //서버 배포시 localApi => api 로 변경 필요.
    localApi
      .get(`login/kakao?code=${code}`)
      .then((res) => {
        const ACCESS_TOKEN = res.headers['authorization'];
        sessionStorage.setItem('Access_token', ACCESS_TOKEN);
        //서버 배포시 localApi => api 로 변경 필요.
        localApi.defaults.headers.common['Authorization'] = ACCESS_TOKEN;
        multi.defaults.headers.common['Authorization'] = ACCESS_TOKEN;
        apis
          .kakaoLogin()
          .then((res) => {
            const nickname = res.data.nickname;
            const image = res.data.profileImage;
            const email = res.data.email;
            const id = res.data.id;
            sessionStorage.setItem('profileImage', image);
            sessionStorage.setItem('nickname', nickname);
            sessionStorage.setItem('email', email);
            sessionStorage.setItem('id', id);
            navigate(sessionStorage.getItem('Location') ? sessionStorage.getItem('Location') : '/');
          })
          .catch((err) => console.log('err', err));
      })
      .catch((err) => {
        console.log(err);
      });
  });
};

export default KakaoAuth;
