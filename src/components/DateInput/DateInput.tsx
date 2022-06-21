import React, { useState, useEffect } from 'react';
import { IconType } from 'react-icons';
import DatePicker from 'react-multi-date-picker';

interface DateInputProps {
  containerClassName?: string;
  icon?: IconType;
}

function DateInput(props: DateInputProps) {
  const { containerClassName, icon } = props;
  return (
    <div
      className={`select-container cursor-pointer w-full flex flex-row justify-between items-center border bg-white text-black border-[#aaa] rounded-md overflow-hidden ${containerClassName}`}
    >
      {icon && React.createElement(icon, { className: 'text-xl ml-2' })}
      <DatePicker
        containerClassName="w-full h-full"
        inputClass="w-full h-full border-none outline-none cursor-pointer px-2 py-3"
        format="DD/MM/YYYY"
        editable={false}
        placeholder="Select date"
      />
    </div>
  );
}

export default DateInput;
