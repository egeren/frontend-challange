import React, { useState, useEffect } from 'react';
import { IoLocationOutline } from 'react-icons/io5';

function LandingLocationInput() {
  return (
    <div className="location-search-wrapper flex flex-1 items-center">
      <IoLocationOutline className="location-icon flex-shrink-0 m-0 md:text-4xl text-2xl text-white" />
      <div className="input-content-container flex flex-col pl-2">
        <label
          htmlFor="landing-location-input"
          className="w-full font-poppins font-medium md:text-base text-sm text-white"
        >
          Location
        </label>
        <input
          type="text"
          id="landing-location-input"
          className="outline-none bg-transparent font-normal md:text-base text-sm text-white placeholder:text-[#dedede]"
          placeholder="Search by typing"
        />
      </div>
    </div>
  );
}

export default LandingLocationInput;
