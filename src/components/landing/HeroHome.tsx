import React from 'react';
// import { landingThumbnail } from '../../assets/images';
import { Link } from 'react-router-dom';

function HeroHome() {
  return (
    <section className="gradient">
      <div className="absolute w-full h-full flex justify-end items-end">
        <div className="flex w-full items-start justify-center mb-48">
          <div className="flex items-center justify-center bg-red-400 px-10 py-2 rounded-full">
            <Link
              to={'/nodes'}
              className="font-medium text-white hover:text-blue-600 flex items-center transition duration-150 ease-in-out"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
      {/* <img className="w-screen h-screen" src={landingThumbnail} alt="Landing Image" /> */}
    </section>
  );
}

export default HeroHome;
