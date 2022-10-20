import React from 'react';
import ReactDOM from 'react-dom';
import { BsSearch } from 'react-icons/bs';

const Backdrop = ({ onConfirm }) => {
  return (
    <div
      className="z-50 w-full h-full fixed top-0 left-0 bg-white opacity-95"
      onClick={onConfirm}
    />
  );
};

const ModalOverlay = ({ children }) => {
  return (
    <div className="bg-transparent border-b-2 border-black z-50 w-96 h-16 top-1/2 left-1/2 fixed translate-x-[-50%] -translate-y-48 flex justify-center items-center">
      <input className="bg-transparent w-4/5 h-4/5 mr-2" />
      <BsSearch className="w-6 h-6 font-bold" />
    </div>
  );
};

const Modal = ({ children, onConfirm }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={onConfirm} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        document.getElementById('overlay-root')
      )}
    </>
  );
};

export default Modal;
