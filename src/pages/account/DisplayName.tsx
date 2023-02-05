import React, { useState } from 'react';
import SubTitle from '../../components/Header/SubTitle';
import FloatingLabelInput from '../../components/common/FloatingLabelInput';

function DisplayName() {
  const [displayName, onChangeDisplayName] = useState('VanHung Hoang');

  const onChangeInputValue = (value: string) => {
    onChangeDisplayName(value);
  };

  return (
    <div className="flex flex-col w-full p-6">
      <SubTitle
        mainTitle="Display Name"
        subTitle="Your display name will be seen by friends. Have fun with it!"
      />
      <div className="flex flex-col">
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
      </div>
    </div>
  );
}

export default DisplayName;
