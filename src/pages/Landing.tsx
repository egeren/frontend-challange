import React, { useState, useEffect } from 'react';
import { LandingSearch } from 'components';

function Landing() {
  return (
    <div className="landing-wrapper relative w-full min-h-screen">
      <img
        src="/images/background.png"
        className="absolute w-full h-full object-cover object-left -z-10"
      />
      <div className="landing-container w-full">
        <div className="texts-container">
          <h1 className="w-fit uppercase font-bebas text-8xl tracking-widest">
            SEARCH FOR EVENTS
          </h1>
          <p className="font-poppins font-normal text-white text-2xl">
            You can search concerts, theaters, festivals, whatever you want.
          </p>
          <p className="font-poppins font-normal text-white text-2xl">
            Select your aviability date, event type and see details of it.
          </p>
        </div>
        <div className="search-container">
          <LandingSearch />
        </div>
      </div>
    </div>
  );
}

export default Landing;
