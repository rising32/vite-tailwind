import React from 'react';
import SubTitle from '../../components/Header/SubTitle';

function TwoFatorAuthentication() {
  return (
    <div className="flex flex-col w-full p-6">
      <SubTitle
        mainTitle="Two-Factor Authentication"
        subTitle="Take the following steps to enable two-factor authentication and add greater security to
        your wallet"
      />
      <div className="flex flex-col"></div>
    </div>
  );
}

export default TwoFatorAuthentication;
