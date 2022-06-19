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
    <div className="event-select-wrapper flex w-[275px] gap-1 items-center ">
      <IoAmericanFootballOutline className="event-icon m-0 text-4xl text-white" />
      <div className="input-content-container flex-1 flex-col pl-2">
        <label
          htmlFor="landing-event-type-select"
          className="font-poppins font-medium text-white"
        >
          Event Type
        </label>
        <div>
          <Select
            id="landing-event-type-select"
            data={dummyData}
            containerClassName=" px-0 pr-3 py-0 bg-transparent text-white"
          />
        </div>
      </div>
    </div>
  );
}

export default LandingEventType;
