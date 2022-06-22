import React, { useState, useEffect, useRef } from 'react';
import { IoCalendarNumberOutline } from 'react-icons/io5';
import DatePicker, { DateObject } from 'react-multi-date-picker';
import { DateTime } from 'luxon';

export interface ISelectedDate {
  type: 'single' | 'range';
  dates: string[];
}

interface LandingDatePickerProps {
  onSelect: (dates: ISelectedDate) => void;
}

function LandingDatePicker(props: LandingDatePickerProps) {
  const { onSelect } = props;
  const [values, setValues] = useState([]);

  const handleDateSelect = (dates: DateObject[]) => {
    const parsed: ISelectedDate = {
      type: dates.length == 1 ? 'single' : 'range',
      dates: [],
    };
    dates.map((date) => {
      const dateString = `${date.year}-${date.month}-${date.day}`;
      parsed.dates.push(dateString);
    });
    onSelect(parsed);
  };
  return (
    <div className="date-search-wrapper flex flex-1 gap-1 items-center">
      <IoCalendarNumberOutline className="date-icon flex-shrink-0 m-0 md:text-4xl text-2xl text-white" />
      <div className="input-content-container flex flex-col pl-2">
        <label
          htmlFor="landing-date-input"
          className="font-poppins font-medium md:text-base text-sm text-white"
        >
          Date
        </label>
        <DatePicker
          inputClass="cursor-pointer w-full outline-none bg-transparent md:text-base text-sm text-white placeholder:text-[#dedede]"
          format="DD/MM/YYYY"
          placeholder="Select dates"
          range
          onChange={handleDateSelect}
        />
      </div>
    </div>
  );
}

export default LandingDatePicker;
