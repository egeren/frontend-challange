import React, { useState, useEffect } from 'react';
import { IconType } from 'react-icons';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  text?: string;
  icon?: IconType;
}

function Button(props: ButtonProps) {
  const { text = 'Button', className, icon, ...rest } = props;
  return (
    <button
      {...rest}
      className={`button-container flex items-center px-4 py-3 bg-[#FF51A4] hover:bg-[#ff53a6] active:bg-[#ea388e] rounded-md text-white ${className}`}
    >
      {icon && React.createElement(icon, { className: 'text-xl mr-1' })}
      <p className="w-full text-center font-poppins">{text}</p>
    </button>
  );
}

export default Button;
