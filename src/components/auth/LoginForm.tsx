import React, { useState } from 'react';
import FloatingLabelInput from '../common/FloatingLabelInput';
import { useAppDispatch } from '../../store/hooks';
import { changeAuthModal } from '../../store/features/core/Core';

function LoginForm() {
  const [data, setData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const dispatch = useAppDispatch();
  const goToSignUp = () => {
    dispatch(changeAuthModal('REGISTER'));
  };

  const handleChange = (name: string, value: string) => {
    setData({ ...data, [name]: value });
  };
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <p className="text-xl font-bold mt-8">Create Account</p>
      <form className="w-full flex flex-col items-center justify-center">
        <div className="grid gap-8 grid-cols-1 my-12 w-full">
          <FloatingLabelInput
            label="Email"
            type="text"
            value={data.email}
            onChangeInputValue={handleChange}
          />
          <FloatingLabelInput
            label="Passwordd"
            type="password"
            value={data.password}
            onChangeInputValue={handleChange}
          />
        </div>
        {error ? (
          <div>
            <p className="text-md text-red-700">{error}</p>
          </div>
        ) : null}
        <div className="flex w-full py-3 justify-center bg-blue-600 rounded-full">
          <p className="text-white text-xl font-medium">Login</p>
        </div>
      </form>
      <div className="flex flex-row mt-4" onClick={goToSignUp}>
        <p className="text-xl mr-4">New Here ?</p>
        <p className="text-xl text-blue-600">Sign Up</p>
      </div>
    </div>
  );
}

export default LoginForm;
