'use client';

import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import CardFeatured from './CardFeatured';
import SectionWrapper from './SectionWrapper';

const cards = [
  {
    name: 'Gorgeous Apartment Building',
    address: '58 Hullbrook Road, Billesley, B13 0LA',
    price: '7,500',
    beds: 4,
    baths: 2,
    sqft: 1150,
    year: 3,
    sale: false,
    featured: true,
    images: [
      '/images/featured-1.jpg',
      '/images/featured-3.jpg',
      '/images/featured-35.jpg',
      '/images/featured-35.jpg',
      '/images/featured-43.jpg',
    ],
    authorImage: '/images/author-1.jpg',
  },
  {
    name: 'Gorgeous Apartment Building',
    address: '58 Hullbrook Road, Billesley, B13 0LA',
    price: '7,500',
    beds: 4,
    baths: 2,
    sqft: 1150,
    year: 3,
    sale: true,
    featured: true,
    images: [
      '/images/featured-3.jpg',
      '/images/featured-1.jpg',
      '/images/featured-35.jpg',
      '/images/featured-35.jpg',
      '/images/featured-43.jpg',
    ],
    authorImage: '/images/author-2.jpg',
  },
  {
    name: 'Gorgeous Apartment Building',
    address: '58 Hullbrook Road, Billesley, B13 0LA',
    price: '7,500',
    beds: 4,
    baths: 2,
    sqft: 1150,
    year: 3,
    sale: false,
    featured: false,
    images: [
      '/images/featured-43.jpg',
      '/images/featured-1.jpg',
      '/images/featured-3.jpg',
      '/images/featured-3.jpg',
      '/images/featured-35.jpg',
    ],
    authorImage: '/images/author-3.jpg',
  },
  {
    name: 'Gorgeous Apartment Building',
    address: '58 Hullbrook Road, Billesley, B13 0LA',
    price: '7,500',
    beds: 4,
    baths: 2,
    sqft: 1150,
    year: 3,
    sale: false,
    featured: true,
    images: [
      '/images/featured-35.jpg',
      '/images/featured-1.jpg',
      '/images/featured-3.jpg',
      '/images/featured-3.jpg',
      '/images/featured-43.jpg',
    ],
    authorImage: '/images/author-4.jpg',
  },
  {
    name: 'Gorgeous Apartment Building',
    address: '58 Hullbrook Road, Billesley, B13 0LA',
    price: '7,500',
    beds: 4,
    baths: 2,
    sqft: 1150,
    year: 3,
    sale: false,
    featured: true,
    images: [
      '/images/featured-1.jpg',
      '/images/featured-3.jpg',
      '/images/featured-35.jpg',
      '/images/featured-35.jpg',
      '/images/featured-43.jpg',
    ],
    authorImage: '/images/author-1.jpg',
  },
  {
    name: 'Gorgeous Apartment Building',
    address: '58 Hullbrook Road, Billesley, B13 0LA',
    price: '7,500',
    beds: 4,
    baths: 2,
    sqft: 1150,
    year: 3,
    sale: true,
    featured: true,
    images: [
      '/images/featured-3.jpg',
      '/images/featured-1.jpg',
      '/images/featured-35.jpg',
      '/images/featured-35.jpg',
      '/images/featured-43.jpg',
    ],
    authorImage: '/images/author-2.jpg',
  },
  {
    name: 'Gorgeous Apartment Building',
    address: '58 Hullbrook Road, Billesley, B13 0LA',
    price: '7,500',
    beds: 4,
    baths: 2,
    sqft: 1150,
    year: 3,
    sale: false,
    featured: false,
    images: [
      '/images/featured-43.jpg',
      '/images/featured-1.jpg',
      '/images/featured-3.jpg',
      '/images/featured-3.jpg',
      '/images/featured-35.jpg',
    ],
    authorImage: '/images/author-3.jpg',
  },
  {
    name: 'Gorgeous Apartment Building',
    address: '58 Hullbrook Road, Billesley, B13 0LA',
    price: '7,500',
    beds: 4,
    baths: 2,
    sqft: 1150,
    year: 3,
    sale: false,
    featured: true,
    images: [
      '/images/featured-35.jpg',
      '/images/featured-1.jpg',
      '/images/featured-3.jpg',
      '/images/featured-3.jpg',
      '/images/featured-43.jpg',
    ],
    authorImage: '/images/author-4.jpg',
  },
];

function PropertiesForRent() {
  return (
    <SectionWrapper
      title="Properties for rent"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel lobortis justo"
      container2xl
      className="bg-[url('/images/bg-rent.jpg')]"
    >
      <Swiper
        autoplay={{
          delay: 5000,
        }}
        breakpoints={{
          500: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          960: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        modules={[Autoplay, Pagination]}
      >
        {cards.map((item, index) => {
          return (
            <SwiperSlide key={index} className="p-2">
              <CardFeatured data={item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </SectionWrapper>
  );
}

export default PropertiesForRent;
