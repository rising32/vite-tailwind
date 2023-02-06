import React from 'react';
import HeroHome from '../components/landing/HeroHome';
import FeaturesHome from '../components/landing/FeaturesHome';
import PriceDescription from '../components/landing/PriceDescription';
import Newsletter from '../components/landing/Newsletter';
import FeaturesBlocks from '../components/landing/FeaturesBlocks';
import Testimonials from '../components/landing/Testimonials';
import Footer from '../components/footer/Footer';

function LandingPage() {
  return (
    <>
      <main className="flex-grow pt-16 md:pt-20">
        <HeroHome />
        <FeaturesHome />
        <PriceDescription />
        <FeaturesBlocks />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}

export default LandingPage;
