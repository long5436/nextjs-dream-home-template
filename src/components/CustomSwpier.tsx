import { ReactNode } from 'react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

interface Props {
  loop?: boolean;
  data: any[];
  breakpoints?: {
    [point: number]: { slidesPerView: number; spaceBetween: number };
  };
  child: (item: any) => ReactNode;
  classNameSlide?: string;
}

function CustomSwiper({
  loop = true,
  data,
  child,
  breakpoints,
  classNameSlide,
}: Props) {
  return (
    <Swiper
      loop={loop}
      autoplay={{
        delay: 5000,
      }}
      breakpoints={breakpoints}
      modules={[Autoplay]}
    >
      {data.map((item, index) => {
        return (
          <SwiperSlide key={index} className={classNameSlide}>
            {child(item)}
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default CustomSwiper;
