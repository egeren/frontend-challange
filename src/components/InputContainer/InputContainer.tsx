import React, { useState, useEffect } from 'react';
import { IconType } from 'react-icons';

interface InputContainerProps {
  icon?: IconType;
  iconClassName?: string;
  children: React.ReactNode;
}

function InputContainer(props: InputContainerProps) {
  const { icon, iconClassName, children } = props;
  return (
    <div className="flex items-center border rounded-md py-3 px-2">
      {icon &&
        React.createElement(icon, {
          className: `text-2xl ${iconClassName} `,
        })}
      {children}
    </div>
  );
}

export default InputContainer;
