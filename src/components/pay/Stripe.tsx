import React, { useEffect, useState } from 'react';
import FloatingLabelInput from '../common/FloatingLabelInput';
import { useAppSelector } from '../../store/hooks';

type Props = {
  amount: number;
};

function Stripe({ amount = 1500 }: Props) {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({ name: '', email: '' });

  const user = useAppSelector((state) => state.core.user);
  useEffect(() => {
    if (user) {
      setData({ email: user.email, name: user.firstName + ' ' + user.lastName });
    }
  }, [user]);
  const handleChange = (name: string, value: string) => {
    setData({ ...data, [name.toLowerCase()]: value });
  };
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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

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
      {step === 1 ? (
        <form onSubmit={handleSubmit} className="w-full flex flex-col items-center justify-center">
          <div className="grid gap-8 grid-cols-1 mt-12 mb-4 w-full">
            <FloatingLabelInput
              label="Full Name"
              name="name"
              type="text"
              value={data.name}
              onChangeInputValue={handleChange}
              fullRounded={false}
            />
            <FloatingLabelInput
              label="Email address"
              name="email"
              type="text"
              value={data.email}
              onChangeInputValue={handleChange}
              fullRounded={false}
            />
          </div>
          <div className="flex w-full px-6 my-4">
            <input type="checkbox" className="checked:bg-blue-500 w-6 h-6 rounded-full mr-4" />
            <p className="text-white text-xl">You must agree to terms and conditions</p>
          </div>
          <button
            type="submit"
            className="flex w-full py-3 justify-center bg-blue-600 rounded-full"
          >
            <p className="text-white text-xl font-medium">Login</p>
          </button>
        </form>
      ) : null}
    </div>
  );
}

export default Stripe;
