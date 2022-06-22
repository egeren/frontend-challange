import React, { useState, useEffect, useLayoutEffect } from 'react';
import { IoAdd, IoRemove } from 'react-icons/io5';

interface NumberProps {
  containerClassName?: React.HTMLAttributes<HTMLDivElement>['className'];
}

function Number(props: NumberProps) {
  const { containerClassName } = props;
  const [value, setValue] = useState(1);

  const handleChange = (value: number) => {
    if (value < 0) {
      setValue(0);
    } else {
      setValue(value);
    }
  };

  return (
    <div
      className={`number-container px-1 flex flex-row justify-between items-center border border-[#aaa] text-black bg-white rounded-md overflow-hidden ${containerClassName}`}
    >
      <IoRemove
        className="text-lg flex flex-shrink-0 cursor-pointer"
        onClick={() => handleChange(value - 1)}
      />
      <p className="select-none">{value}</p>
      <IoAdd
        className="text-lg flex flex-shrink-0 cursor-pointer"
        onClick={() => handleChange(value + 1)}
      />
    </div>
  );
}

export default Number;
