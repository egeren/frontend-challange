import Select from 'components/Select';
import React, { useState, useEffect } from 'react';
import { IoAmericanFootballOutline, IoPerson } from 'react-icons/io5';

const dummyData = [
  {
    id: '1',
    value: 'Option 1',
    icon: IoPerson,
  },
  {
    id: '1',
    value: 'Concert',
    icon: IoPerson,
  },
  {
    id: '1',
    value: 'Soccer',
    icon: IoPerson,
  },
];

function LandingEventType() {
  return (
    <div className="event-select-wrapper flex flex-1 gap-1 items-center">
      <IoAmericanFootballOutline className="event-icon flex-shrink-0 m-0 md:text-4xl text-2xl text-white" />
      <div className="input-content-container flex-1 flex-col pl-2">
        <label
          htmlFor="landing-event-type-select"
          className="font-poppins font-medium md:text-base text-sm text-white"
        >
          Event Type
        </label>
        <div>
          <Select
            id="landing-event-type-select"
            data={dummyData}
            containerClassName="pl-0 pr-3 py-0 bg-transparent md:text-base text-sm text-white border-none"
            inputClassName="text-white"
            iconClassName="text-white"
          />
        </div>
      </div>
    </div>
  );
}

export default LandingEventType;
