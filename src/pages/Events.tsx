import { useAppDispatch, useAppSelector } from 'hooks/storeHooks';
import React, { useState, useEffect } from 'react';
import { uiActions } from 'redux/store';
import EventFilters from 'views/EventFilters';
import EventList from 'views/EventList';

function Events() {
  const uiData = useAppSelector((state) => state.uiData);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        dispatch(uiActions.toggleFilters(false));
      } else {
        dispatch(uiActions.toggleFilters(true));
      }
    };
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  });
  return (
    <div className="events-page flex gap-4 w-screen h-screen bg-gradient-to-r from-[#D6025C] to-[#02D6FB] lg:py-4 lg:px-4">
      {uiData.filtersToggled && <EventFilters />}
      <EventList />
    </div>
  );
}

export default Events;
