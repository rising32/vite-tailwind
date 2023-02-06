import React from 'react';
import { landingThumbnail } from '../../assets/images';
import { Link } from 'react-router-dom';

function HeroHome() {
  return (
    <section>
      <div className="relative flex justify-center" data-aos="zoom-y-out" data-aos-delay="450">
        <img className="w-full" src={landingThumbnail} alt="Hero" />
        <Link
          to={'/nodes'} className="absolute bottom-32 flex text-black hover:text-blue-600 items-center transform -translate-y-1/2 bg-white rounded-full group p-4 shadow-lg" aria-controls="modal">
          <span className="mx-6">Book Now</span>
        </Link>
      </div>
    </section>
  );
}

export default HeroHome;
