'use client';

import { Tooltip as ReactTooltip } from 'react-tooltip';
import CardFeatured from './CardFeatured';
import SectionWrapper from './SectionWrapper';

const tags = [
  'Houses',
  'Smart home',
  'Apartments',
  'Office',
  'Villa',
  'Bungalow',
];

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

export type Card = (typeof cards)[0];

function FeaturedProperties() {
  return (
    <SectionWrapper
      title="Featured properties"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel
            lobortis justo"
      container2xl
    >
      <ul className="flex flex-row gap-3 justify-center flex-wrap pb-4 ">
        {tags.map((item, index) => (
          <li
            key={index}
            className="block py-1 px-3 cursor-pointer hover:text-primary hover:font-bold card-shadow"
            data-tooltip-id="tag-tooltip"
          >
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <ReactTooltip
        id="tag-tooltip"
        place="top"
        content="6 Property"
        style={{
          backgroundColor: '#fff',
          color: 'rgb(var(--color-text-primary))',
          fontWeight: '600',
          boxShadow: '0px 4px 26px 0px rgba(66, 71, 76, 0.0784313725)',
          borderRadius: '10px',
        }}
      />
      <div
        className="px-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
      xl:grid-cols-4 gap-7"
      >
        {cards.map((item, index) => {
          return <CardFeatured data={item} key={index} />;
        })}
      </div>
    </SectionWrapper>
  );
}

export default FeaturedProperties;
