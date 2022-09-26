import React from 'react';

const KakaoLogin = () => {
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI2}&response_type=code`;

  return (
    <div>
      <a href={KAKAO_AUTH_URL}>
        <img src="image/kakaologin/kakao_login_medium_narrow.png"></img>
      </a>
    </div>
  );
};

export default KakaoLogin;
