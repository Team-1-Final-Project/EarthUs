import React from 'react';

const KakaoLogin = () => {
  const REDIRECT_URI = 'http://localhost:3000/';
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  return (
    <div>
      <a href={KAKAO_AUTH_URL}>
        <img src="image/kakao_login_medium_wide.png"></img>
      </a>
    </div>
  );
};

export default KakaoLogin;
