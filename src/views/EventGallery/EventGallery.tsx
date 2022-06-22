import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function EventGallery() {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      slidesPerGroup={3}
      loop={true}
      loopFillGroupWithBlank={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="flex w-full h-60"
    >
      <SwiperSlide>
        <img
          src="https://picsum.photos/400"
          alt="Event Splash"
          className="absolute w-full h-full object-cover object-center z-[-1]"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://picsum.photos/400"
          alt="Event Splash"
          className="absolute w-full h-full object-cover object-center z-[-1]"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://picsum.photos/400"
          alt="Event Splash"
          className="absolute w-full h-full object-cover object-center z-[-1]"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://picsum.photos/400"
          alt="Event Splash"
          className="absolute w-full h-full object-cover object-center z-[-1]"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://picsum.photos/400"
          alt="Event Splash"
          className="absolute w-full h-full object-cover object-center z-[-1]"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://picsum.photos/400"
          alt="Event Splash"
          className="absolute w-full h-full object-cover object-center z-[-1]"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://picsum.photos/400"
          alt="Event Splash"
          className="absolute w-full h-full object-cover object-center z-[-1]"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://picsum.photos/400"
          alt="Event Splash"
          className="absolute w-full h-full object-cover object-center z-[-1]"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://picsum.photos/400"
          alt="Event Splash"
          className="absolute w-full h-full object-cover object-center z-[-1]"
        />
      </SwiperSlide>
    </Swiper>
  );
}

export default EventGallery;
