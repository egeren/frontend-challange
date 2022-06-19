import React, { useState, useEffect } from 'react';

interface SeperatorProps {
  size?: string;
  direction?: 'horizontal' | 'vertical';
  thickness?: string;
  color?: string;
}

function Seperator(props: SeperatorProps) {
  const {
    direction = 'vertical',
    thickness = 1,
    color = '#000',
    size = '100%',
  } = props;

  return (
    <div className="flex justify-center items-center bg-transparent z-10">
      {direction === 'vertical' ? (
        <div
          style={{ height: size, width: thickness, backgroundColor: color }}
        ></div>
      ) : (
        <div
          style={{ width: size, height: thickness, backgroundColor: color }}
        ></div>
      )}
    </div>
  );
}

export default Seperator;
