import React from 'react';
import { BsSearch } from 'react-icons/bs';
import { useState } from 'react';

const Search = ({ onSearch }) => {
  const [searchKeyword, setSearchKeyword] = useState('');
  return (
    <div className="rounded-full border w-64 h-8 my-4 mr-4 px-4 float-right flex justify-center items-center">
      <input
        type="text"
        className="bg-transparent w-full h-full focus:outline-0"
        onChange={(e) => setSearchKeyword(e.target.value)}
      />
      <BsSearch className="w-5 h-5 cursor-pointer ml-2" onClick={() => onSearch(searchKeyword)} />
    </div>
  );
};

export default Search;
