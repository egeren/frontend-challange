import { Button, Select } from 'components';
import React, { useState, useEffect } from 'react';
import { IoAdd, IoPerson, IoWifi } from 'react-icons/io5';

const dummyData = [
  {
    id: '1',
    value: 'Option 1',
    icon: IoWifi,
  },
  {
    id: '1',
    value: 'Concert',
    icon: IoPerson,
  },
  {
    id: '1',
    value: 'Soccer',
    icon: IoPerson,
  },
];

function ComponentPage() {
  return (
    <div className="w-screen h-screen px-10 py-10 bg-gray-500">
      <div className="w-80">
        <Select data={dummyData} />
        <Button text="Merhaba Dünya" className="px-20 mt-4" />
      </div>
    </div>
  );
}

export default ComponentPage;
