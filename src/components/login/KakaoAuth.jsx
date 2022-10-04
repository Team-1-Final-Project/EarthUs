//redirct uri페이지
import { api, apis } from 'api/api';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getprofile } from 'redux/modules/loginSlice';
import { useSelector } from 'react-redux';

const KakaoAuth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let code = new URL(window.location.href).searchParams.get('code');

  const data = useSelector((state) => state.login);

  useEffect(() => {
    api
      .get(`login/kakao?code=${code}`)
      .then((res) => {
        const ACCESS_TOKEN = res.headers['authorization'];
        sessionStorage.setItem('Access_token', ACCESS_TOKEN);
        api.defaults.headers.common['Authorization'] = ACCESS_TOKEN;
        apis
          .kakaoLogin()
          .then((res) => {
            console.log('res', res);
            const nickname = res.data.nickname;
            const image = res.data.profileImage;
            const email = res.data.email;
            dispatch(getprofile({ nickname, image, email }));
            navigate(sessionStorage.getItem('Location') ? sessionStorage.getItem('Location') : '/');
            console.log(sessionStorage.getItem('Location'));
          })
          .catch((err) => console.log('err', err));
      })
      .catch((err) => {
        console.log(err);
      });
  });
};

export default KakaoAuth;
