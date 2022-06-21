import React, { useState, useEffect } from 'react';
import { Button, LandingSearch } from 'components';

function Landing() {
  return (
    <div className="landing-wrapper flex items-center relative w-full min-h-screen">
      <img
        src="/images/background.png"
        className="absolute w-full h-full object-cover object-[70%] -z-10"
      />
      <div className="landing-container flex flex-col w-full sm:px-20 px-5 pb-10">
        <div className="texts-container flex flex-col lg:items-start items-center">
          <h1 className="landing-page-header w-fit uppercase font-bebas 2xl:text-9xl xl:text-8xl lg:text-7xl md:text-6xl sm:text-6xl xs:text-5xl text-4xl tracking-widest">
            SEARCH FOR EVENTS
          </h1>
          <p className="font-poppins font-normal text-white 2xl:text-3xl xl:text-xl sm:text-lg xs:text-sm text-xs text-center pt-3">
            You can search concerts, theaters, festivals, whatever you want.
          </p>
          <p className="font-poppins font-normal text-white 2xl:text-3xl xl:text-xl sm:text-lg xs:text-sm text-xs text-center">
            Select your aviability date, event type and see details of it.
          </p>
        </div>
        <div className="search-container flex lg:justify-start justify-center lg:pt-20 pt-10">
          <LandingSearch />
        </div>
        <div className="search-button-container flex lg:justify-start justify-center lg:pt-10 pt-8">
          <Button className="px-14" text="Search Events" />
        </div>
      </div>
    </div>
  );
}

export default Landing;
