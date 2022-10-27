import { apis } from 'api/api';
import React from 'react';

function NicknameSetting({ nickname, nicknameChange, updateNickname }) {
  return (
    <div className="flex items-center justify-center my-6">
      <input
        className="w-2/5 border-2"
        placeholder={nickname}
        onChange={(e) => nicknameChange(e)}
      />
      <button
        className="w-20 ml-2 default_button"
        onClick={() =>
          // apis.updateNickname(nickname).then(() => {
          //   alert(nickname);
          //   sessionStorage.setItem('nickname', nickname);
          //   sessionStorage.getItem('nickname');
          // })
          updateNickname(nickname)
        }
      >
        수정
      </button>
    </div>
  );
}

export default NicknameSetting;
