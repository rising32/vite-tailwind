import React from 'react';
import { rametronNodeThumbnail } from '../../assets/images';
import Stripe from '../../components/pay/Stripe';
function StripePayment() {
  return (
    <main className="flex-grow pt-16 md:pt-20 bg-[#212020] text-white">
      <div className="flex flex-row mx-12 my-24">
        <div className="mr-16 p-6 flex flex-col items-center justify-center w-1/3">
          <p className="text-xl font-bold">Rametron NODE Licence</p>
          <img className="w-full mt-4 mb-1" src={rametronNodeThumbnail} />
          <p className="text-lg">License(s) required to operate Rametron Nodes.</p>
          <p className="text-xl font-bold my-6">System Requirements</p>
          <div className="flex flex-1 flex-row w-full gap-2">
            <div className="flex flex-1 flex-col w-1/2">
              <div>
                <p className="text-xl font-bold">OS</p>
                <p className="text-xl truncate overflow-hidden">Windows/Mac/Linux (64bit)</p>
              </div>
              <div>
                <p className="text-xl font-bold">Processor</p>
                <p className="text-xl truncate overflow-hidden">2 or more CPU Cores</p>
              </div>
            </div>
            <div className="flex flex-1 flex-col">
              <div>
                <p className="text-xl font-bold">Memory</p>
                <p className="text-xl truncate overflow-hidden">4GB RAM</p>
              </div>
              <div>
                <p className="text-xl font-bold">Storage</p>
                <p className="text-xl truncate overflow-hidden">60 GB free disk space</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-2/3">
          <Stripe amount={1500} />
        </div>
      </div>
    </main>
  );
}

export default StripePayment;
