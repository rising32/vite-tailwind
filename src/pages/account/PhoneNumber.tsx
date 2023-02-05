import React, { useState } from 'react';
import SubTitle from '../../components/Header/SubTitle';
import FloatingLabelInput from '../../components/common/FloatingLabelInput';

function PhoneNumber() {
  const [phone, onChangePhone] = useState('');

  const onChangeInputValue = (value: string) => {
    onChangePhone(value);
  };
  return (
    <div className="flex flex-col w-full p-6">
      <SubTitle
        mainTitle="Phone Number"
        subTitle="Your phone number may be used to send payment alerts, ID reminders, and login codes"
      />
      <div className="flex flex-col">
        <FloatingLabelInput
          label="Phone Number"
          type="text"
          containerClassName="w-1/2"
          value={phone}
          onChangeInputValue={onChangeInputValue}
        />
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

export default PhoneNumber;
