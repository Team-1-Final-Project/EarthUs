import { apis } from 'api/api';
import React from 'react';

function NicknameSetting({ nickname, nicknameChange }) {
  return (
    <div>
      <input
        className="w-1/4 border-2"
        placeholder={nickname == null ? '닉네임을 설정해주세요.' : nickname}
        onChange={(e) => nicknameChange(e)}
      />
      {/* <button className="w-20 ml-2 default_button" onClick={(e) => apis.}>수정</button> */}
    </div>
  );
}

export default NicknameSetting;
