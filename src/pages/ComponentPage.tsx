import { Button, Select, DateInput, InputContainer } from 'components';
import TextInput from 'components/TextInput';
import React, { useState, useEffect } from 'react';
import {
  IoAdd,
  IoAmericanFootball,
  IoCalendarNumber,
  IoPerson,
  IoWifi,
} from 'react-icons/io5';

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
      <div className="w-80 flex flex-col text-white">
        Select
        <Select data={dummyData} />
        Select \w Icon
        <Select data={dummyData} icon={IoAmericanFootball} />
        Date Input
        <DateInput />
        Date Input \w Icon
        <DateInput icon={IoCalendarNumber} />
        Text Input
        <TextInput />
        Text Input \w Icon
        <TextInput icon={IoPerson} />
        Button
        <Button text="Merhaba Dünya" />
      </div>
    </div>
  );
}

export default ComponentPage;
