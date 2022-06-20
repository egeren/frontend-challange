import React, { useState, useEffect } from 'react';
import EventFilters from 'views/EventFilters';
import EventList from 'views/EventList';

function Events() {
  return (
    <div className="events-page flex gap-4 w-screen h-screen bg-gradient-to-r from-[#D6025C] to-[#02D6FB] py-4 px-4">
      <EventFilters />
      <EventList />
    </div>
  );
}

export default Events;
