import { Seperator } from 'components';
import React, { useState, useEffect } from 'react';
import { IoLocationOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { DateTime } from 'luxon';

interface EventCardProps {
  data: {
    id: string;
    image?: string;
    title: string;
    performers: string[];
    location: string;
    date: string;
    avgPrice: string;
    maxPrice: string;
  };
}

function EventCard(props: EventCardProps) {
  const { id, image, title, performers, location, date, avgPrice, maxPrice } =
    props.data;
  const rand = parseInt(((Math.random() * 10 * 100) / 100).toFixed(0)) * 100;
  const url = `url('https://picsum.photos/${rand}')`;
  const jsDate = DateTime.fromISO(date);
  const parsedDate = `${jsDate.day}/${jsDate.month}/${jsDate.year}`;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/event/' + id);
  };
  return (
    <div
      className="event-card-wrapper bg-center rounded-lg shadow-md h-max cursor-pointer"
      style={{ backgroundImage: 'url(' + image || url + ')' }}
      onClick={handleClick}
    >
      <div className="event-card-container relative rounded-lg px-3 py-3 z-10 backdrop-blur-xl bg-[#fff] bg-opacity-60 h-full">
        <div className="event-image-container w-full h-[200px]">
          <img
            className="w-full h-full object-cover rounded-lg"
            src={image || url}
            alt="Event"
          />
        </div>
        <div className="event-details-container font-pppins pt-2">
          <h2 className="text-xl font-semibold leading-none truncate">
            {title}
          </h2>
          <p className="text-sm truncate pt-1">
            {performers.map((performer) => performer + ' ')}
          </p>
          <div className="event-location-container flex items-center gap-1 text-sm font-poppins pt-1">
            <IoLocationOutline />
            <p>{location}</p>
          </div>
        </div>
        <div className="seperate py-2">
          <Seperator direction="horizontal" size="100%" color="#00000033" />
        </div>
        <div className="event-price-and-date-container flex items-center justify-between font-poppins">
          <p>{parsedDate}</p>
          <p className="font-semibold text-lg">
            {avgPrice ? avgPrice + ' $' : 'Free'}
          </p>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
