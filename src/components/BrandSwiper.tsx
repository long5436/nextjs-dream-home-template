'use client';
import Image from 'next/image';
import 'swiper/css';
import brands from '~/jsons/brands.json';
import CustomSwiper from './CustomSwpier';
import Wrapper from './Wrapper';

function Slider() {
  return (
    <section className="pt-20">
      <Wrapper noPaddingY>
        <h4 className="font-semibold text-base pb-4">
          Trusted by over 150+ major companies
        </h4>

        <CustomSwiper
          speed={9000}
          autoplay={{
            delay: 1000,
          }}
          breakpoints={{
            450: {
              slidesPerView: 3,
              spaceBetween: 20,
            },

            768: {
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
          data={brands}
          child={(item) => (
            <a href="#">
              <Image src={item.image} alt="" width="160" height="80" />
            </a>
          )}
        />
      </Wrapper>
    </section>
  );
}

export default Slider;
