import React, { useState, useEffect } from 'react';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  text?: string;
}

function Button(props: ButtonProps) {
  const { text = 'Button', className, ...rest } = props;
  return (
    <button
      {...rest}
      className={`button-container px-4 py-3 bg-[#FF51A4] rounded-md text-white ${className}`}
    >
      <p className="text-center font-poppins">{text}</p>
    </button>
  );
}

export default Button;
