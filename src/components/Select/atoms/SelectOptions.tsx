import React, { useState, useEffect } from 'react';
import { IconType } from 'react-icons';
import { IoPerson } from 'react-icons/io5';

export interface SelectOptionsProps {
  visible: boolean;
  data: OptionProp[];
  onSelect?: (e: OptionProp) => void;
}

export interface OptionProp {
  id: string;
  value: string;
  icon?: IconType;
}

function SelectOptions(props: SelectOptionsProps) {
  const { data, visible, onSelect, ...rest } = props;
  if (!visible) return null;

  const handleSelect = (item: OptionProp) => {
    if (!onSelect) return;
    onSelect(item);
  };

  return (
    <ul className="cursor-pointer">
      {data.map((item, index) => (
        <li
          key={index}
          className="flex flex-shrink-0 items-center gap-2 px-4 py-3 hover:bg-[#efefef]"
          onClick={() => handleSelect(item)}
        >
          {item.icon && <item.icon className="text-xl flex-shrink-0" />}
          {item.value}
        </li>
      ))}
    </ul>
  );
}

export default SelectOptions;
