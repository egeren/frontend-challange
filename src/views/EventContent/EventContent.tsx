import React, { useState, useEffect } from 'react';
import EventDetails from 'views/EventDetails';
import EventGallery from 'views/EventGallery';

function EventContent() {
  return (
    <div className="event-content-wrapper flex-1 h-full bg-white lg:rounded-md overflow-scroll z-0">
      <div className="event-content-container">
        <div className="event-splash-image relative flex items-end w-full h-96 bg-gradient-to-t from-[#00000088] to-[#ffffff22]">
          <img
            src="https://picsum.photos/1000"
            alt="Event Splash"
            className="absolute w-full h-full object-cover object-center z-[-1]"
          />
          <div className="event-titles-container px-4 py-4 text-white">
            <h1 className="font-bebas text-6xl tracking-widest">
              GAMES OF WINDMILL
            </h1>
            <p className="font-poppins text-lg">performing by Jane Smith</p>
          </div>
        </div>
        <div className="event-description-content px-4 py-4">
          <div className="event-description">
            <p className="font-poppins text-base">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam
              debitis, ex eum saepe blanditiis, accusantium repellendus nemo
              commodi nihil minus ad, necessitatibus modi fugiat quod libero
              suscipit ab animi aut. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Alias, nihil earum iusto excepturi iste animi
              veniam exercitationem explicabo doloremque? Officiis maxime
              placeat quas illum tempora laborum unde harum saepe autem.
            </p>
          </div>
          <div className="gallery-container pt-10">
            <div className="gallery-header">
              <h2 className="font-poppins font-semibold text-2xl">Gallery</h2>
            </div>
            <div className="gallery-content flex pt-4">
              <EventGallery />
            </div>
          </div>
          <div className="mobile-details flex pt-4 lg:hidden">
            <EventDetails isMobile />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventContent;
