const KakaoLogin = () => {
  const REST_API_KEY = '75debf7f7e2c369236e109e9895f5961';
  const REDIRECT_URI = 'http://localhost:3000/';
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  return (
    <div>
      <a href={KAKAO_AUTH_URL}>
        <img src="image/kakao_login_medium_wide.png"></img>
      </a>
    </div>
  );
};

export default KakaoLogin;
