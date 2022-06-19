import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import { IconType } from 'react-icons';
import { IoChevronDown, IoPerson } from 'react-icons/io5';
import SelectOptions, { OptionProp } from './atoms/SelectOptions';

const DROPDOWN_OFFSET = 5;

interface SelectProps {
  id: React.HTMLAttributes<HTMLDivElement>['id'];
  data: OptionProp[];
  placeholder?: string;
  offset?: number;
  containerClassName?: React.HTMLAttributes<HTMLDivElement>['className'];
  optionsContainerClassName?: React.HTMLAttributes<HTMLDivElement>['className'];
}

function Select(props: SelectProps) {
  const {
    data,
    offset = DROPDOWN_OFFSET,
    containerClassName,
    optionsContainerClassName,
    placeholder,
  } = props;
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState<OptionProp>();
  const container = useRef<HTMLDivElement>(null);
  const optionsContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!container.current || !optionsContainer.current) return;
    const offsetTop =
      container.current.offsetTop + container.current.clientHeight;
    optionsContainer.current.style.top = offsetTop + offset + 'px';
  }, [container]);

  const handleVisibility = () => {
    setVisible((prev) => !prev);
  };

  const handleSelect = (value: OptionProp) => {
    setVisible(false);
    setSelected(value);
  };

  return (
    <div className="select-wrapper relative font-poppins">
      <div
        ref={container}
        onClick={handleVisibility}
        className={`select-container cursor-pointer w-full flex flex-row justify-between items-center gap-4 bg-white px-2 py-2 rounded-md ${containerClassName}`}
      >
        <p>{selected?.value || placeholder || 'Select item'}</p>
        <IoChevronDown />
      </div>
      <div
        ref={optionsContainer}
        className={`options-container w-full absolute bg-white rounded-sm overflow-hidden ${optionsContainerClassName}`}
      >
        <SelectOptions onSelect={handleSelect} visible={visible} data={data} />
      </div>
    </div>
  );
}

export default Select;
