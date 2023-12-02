'use client';

import Image from 'next/image';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

interface Props {
  data: string[];
}

function CardFeaturedImage({ data }: Props) {
  return (
    <Swiper
      loop={true}
      //   speed={6000}
      autoplay={{
        delay: 1000,
      }}
    >
      {data.map((item, index) => (
        <SwiperSlide key={index}>
          <Image
            src={item}
            alt={item}
            width={100}
            height={100}
            priority
            quality={100}
            className="w-full h-auto hover:scale-110 transition duration-300 rounded-xl overflow-hidden"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default CardFeaturedImage;
