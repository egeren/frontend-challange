import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import EventContent from 'views/EventContent/EventContent';
import EventDetails from 'views/EventDetails/EventDetails';

function Details() {
  const [eventData, setEventData] = useState<any>({});
  const params = useParams();
  useEffect(() => {
    axios.get('https://api.seatgeek.com/2/events/' + params.id).then((res) => {
      console.log(res);
      setEventData({
        id: params.id,
        image: res.data.performers[0].image,
        title: res.data.short_title,
        performers: res.data.performers.map(
          (performer: any) => performer.name + ' '
        ),
        location: res.data.venue.display_location,
        date: res.data.datetime_utc,
        avgPrice: res.data.stats.average_price,
        maxPrice: res.data.stats.highest_price,
        venue: {
          id: res.data.venue.id,
          name: res.data.venue.name,
        },
      });
    });
  }, []);
  return (
    <div className="event-page flex gap-4 w-screen h-screen bg-gradient-to-r from-[#D6025C] to-[#02D6FB] lg:py-4 lg:px-4">
      <EventDetails data={eventData} />
      <EventContent data={eventData} />
    </div>
  );
}

export default Details;
