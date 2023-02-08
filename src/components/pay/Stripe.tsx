import React from 'react';

type Props = {
  amount: number;
  step: number;
};

function Stripe({ amount = 1500, step = 0 }: Props) {
  const stepInfo = [
    {
      step: 1,
      text: 'Fill info',
      isDone: false,
    },
    {
      step: 2,
      text: 'Enter amount',
      isDone: false,
    },
    {
      step: 3,
      text: 'Select method',
      isDone: false,
    },
    {
      step: 4,
      text: 'Buy',
      isDone: false,
    },
  ];

  return (
    <div className="flex flex-col p-6">
      <div className="pb-4">
        <p className="text-3xl font-bold">Price: ${amount}</p>
      </div>
      <div className="my-8 text-xl">
        <p>Progress</p>
        <div className="w-full h-8 my-1 bg-white rounded-full" />
        <p>Total Quantity</p>
      </div>
      <div className="my-8 text-xl">
        <ul className="flex flex-grow justify-between flex-wrap items-center text-lg">
          {stepInfo.map((stepItem) => (
            <li
              key={stepItem.step}
              className="flex flex-row flex-1 last:flex-none items-center text-sm"
            >
              <div className="w-8 h-8 rounded-full bg-sky-500 mr-2 flex items-center justify-center">
                <p className="text-center">{stepItem.step}</p>
              </div>
              <div className="w-8">
                <p className="text-center">{stepItem.text}</p>
              </div>
              {stepItem.step < 4 ? <div className="flex flex-1 h-px bg-white mx-2" /> : null}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Stripe;
