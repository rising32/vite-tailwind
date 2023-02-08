import React, { useState } from 'react';
import { rametronNodeThumbnail } from '../assets/images';
import Select from 'react-select';
import ArrowDownSvg from '../assets/svgs/arrow-down.svg';
import ArrowUpSvg from '../assets/svgs/arrow-up.svg';
import { useAppSelector } from '../store/hooks';
import AuthView from '../components/Header/AuthView';
import { Link } from 'react-router-dom';

interface ColourOption {
  readonly value: string;
  readonly label: string;
  readonly color: string;
  readonly isFixed?: boolean;
  readonly isDisabled?: boolean;
}
function NodesPage() {
  const user = useAppSelector((state) => state.core.user);
  const [quantity, setQuantity] = useState(1);

  const IncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  const decreseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const colourOptions: readonly ColourOption[] = [
    { value: 'busd', label: 'BUSD', color: '#00B8D9' },
    { value: 'usdt', label: 'USDT', color: '#0052CC' },
    { value: 'usd', label: 'USD', color: '#5243AA' },
  ];
  return (
    <main className="flex-grow pt-16 md:pt-20">
      <div className="flex flex-row mx-12 md:mx-32 my-32">
        <div className="border-solid border-2 border-black rounded-3xl mr-16 p-6 flex flex-col items-center justify-center w-2/3">
          <p className="text-xl font-bold">Rametron NODE Licence</p>
          <img className="w-full mt-4 mb-1" src={rametronNodeThumbnail} />
          <p className="text-lg">License(s) required to operate Rametron Nodes.</p>
          <p className="text-xl font-bold my-6">System Requirements</p>
          <div className="flex flex-1 flex-row w-full">
            <div className="flex flex-1 flex-col w-1/2">
              <div>
                <p className="text-xl font-bold">OS</p>
                <p className="text-xl">Windows/Mac/Linux (64bit)</p>
              </div>
              <div>
                <p className="text-xl font-bold">Processor</p>
                <p className="text-xl">2 or more CPU Cores</p>
              </div>
            </div>
            <div className="flex flex-1 flex-col">
              <div>
                <p className="text-xl font-bold">Memory</p>
                <p className="text-xl">4GB RAM</p>
              </div>
              <div>
                <p className="text-xl font-bold">Storage</p>
                <p className="text-xl">60 GB free disk space</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/3">
          <div className="flex flex-col border-solid border-2 border-black rounded-xl p-6">
            <div className="pb-4">
              <p className="text-xl font-bold">Price:{4500 * quantity}</p>
            </div>
            <div className="pb-4">
              <p className="text-sm">Payment Method</p>
              <Select
                className="border-white"
                classNamePrefix="select"
                defaultValue={colourOptions[2]}
                name="color"
                options={colourOptions}
              />
            </div>
            <div className="my-6 p-4 flex flex-row items-center justify-between border-black rounded-2xl border-2">
              <div onClick={decreseQuantity}>
                <img src={ArrowDownSvg} className="w-4 h-4" />
              </div>
              <p className="text-sm">{quantity}</p>
              <div onClick={IncreaseQuantity}>
                <img src={ArrowUpSvg} className="w-4 h-4" />
              </div>
            </div>
            {user ? (
              <Link
                to={'/nodes/stripe'}
                className="flex items-center justify-center py-2 mt-2 rounded-md bg-blue-600 hover:bg-green-700"
              >
                <p className="text-lg text-white">Place Order</p>
              </Link>
            ) : (
              <div>
                <div className="my-4 p-2 border-dashed border-2 border-sky-500 rounded-md">
                  <p>Please log in or register to place your order.</p>
                </div>
                <AuthView />
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export default NodesPage;
