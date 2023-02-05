import React from 'react';
import SubTitle from '../../components/Header/SubTitle';

function MyNode() {
  return (
    <div className="flex flex-col w-full p-6">
      <SubTitle mainTitle="My Node" />
      <div className="flex flex-col mt-8">
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

export default MyNode;
