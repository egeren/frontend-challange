import { Seperator } from 'components';
import React, { useState, useEffect } from 'react';
import { IoLocationOutline } from 'react-icons/io5';

function EventCard() {
  const rand = parseInt(((Math.random() * 10 * 100) / 100).toFixed(0)) * 100;
  const url = `url('https://picsum.photos/${rand}')`;
  return (
    <div
      className="event-card-wrapper bg-center rounded-lg shadow-md h-max"
      style={{ backgroundImage: url }}
    >
      <div className="event-card-container relative rounded-lg px-3 py-3 z-10 backdrop-blur-xl bg-[#fff] bg-opacity-60 h-full">
        <div className="event-image-container w-full h-[200px]">
          <img
            className="w-full h-full object-cover rounded-lg"
            src={'https://picsum.photos/' + rand}
            alt="Random Image"
          />
        </div>
        <div className="event-details-container font-pppins pt-2">
          <h2 className="text-xl font-semibold leading-none">Event Title</h2>
          <p className="text-sm">Jane Smith</p>
          <div className="event-location-container flex items-center gap-1 text-sm font-poppins pt-1">
            <IoLocationOutline />
            <p>İzmir, Çiğli</p>
          </div>
        </div>
        <div className="seperate py-2">
          <Seperator direction="horizontal" size="100%" color="#00000033" />
        </div>
        <div className="event-price-and-date-container flex items-center justify-between font-poppins">
          <p>15 Tem 2022</p>
          <p className="font-semibold text-lg">145 $</p>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
