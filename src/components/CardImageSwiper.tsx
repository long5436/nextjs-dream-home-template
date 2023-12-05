'use client';

import Image from 'next/image';
import Link from 'next/link';
import { HiArrowSmallLeft, HiArrowSmallRight } from 'react-icons/hi2';
import { MdBookmarkBorder } from 'react-icons/md';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Parallax } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { CardData } from './pages/home/FeaturedProperties';

interface Props {
  data: CardData;
}

function CardImage({ data }: Props) {
  return (
    <Swiper
      loop={true}
      //   speed={6000}
      autoplay={{
        delay: 1000,
      }}
      // pagination={pagination}
      navigation={{
        prevEl: '.swiper-prev',
        nextEl: '.swiper-next',
      }}
      pagination={{
        clickable: true,
        renderBullet: function (index, className) {
          return (
            '<span class="card-featured-pagination ' +
            className +
            '">' +
            '</span>'
          );
        },
      }}
      modules={[Pagination, Navigation, Parallax]}
      className="z-10 relative"
    >
      <div
        className="parallax-bg absolute inset-0 flex"
        slot="container-start"
        data-swiper-parallax="-23%"
      >
        <div className="absolute top-0 right-0 w-[38px] h-[38px] pt-1 pr-1 border-t-[38px]  border-t-[rgb(255,245,224)] border-l-[38px] border-l-transparent translate-x-1 z-10">
          <MdBookmarkBorder
            size="16"
            className="text-primary absolute -top-9 right-2"
          />
        </div>

        <Image
          src="/images/plus.svg"
          alt=""
          height={60}
          width={60}
          className="m-auto z-10 opacity-0 group-hover:opacity-100 transition duration-300 delay-200"
        />

        <div className="swiper-prev absolute left-[30%] bottom-2 z-20 text-white cursor-pointer">
          <HiArrowSmallLeft size="19" />
        </div>
        <div className="swiper-next absolute right-[30%] bottom-2 z-20 text-white cursor-pointer">
          <HiArrowSmallRight size="19" />
        </div>
      </div>

      {data.images.map((item: string, index: number) => (
        <SwiperSlide key={index} className="overflow-hidden relative">
          <Link
            href="#"
            className="relative after:absolute after:inset-0 after:bg-black after:opacity-0 group-hover:after:opacity-40 after:transition after:duration-500"
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
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default CardImage;
