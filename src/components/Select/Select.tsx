import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import { IconType } from 'react-icons';
import { IoChevronDown, IoPerson } from 'react-icons/io5';
import SelectOptions, { OptionProp } from './atoms/SelectOptions';

const DROPDOWN_OFFSET = 5;

interface SelectProps {
  id?: React.HTMLAttributes<HTMLDivElement>['id'];
  data: OptionProp[];
  placeholder?: string;
  offset?: number;
  containerClassName?: React.HTMLAttributes<HTMLDivElement>['className'];
  optionsContainerClassName?: React.HTMLAttributes<HTMLDivElement>['className'];
  inputClassName?: React.HTMLAttributes<HTMLDivElement>['className'];
  iconClassName?: React.HTMLAttributes<HTMLDivElement>['className'];
  direction?: 'top' | 'bottom';
  icon?: IconType;
  onSelect?: (item: OptionProp) => void;
}

function Select(props: SelectProps) {
  const {
    data,
    offset = DROPDOWN_OFFSET,
    containerClassName,
    inputClassName,
    optionsContainerClassName,
    iconClassName,
    placeholder,
    direction = 'bottom',
    icon,
    onSelect,
  } = props;
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState<OptionProp>();
  const container = useRef<HTMLDivElement>(null);
  const optionsContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!container.current || !optionsContainer.current) return;
    const offsetTop =
      container.current.offsetTop + container.current.clientHeight;

    if (direction == 'bottom') {
      optionsContainer.current.style.top = offsetTop + offset + 'px';
    } else {
      optionsContainer.current.style.top =
        0 - optionsContainer.current.clientHeight - offset + 'px';
      console.log(optionsContainer.current.clientHeight);
    }
  }, [container, visible]);

  const handleVisibility = () => {
    setVisible((prev) => !prev);
  };

  const handleSelect = (value: OptionProp) => {
    setVisible(false);
    setSelected(value);
    if (onSelect) onSelect(value);
  };

  return (
    <div className="select-wrapper flex w-full relative font-poppins select-none">
      <div
        ref={container}
        onClick={handleVisibility}
        className={`select-container cursor-pointer w-full flex justify-between flex-row items-center border bg-white text-black border-[#aaa] px-2 py-3  rounded-md ${containerClassName}`}
      >
        <div className={`flex items-center ${inputClassName}`}>
          {icon && React.createElement(icon, { className: 'text-xl mr-2' })}
          <p>{selected?.value || placeholder || 'Select item'}</p>
        </div>
        <div className={`chevron-icon-container pr-2 ${iconClassName}`}>
          <IoChevronDown className="justify-self-end" />
        </div>
      </div>
      <div
        ref={optionsContainer}
        className={`options-container w-full absolute z-10 bg-white text-black rounded-md overflow-hidden shadow-lg ${optionsContainerClassName}`}
      >
        <SelectOptions onSelect={handleSelect} visible={visible} data={data} />
      </div>
    </div>
  );
}

export default Select;
