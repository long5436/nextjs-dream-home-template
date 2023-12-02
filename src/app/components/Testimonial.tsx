'use client';

import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import SectionWrapper from './SectionWrapper';
import TestimonialItem from './TestimonialItem';

const data = [{}, {}, {}, {}, {}];

function Testimonial() {
  return (
    <SectionWrapper
      title="From our happy customers"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed
          tristique metus proin id lorem odio"
    >
      <Swiper
        loop={true}
        autoplay={{
          delay: 5000,
        }}
        breakpoints={{
          500: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          960: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
        modules={[Autoplay]}
      >
        {data.map((item, index) => (
          // I don't know why when I put SwiperSlide inside the TestimonialItem component, it doesn't work
          <SwiperSlide key={index}>
            <TestimonialItem data={item} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="text-center pt-6">
        <div className="text-base border border-black/5 inline-block py-2 px-4 rounded-full">
          Become our next customer, and find your dream home
          <a href="tel:3145550123" className="text-primary font-semibold pl-2">
            Contact us: 314-555-0123
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default Testimonial;
