import React from 'react';
import Kakao from 'assets/images/KakaoLoginImage.png';

const KakaoLogin = () => {
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&response_type=code`;

  return (
    <div>
      <a href={KAKAO_AUTH_URL}>
        <img src={Kakao}></img>
      </a>
    </div>
  );
};

export default KakaoLogin;
