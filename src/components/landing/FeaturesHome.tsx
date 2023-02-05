import React from 'react';
import { checkThumbnail } from '../../assets/images';
import MainResponsive from '../../layout/MainResponsive';

function FeaturesHome() {
  const featureList = [
    {
      text: 'Highest storage capabilities',
    },
    {
      text: 'Live streaming across all the Pando Network',
    },
    {
      text: 'Pon - 15% APY',
    },
    {
      text: 'PoE - 0.1875 PTX per 1 minute',
    },
    {
      text: 'One-time staking of 35,000 PTX',
    },
    {
      text: 'Host your one DApp, Website, Platform powered by RTE(Rametron Enterprise)',
    },
    {
      text: 'Create your own Network powered by PTX',
    },
    {
      text: 'Exclusive for Pando Community',
    },
  ];
  return (
    <MainResponsive containerClass="relative bg-black">
      <div className="grid grid-cols-1 lg:grid-cols-2 pb-32">
        {featureList.map((item, index) => (
          <div key={index} className="flex flex-row text-white items-center">
            <img className="w-10 h-10 mr-4" src={checkThumbnail} />
            <p className="flex text-2xl">{item.text}</p>
          </div>
        ))}
      </div>
    </MainResponsive>
  );
}

export default FeaturesHome;
