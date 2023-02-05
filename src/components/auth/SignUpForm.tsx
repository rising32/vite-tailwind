import React, { useState } from 'react';
import FloatingLabelInput from '../common/FloatingLabelInput';
import { useAppDispatch } from '../../store/hooks';
import { changeAuthModal } from '../../store/features/core/Core';

function SignUpForm() {
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleChange = (name: string, value: string) => {
    setData({ ...data, [name]: value });
  };

  const dispatch = useAppDispatch();
  const goToLogin = () => {
    dispatch(changeAuthModal('LOGIN'));
  };

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <p className="text-xl font-bold mt-8">Create Account</p>

      <form>
        <div className="grid gap-8 grid-cols-1 my-12 w-full">
          <FloatingLabelInput
            label="First Name"
            type="text"
            value={data.firstName}
            onChangeInputValue={handleChange}
          />
          <FloatingLabelInput
            label="Last Name"
            type="text"
            value={data.lastName}
            onChangeInputValue={handleChange}
          />
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
          <p className="text-white text-xl font-medium">Sign Up</p>
        </div>
      </form>

      <div className="flex flex-row mt-4" onClick={goToLogin}>
        <p className="text-xl mr-4">Already have a account?</p>
        <p className="text-xl text-blue-600">Sign in here</p>
      </div>
    </div>
  );
}

export default SignUpForm;
