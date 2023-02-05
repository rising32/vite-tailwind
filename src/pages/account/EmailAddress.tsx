import React, { useState } from 'react';
import SubTitle from '../../components/Header/SubTitle';
import FloatingLabelInput from '../../components/common/FloatingLabelInput';

function EmailAddress() {
  const [email, onChangeEmail] = useState('vanhunghoang01@gmail.com');
  const [curPassword, setCurPassword] = useState('');

  const onChangeInputValue = (value: string) => {
    onChangeEmail(value);
  };
  const onChangeCurPassword = (value: string) => {
    setCurPassword(value);
  };
  return (
    <div className="flex flex-col w-full p-6">
      <SubTitle
        mainTitle="Email Address"
        subTitle="Your verified email address is used to send payment alerts, ID reminders, and login codes."
      />
      <div className="flex flex-col">
        <div className="grid gap-4 grid-cols-1">
          <FloatingLabelInput
            label="Email"
            type="text"
            containerClassName="w-1/2"
            value={email}
            onChangeInputValue={onChangeInputValue}
          />
          <FloatingLabelInput
            label="Cuttent Password"
            type="password"
            containerClassName="w-1/2"
            value={curPassword}
            onChangeInputValue={onChangeCurPassword}
          />
        </div>

        <div className="flex flex-row mt-4">
          <div className="flex w-36 py-3 mr-24 justify-center border-2 border-solid border-blue-600 rounded-full">
            <p>Cacel</p>
          </div>
          <div className="flex w-36 py-3 justify-center bg-blue-600 rounded-full">
            <p className="text-white">Confirm</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmailAddress;
