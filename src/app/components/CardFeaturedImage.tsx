'use client';

import Image from 'next/image';
import Link from 'next/link';
import { MdBookmarkBorder } from 'react-icons/md';
import 'swiper/css';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

interface Props {
  data: string[];
}

const pagination = {
  clickable: true,
  renderBullet: function (index: number, className: string, ...others) {
    console.log({ index, className, others });

    return /** HTML */ `
    <div>
    ${index + 1}
    </div>`;

    return '<span class="' + className + '">' + (index + 1) + '</span>';
  },
};

function CardFeaturedImage({ data }: Props) {
  return (
    <Swiper
      loop={true}
      //   speed={6000}
      autoplay={{
        delay: 1000,
      }}
      pagination={pagination}
      modules={[Pagination, Navigation]}
      className="my-swiper"
    >
      {data.map((item, index) => (
        <SwiperSlide
          key={index}
          className="overflow-hidden rounded-xl relative"
        >
          <Image
            src={item}
            alt={item}
            width={100}
            height={100}
            priority
            quality={100}
            className="w-full h-auto group-hover:scale-110  transition duration-300"
          />

          <Link
            href=""
            className="absolute inset-0 flex group-hover:bg-black/40 transition duration-300"
          >
            <Image
              src="/images/plus.svg"
              alt=""
              height={60}
              width={60}
              className="m-auto opacity-0 group-hover:opacity-100 transition duration-300 delay-100 z-10"
            />
          </Link>

          <div className="absolute top-0 right-0 w-[38px] h-[38px] pt-1 pr-1 border-t-[38px]  border-t-[rgb(255,245,224)] border-l-[38px] border-l-transparent translate-x-1">
            <MdBookmarkBorder
              size="16"
              className="text-primary absolute -top-9 right-2"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default CardFeaturedImage;
