import React from 'react';
import useHeader from './hooks/useHeader';

const AuthView = () => {
  const { onResigerClick, onLoginClick } = useHeader();

  return (
    <div className="flex flex-row items-center justify-between gap-4 text-lg">
      <div>
        <button
          className="flex justify-center w-32 py-1 text-sky-500 rounded-full bg-transparent border-solid border-2 border-sky-500"
          onClick={onResigerClick}
        >
          <p>Register</p>
        </button>
      </div>
      <div>
        <button
          className="flex justify-center w-32 py-1 text-white rounded-full bg-sky-500"
          onClick={onLoginClick}
        >
          <p>Login</p>
        </button>
      </div>
    </div>
  );
};

export default AuthView;
