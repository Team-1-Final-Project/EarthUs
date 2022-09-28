import React from 'react';
import ReactDOM from 'react-dom';

const Backdrop = ({ onConfirm }) => {
  return (
    <div
      className="w-screen h-screen fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-modalBackground"
      onClick={onConfirm}
    />
  );
};

const ModalOverlay = ({ children, width, height }) => {
  return (
    <div
      className={`${width} ${height} w-3/12 h-3/6 rounded-lg bg-white top-1/2 left-1/2 fixed translate-x-[-50%] translate-y-[-50%] flex flex-col justify-center items-center p-5`}
    >
      {children}
    </div>
  );
};

const LoginModal = ({ children, onConfirm, width, height }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={onConfirm} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay width={width} height={height}>
          {children}
        </ModalOverlay>,
        document.getElementById('overlay-root')
      )}
    </>
  );
};

export default LoginModal;
