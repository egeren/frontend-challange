import React, { useState, useEffect } from 'react';
import { IoLocationOutline } from 'react-icons/io5';

function LandingLocationInput() {
  return (
    <div className="location-search-wrapper flex w-[275px] gap-0 items-center ">
      <IoLocationOutline className="location-icon m-0 text-4xl text-white" />
      <div className="input-content-container flex flex-col pl-2">
        <label
          htmlFor="landing-location-input"
          className="font-poppins font-medium text-white"
        >
          Location
        </label>
        <input
          type="text"
          id="landing-location-input"
          className="outline-none bg-transparent font-poppins font-normal text-white placeholder:text-[#dedede]"
          placeholder="Search by typing"
        />
      </div>
    </div>
  );
}

export default LandingLocationInput;
