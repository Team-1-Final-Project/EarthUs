import React from 'react';

const Modal = ({ children }) => {
  return (
    <div className="w-3/12 h-3/6 rounded-lg bg-white top-1/2 left-1/2 fixed translate-x-[-50%] translate-y-[-50%] flex flex-col justify-center items-center p-5">
      {children}
    </div>
  );
};

export default Modal;
