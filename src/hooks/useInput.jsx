import { useState } from 'react';

//Form 작성시 유용하게 쓰일 수 있는 커스텀 훅입니다.

export const useInput = (initialValue) => {
  const [inputValue, setInputValue] = useState(initialValue);

  const handleChange = (e) => {
    setInputValue(e.target.value);
    console.log(inputValue);
  };

  return [inputValue, setInputValue, handleChange];
};
