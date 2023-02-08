import React, { useState } from 'react';
import SubTitle from '../../components/Header/SubTitle';
import FloatingLabelInput from '../../components/common/FloatingLabelInput';

function DisplayName() {
  const [displayName, onChangeDisplayName] = useState('VanHung Hoang');

  const onChangeInputValue = (value: string) => {
    onChangeDisplayName(value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(displayName);
    try {
      // const response = await onRegister({
      //   firstName: data.firstName,
      //   lastName: data.lastName,
      //   email: data.email,
      //   password: data.password,
      // });
      // console.log(response);
      // dispatch(
      //   setUser({
      //     id: response.data.user._id,
      //     firstName: response.data.user.firstName,
      //     lastName: response.data.user.lastName,
      //     email: response.data.user.email,
      //     token: response.data.token,
      //   }),
      // );
      // dispatch(closeAuthModal());
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      // if (error.response && error.response.status >= 400 && error.response.status <= 500) {
      //   setError(error.response.data.message);
      // }
    }
  };

  return (
    <div className="flex flex-col w-full p-6">
      <SubTitle
        mainTitle="Display Name"
        subTitle="Your display name will be seen by friends. Have fun with it!"
      />
      <form onSubmit={handleSubmit} className="flex flex-col">
        <FloatingLabelInput
          label="Display Name"
          type="text"
          containerClassName="w-1/2"
          value={displayName}
          onChangeInputValue={onChangeInputValue}
          showErrorText
          errorText="This field is required"
          showRuleText
          ruleText="Can include letters, numbers and underscores"
        />
        <div className="flex flex-row mt-4">
          <div className="flex w-36 py-3 mr-24 justify-center border-2 border-solid border-blue-600 rounded-full">
            <p>Cacel</p>
          </div>
          <div className="flex w-36 py-3 justify-center bg-blue-600 rounded-full">
            <p className="text-white">Confirm</p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default DisplayName;
