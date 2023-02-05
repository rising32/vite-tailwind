import React, { useState } from 'react';
import SubTitle from '../../components/Header/SubTitle';
import FloatingLabelInput from '../../components/common/FloatingLabelInput';

function AccountPassword() {
  const [curPassword, setCurPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const onChangeCurPassword = (value: string) => {
    setCurPassword(value);
  };
  const onChangeNewPassword = (value: string) => {
    setNewPassword(value);
  };
  const onChangeConfirmPassword = (value: string) => {
    setConfirmPassword(value);
  };
  return (
    <div className="flex flex-col w-full p-6">
      <SubTitle
        mainTitle="Account Password"
        subTitle="Fill out the fields below to change your account password."
      />
      <div className="flex flex-col">
        <div className="grid gap-4 grid-cols-1">
          <FloatingLabelInput
            label="Cuttent Password"
            type="password"
            containerClassName="w-1/2"
            value={curPassword}
            onChangeInputValue={onChangeCurPassword}
          />
          <FloatingLabelInput
            label="New Password"
            type="password"
            containerClassName="w-1/2"
            value={newPassword}
            onChangeInputValue={onChangeNewPassword}
          />
          <FloatingLabelInput
            label="Confirm your new password"
            type="password"
            containerClassName="w-1/2"
            value={confirmPassword}
            onChangeInputValue={onChangeConfirmPassword}
          />
        </div>
        <div className="flex flex-row mt-4">
          <div className="flex w-36 py-3 justify-center bg-blue-600 rounded-full">
            <p className="text-white">Confirm</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountPassword;
