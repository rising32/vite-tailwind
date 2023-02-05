import React from 'react';
import SubTitle from '../../components/Header/SubTitle';

function CreditCards() {
  return (
    <div className="flex flex-col w-full p-6">
      <SubTitle mainTitle="Credit Cards" />
      <div className="flex flex-col mt-8">
        <div className="flex w-60 py-3 justify-center bg-blue-600 rounded-full">
          <p className="text-white text-xl font-medium">{'+ Add a credit card'}</p>
        </div>
      </div>
    </div>
  );
}

export default CreditCards;
