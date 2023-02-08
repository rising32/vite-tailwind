import React, { useState } from 'react';
import FloatingLabelInput from '../common/FloatingLabelInput';
import { useAppDispatch } from '../../store/hooks';
import { changeAuthModal, closeAuthModal, setUser } from '../../store/features/core/Core';
import { LoginFormData, onLogin } from '../../libs/apis/auth';
import useAuth from './hooks/useAuth';

function LoginForm() {
  const [data, setData] = useState<LoginFormData>({ email: '', password: '' });
  const [error, setError] = useState('');

  const dispatch = useAppDispatch();
  const goToSignUp = () => {
    dispatch(changeAuthModal('REGISTER'));
  };

  const { onLoginValidation } = useAuth();
  const handleChange = (name: string, value: string) => {
    console.log(name, value);
    setData({ ...data, [name.toLowerCase()]: value });
  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (onLoginValidation(data)) {
      setError(onLoginValidation(data));
      return;
    }

    setError('');
    const response = await onLogin({
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
      <p className="text-2xl font-bold capitalize">Welcome</p>
      <p className="text-xl font-bold mt-8">Login to Your Account</p>
      <form onSubmit={handleSubmit} className="w-full flex flex-col items-center justify-center">
        <div className="grid gap-8 grid-cols-1 mt-12 mb-4 w-full">
          <FloatingLabelInput
            label="Email address"
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
          <div className="my-2">
            <p className="text-md text-red-700">{error}</p>
          </div>
        ) : null}
        <button type="submit" className="flex w-full py-3 justify-center bg-blue-600 rounded-full">
          <p className="text-white text-xl font-medium">Login</p>
        </button>
      </form>
      <div className="flex flex-row mt-4" onClick={goToSignUp}>
        <p className="text-xl mr-4">New Here ?</p>
        <p className="text-xl text-blue-600">Sign Up</p>
      </div>
    </div>
  );
}

export default LoginForm;
// import * as React from "react";
// import { Controller, useForm } from "react-hook-form";
// import FloatingInput from "../common/FloatingInput";

export type FormData = {
  email: string;
  password: string;
};

// export default function App() {
//   const { register, control, handleSubmit, formState: { errors } } = useForm<FormData>();
//   const onSubmit = handleSubmit(data => console.log(data));
//   // firstName and lastName will have correct type

//   return (
//     <form onSubmit={onSubmit}>
//       <Controller
//         control={control}
//         rules={{
//          maxLength: 100,
//         }}
//         render={({ field: { onChange, onBlur, value, name } }) => (
//           <FloatingInput
//             label="Email address"
//             register={register}
//             control={control}
//             type='email'
//             onChange={onChange}
//             value={value}
//             formDataType={name}
//           />
//         )}
//         name="email"
//       />
//       <Controller
//         control={control}
//         rules={{
//          maxLength: 100,
//         }}
//         render={({ field: { onChange, onBlur, value, name } }) => (
//           <FloatingInput
//             label="Password"
//             register={register}
//             control={control}
//             type="password"
//             onChange={onChange}
//             value={value}
//             formDataType={name}
//           />
//         )}
//         name="password"
//       />
//       {/* <FloatingInput register={register} control={control} label="Email address" formDataType='firstName' />
//       <FloatingInput register={register} control={control} label="Password" formDataType='lastName' /> */}
//       <input type="submit" />
//     </form>
//   );
// }
