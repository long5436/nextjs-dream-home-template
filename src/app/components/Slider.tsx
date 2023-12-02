'use client';
import Image from 'next/image';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const brands = [
  { image: '/images/brand-1.png', href: '' },
  { image: '/images/brand-2.png', href: '' },
  { image: '/images/brand-3.png', href: '' },
  { image: '/images/brand-4.png', href: '' },
  { image: '/images/brand-5.png', href: '' },
  { image: '/images/brand-6.png', href: '' },
  { image: '/images/brand-1.png', href: '' },
  { image: '/images/brand-2.png', href: '' },
  { image: '/images/brand-3.png', href: '' },
  { image: '/images/brand-4.png', href: '' },
  { image: '/images/brand-5.png', href: '' },
  { image: '/images/brand-6.png', href: '' },
];

function Slider() {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <h4 className="font-semibold text-base pb-4">
          Trusted by over 150+ major companies
        </h4>
        <Swiper
          loop={true}
          speed={6000}
          autoplay={{
            delay: 1000,
          }}
          breakpoints={{
            450: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            800: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            960: {
              slidesPerView: 5,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 50,
            },
          }}
          modules={[Autoplay]}
        >
          {brands.map((item, index) => (
            <SwiperSlide key={index}>
              <a href="#">
                <Image src={item.image} alt="" width="160" height="80" />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Slider;
