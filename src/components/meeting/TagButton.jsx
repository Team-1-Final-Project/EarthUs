import { useEffect } from 'react';
import { useState } from 'react';

const TagButton = ({ tagName, initialTagState }) => {
  const [tagState, setTagState] = useState(false);
  useEffect(() => {
    initialTagState && setTagState(initialTagState);
  }, []);

  return (
    <button
      className={tagState ? 'bg-cyan-400 p-2 m-1 rounded' : 'bg-white p-2 m-1 rounded'}
      onClick={(e) => {
        e.preventDefault();
        setTagState(initialTagState);
      }}
    >
      {tagName}
    </button>
  );
};

export default TagButton;
