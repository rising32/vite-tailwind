import React, { useState } from 'react';
import FloatingLabelInput from '../common/FloatingLabelInput';
import { useAppDispatch } from '../../store/hooks';
import { changeAuthModal, closeAuthModal, setUser } from '../../store/features/core/Core';
import { onRegister } from '../../libs/apis/auth';
import useAuth from './hooks/useAuth';

function SignUpForm() {
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleChange = (name: string, value: string) => {
    console.log(name, value);
    setData({ ...data, [name]: value });
  };

  const dispatch = useAppDispatch();
  const goToLogin = () => {
    dispatch(changeAuthModal('LOGIN'));
  };
  const { onSignUpValidation } = useAuth();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (onSignUpValidation(data)) {
      setError(onSignUpValidation(data));
      return;
    }

    setError('');

    const response = await onRegister({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
    });
    console.log(response);
    dispatch(
      setUser({
        id: response.data.user._id,
        firstName: response.data.user.firstName,
        lastName: response.data.user.lastName,
        email: response.data.user.email,
        token: response.data.token,
      }),
    );
    dispatch(closeAuthModal());
  };

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <p className="text-xl font-bold mt-8">Create Account</p>

      <form onSubmit={handleSubmit} className="w-full flex flex-col items-center justify-center">
        <div className="grid gap-8 grid-cols-1 mt-12 mb-4 w-full">
          <FloatingLabelInput
            label="First Name"
            name="firstName"
            type="text"
            value={data.firstName}
            onChangeInputValue={handleChange}
            fullRounded={false}
          />
          <FloatingLabelInput
            label="Last Name"
            name="lastName"
            type="text"
            value={data.lastName}
            onChangeInputValue={handleChange}
            fullRounded={false}
          />
          <FloatingLabelInput
            label="Email"
            name="email"
            type="text"
            value={data.email}
            onChangeInputValue={handleChange}
            fullRounded={false}
          />
          <FloatingLabelInput
            label="Password"
            name="password"
            type="password"
            value={data.password}
            onChangeInputValue={handleChange}
            fullRounded={false}
          />
        </div>
        {error ? (
          <div className="mb-4">
            <p className="text-md text-red-700">{error}</p>
          </div>
        ) : null}
        <button type="submit" className="flex w-full py-3 justify-center bg-blue-600 rounded-full">
          <p className="text-white text-xl font-medium">Sign Up</p>
        </button>
      </form>

      <div className="flex flex-row mt-4" onClick={goToLogin}>
        <p className="text-xl mr-4">Already have a account?</p>
        <p className="text-xl text-blue-600">Sign in here</p>
      </div>
    </div>
  );
}

export default SignUpForm;
