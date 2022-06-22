import { Button, Number, Select } from 'components';
import React, { useState, useEffect } from 'react';
import {
  IoBusinessOutline,
  IoCalendarNumberOutline,
  IoLocationOutline,
  IoPeopleOutline,
  IoPerson,
  IoTicketOutline,
} from 'react-icons/io5';

const dummyData = [
  {
    id: '0',
    value: 'Standart Ticket',
    icon: IoTicketOutline,
  },
  {
    id: '1',
    value: 'VIP Ticket',
    icon: IoTicketOutline,
  },
];

interface EventDetailsProps {
  isMobile?: boolean;
}

function EventDetails(props: EventDetailsProps) {
  const { isMobile } = props;
  const isMobileClass = isMobile ? '' : 'absolute';
  return (
    <div
      className={
        'event-filters-wrapper lg:relative left-0 flex bg-white xl:w-[350px] lg:w-[300px] w-full h-full rounded-md ' +
        isMobileClass
      }
    >
      <div className="event-filters-container w-full h-full flex flex-col px-4 py-4 overflow-y-scroll">
        <div className="event-filters-header">
          <h1 className="font-poppins font-semibold text-2xl">Event Details</h1>
        </div>
        <div className="details-container flex-1 flex flex-col gap-6 pt-5 font-poppins">
          <div className="detail-item flex flex-col gap-2">
            <div className="titles flex items-center gap-1">
              <IoLocationOutline className="text-3xl" />
              <p className="font-medium text-base">Event Location</p>
            </div>
            <div className="map-placeholder w-full h-[150px] bg-red-300 rounded-md" />
            <p className="text-sm">Çiğli, İzmir</p>
          </div>
          <div className="detail-item flex flex-col gap-2">
            <div className="titles flex items-center gap-1">
              <IoCalendarNumberOutline className="text-3xl" />
              <p className="font-medium text-base">Event Time</p>
            </div>
            <p className="text-sm">12 Temmuz 2022 09:00</p>
          </div>
          <div className="detail-item flex flex-col gap-2">
            <div className="titles flex items-center gap-1">
              <IoPeopleOutline className="text-3xl" />
              <p className="font-medium text-base">Performer(s)</p>
            </div>
            <p className="text-sm">Jane Smith</p>
          </div>
          <div className="detail-item flex flex-col gap-2 pb-4">
            <div className="titles flex items-center gap-1">
              <IoBusinessOutline className="text-3xl" />
              <p className="font-medium text-base">Venue</p>
            </div>
            <p className="text-sm">Jane Smith</p>
          </div>
        </div>
        <div className="tickets-container flex gap-2">
          <Select
            icon={IoTicketOutline}
            placeholder="Standart Ticket"
            direction="top"
            data={dummyData}
          />
          <Number containerClassName="w-20" />
        </div>
        <div className="buttons-container flex gap-4 pt-4">
          <Button
            text="Go Back"
            className="border border-black bg-transparent text-black hover:bg-gray-50 active:bg-gray-100 flex-1"
          />
          <Button text="Buy Ticket" className="flex-1" />
        </div>
      </div>
    </div>
  );
}

export default EventDetails;
