import React, { useState, useEffect } from 'react';
import EventContent from 'views/EventContent/EventContent';
import EventDetails from 'views/EventDetails/EventDetails';

function Details() {
  return (
    <div className="event-page flex gap-4 w-screen h-screen bg-gradient-to-r from-[#D6025C] to-[#02D6FB] lg:py-4 lg:px-4">
      <EventDetails />
      <EventContent />
    </div>
  );
}

export default Details;
