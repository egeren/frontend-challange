import axios from 'axios';
import { Button } from 'components';
import { useAppDispatch, useAppSelector } from 'hooks/storeHooks';
import React, { useState, useEffect } from 'react';
import { IoFilter, IoFunnelOutline, IoSwapVertical } from 'react-icons/io5';
import { uiActions } from 'redux/store';
import { getFilterQuery } from 'utils/helper';
import EventCard from 'views/EventCard';

function EventList() {
  const [events, setEvents] = useState<any[]>([]);
  const filtersData = useAppSelector((state) => state.filtersData);
  const filter = getFilterQuery(filtersData);
  const dispatch = useAppDispatch();
  useEffect(() => {
    axios
      .get('https://api.seatgeek.com/2/events', { params: filter })
      .then((res) => {
        setEvents(res.data.events);
      });
  }, [filtersData]);

  const handleFiltersClick = () => {
    dispatch(uiActions.toggleFilters(true));
  };
  return (
    <div className="event-list-wrapper flex-1 h-full bg-white lg:rounded-md px-4 py-4 overflow-scroll">
      <div className="events-list-header flex xs:flex-row flex-col justify-between pb-4">
        <h2 className="flex-1 font-poppins font-semibold text-2xl">
          211 Events Found
        </h2>
        <div className="flex gap-2 sm:pt-0 pt-3">
          <Button
            icon={IoSwapVertical}
            text="Sort by"
            className="bg-transparent hover:bg-gray-100 active:bg-gray-200 text-black border border-black rounded-3xl py-2 px-3"
          />
          <Button
            icon={IoFunnelOutline}
            onClick={handleFiltersClick}
            text="Filters"
            className="lg:hidden bg-transparent hover:bg-gray-100 active:bg-gray-200 text-black border border-black rounded-3xl py-2 px-3"
          />
        </div>
      </div>
      <div className="events-container grid 2xl:grid-cols-5 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 xs:grid-cols-2 grid-cols-1 h-max gap-4">
        {events.map((event, index) => {
          const data = {
            id: event.id,
            image: event.performers[0].image,
            title: event.short_title,
            performers: event.performers.map(
              (performer: any) => performer.name
            ),
            location: event.venue.display_location,
            date: event.datetime_utc,
            avgPrice: event.stats.average_price,
            maxPrice: event.stats.highest_price,
          };
          return <EventCard key={index} data={data} />;
        })}
      </div>
    </div>
  );
}

export default EventList;
