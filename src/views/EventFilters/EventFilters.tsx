import React, { useState, useEffect } from 'react';
import { Button, DateInput, Select, TextInput } from 'components';
import {
  IoAmericanFootballOutline,
  IoBusinessOutline,
  IoCalendarNumberOutline,
  IoLocationOutline,
  IoPerson,
  IoSearch,
} from 'react-icons/io5';
import { useAppDispatch, useAppSelector } from 'hooks/storeHooks';
import { filtersActions, uiActions } from 'redux/store';

function EventFilters() {
  const [startingDate, setStartingDate] = useState('');
  const [endingDate, setEndingDate] = useState('');
  const [eventType, setEventType] = useState('');
  const [keywords, setKeywords] = useState('');
  const filtersData = useAppSelector((state) => state.filtersData);
  const dispatch = useAppDispatch();

  const dummyData = [
    {
      id: '1',
      value: 'Option 1',
      icon: IoPerson,
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

  const handleClose = () => {
    dispatch(uiActions.toggleFilters(false));
  };

  const handleSearchEvents = () => {
    dispatch(
      filtersActions.setFilters({
        ...filtersData,
        startingDate: startingDate || '',
        endingDate: endingDate || '',
        eventType: eventType,
        keywords: keywords,
      })
    );
  };

  return (
    <>
      <div
        className="backdrop fixed lg:hidden block left-0 top-0 w-full h-full bg-black bg-opacity-80 z-30"
        onClick={handleClose}
      ></div>
      <div className="event-filters-wrapper lg:relative absolute lg:flex bg-white xl:w-[350px] lg:w-[300px] w-[350px] h-full rounded-md z-30">
        <div className="event-filters-container w-full h-full flex flex-col px-4 py-4 overflow-y-scroll">
          <div className="event-filters-header">
            <h1 className="font-poppins font-semibold text-2xl">
              Search Filters
            </h1>
          </div>
          <div className="filters-container flex-1 flex flex-col gap-4 pt-5">
            <div className="filter-item">
              <p>Starting Date</p>
              <DateInput icon={IoCalendarNumberOutline} />
            </div>
            <div className="filter-item">
              <p>Ending Date</p>
              <DateInput icon={IoCalendarNumberOutline} />
            </div>
            <div className="filter-item">
              <p>Event Type</p>
              <Select icon={IoAmericanFootballOutline} data={dummyData} />
            </div>
            <div className="filter-item">
              <p>Keywords</p>
              <TextInput icon={IoSearch} />
            </div>
          </div>
          <div className="searct-button-container flex items-center justify-center pt-4">
            <Button
              text="Search Events"
              className="px-12"
              onClick={handleSearchEvents}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default EventFilters;
