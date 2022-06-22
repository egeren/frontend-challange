import React, { useState, useEffect } from 'react';
import LandingDatePicker, { ISelectedDate } from './atoms/LandingDatePicker';
import LandingEventType from './atoms/LandingEventType';
import LandingLocationInput from './atoms/LandingLocationInput';
import Seperator from 'components/Seperator';

interface LandingSearchProps {
  locationSelect: (loc: string) => void;
  dateSelect: (date: ISelectedDate) => void;
  eventSelect: (event: string) => void;
}
function LandingSearch(props: LandingSearchProps) {
  const { locationSelect, dateSelect, eventSelect } = props;
  return (
    <div className="landing-search-wrapper 2xl:w-[1000px] xl:w-[800px] lg:w-[750px] md:w-2/3 w-full">
      <div className="landing-search-container relative flex lg:flex-row flex-col gap-4 w-full px-4 py-3">
        <div className="absolute left-0 top-0 bg-white blur-[1px] bg-opacity-20 rounded-md w-full h-full -z-10" />
        <LandingLocationInput onSelect={(val) => locationSelect(val)} />
        <Seperator size="100%" color="#FFFFFFaa" />
        <LandingDatePicker onSelect={(dates) => dateSelect(dates)} />
        <Seperator size="100%" color="#FFFFFFaa" />
        <LandingEventType onSelect={(item) => eventSelect(item.value)} />
      </div>
    </div>
  );
}

export default LandingSearch;
