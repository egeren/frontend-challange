import React, { useState, useEffect } from 'react';

function EventDetails() {
  return (
    <div className="event-filters-wrapper lg:relative absolute lg:flex bg-white xl:w-[350px] lg:w-[300px] w-[350px] h-full rounded-md z-30">
      <div className="event-filters-container w-full h-full flex flex-col px-4 py-4 overflow-y-scroll">
        <div className="event-filters-header">
          <h1 className="font-poppins font-semibold text-2xl">
            Search Filters
          </h1>
        </div>
        <div className="filters-container flex-1 flex flex-col gap-4 pt-5"></div>
      </div>
    </div>
  );
}

export default EventDetails;
