import React from 'react';
import { BsSearch } from 'react-icons/bs';
import { useState } from 'react';
import { useEffect } from 'react';

const Search = ({ onSearch, className, defaultValue }) => {
  const [searchKeyword, setSearchKeyword] = useState('');

  useEffect(() => {
    setSearchKeyword(defaultValue);
  }, []);

  const handleOnkeyPress = (e) => {
    if (e.key === 'Enter') {
      onSearch(searchKeyword);
    }
  };
  return (
    <div className={className}>
      <input
        type="text"
        className="bg-transparent w-full h-full focus:outline-0"
        onChange={(e) => setSearchKeyword(e.target.value)}
        placeholder="검색어를 입력하세요"
        defaultValue={defaultValue}
        onKeyDown={handleOnkeyPress}
        autoFocus={true}
      />
      <BsSearch className="w-5 h-5 cursor-pointer ml-2" onClick={() => onSearch(searchKeyword)} />
    </div>
  );
};

export default Search;
