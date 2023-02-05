import React from 'react';

function PriceDescription() {
  const featureList = [
    {
      text: 'Before Launch(12/9/22)',
      price: '$1,500',
    },
    {
      text: 'After Launch(12/9/22)',
      price: '$5,000',
    },
  ];
  return (
    <section className="relative bg-black">
      <div className="grid grid-cols-1 sm:grid-cols-2 pb-32 px-64">
        {featureList.map((item, index) => (
          <div key={index} className="flex flex-col text-white items-center">
            <p className="flex text-3xl">{item.text}</p>
            <p className="flex text-2xl">{item.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PriceDescription;
