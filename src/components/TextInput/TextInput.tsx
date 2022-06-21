import React, { useState, useEffect } from 'react';
import { IconType } from 'react-icons';
import DatePicker from 'react-multi-date-picker';

interface TextInputProps {
  containerClassName?: React.HTMLAttributes<HTMLDivElement>['className'];
  icon?: IconType;
}

function TextInput(props: TextInputProps) {
  const { containerClassName, icon } = props;
  return (
    <div
      className={`select-container w-full flex flex-row justify-between items-center border border-[#aaa] text-black bg-white rounded-md overflow-hidden ${containerClassName}`}
    >
      {icon && React.createElement(icon, { className: 'flex text-xl ml-2' })}
      <input type="text" className="w-full h-full px-2 py-3 outline-none" />
    </div>
  );
}

export default TextInput;
