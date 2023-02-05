import React from 'react';
import HeroHome from '../components/landing/HeroHome';
import FeaturesHome from '../components/landing/FeaturesHome';
import PriceDescription from '../components/landing/PriceDescription';

function LandingPage() {
  return (
    <div>
      <HeroHome />
      <FeaturesHome />
      <PriceDescription />
    </div>
  );
}

export default LandingPage;
