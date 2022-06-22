import React, { useState, useEffect, useRef } from 'react';
import { IconType } from 'react-icons';
import { IoLocation } from 'react-icons/io5';

interface LocationInputProps {
  icon?: IconType;
  placeholder?: string;
}

function LocationInput(props: LocationInputProps) {
  const { icon, placeholder } = props;
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState<string>();
  const container = useRef<HTMLDivElement>(null);
  const optionsContainer = useRef<HTMLDivElement>(null);

  const handleVisibility = () => {
    setVisible((prev) => !prev);
  };

  const handleSelect = (value: string) => {
    setVisible(false);
    setSelected(value);
    console.log(value);
  };
  return (
    <div className="select-wrapper flex w-full relative font-poppins select-none">
      <div
        ref={container}
        onClick={handleVisibility}
        className={
          'select-container cursor-pointer w-full flex justify-between flex-row items-center border bg-white text-black border-[#aaa] px-2 py-3  rounded-md'
        }
      >
        <div className={'flex items-center'}>
          {icon && React.createElement(icon, { className: 'text-xl mr-2' })}
          <p>{selected || placeholder || 'Select item'}</p>
        </div>
      </div>
      <div
        ref={optionsContainer}
        className={
          'options-container w-full absolute z-10 bg-white text-black rounded-md overflow-hidden shadow-lg'
        }
      >
        <LocationOptions
          onSelect={handleSelect}
          visible={visible}
          data={['ege', 'eren']}
        />
      </div>
    </div>
  );
}

interface LocationOptionsProps {
  visible: boolean;
  data: string[];
  onSelect?: (e: string) => void;
}

export const LocationOptions = (props: LocationOptionsProps) => {
  const { data, visible, onSelect } = props;
  if (!visible) return null;

  const handleSelect = (item: string) => {
    if (!onSelect) return;
    onSelect(item);
  };

  return (
    <ul className="absolute top-[calc(100%+10px)] bg-white w-full cursor-pointer">
      {data.map((item, index) => (
        <li
          key={index}
          className="flex flex-shrink-0 items-center gap-2 px-4 py-3 hover:bg-[#efefef]"
          onClick={() => handleSelect(item)}
        >
          <IoLocation className="text-xl flex-shrink-0" />
          {item}
        </li>
      ))}
    </ul>
  );
};

export default LocationInput;
