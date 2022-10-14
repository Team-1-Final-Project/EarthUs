import React from 'react';

const LoginGoogle = () => {
  function test() {
    const loginUrl = 'http://3.37.61.61/login/google';
    window.location.assign(loginUrl);
  }

  return (
    <>
      <button onClick={test}> test 1</button>
    </>
  );
};
export default LoginGoogle;
