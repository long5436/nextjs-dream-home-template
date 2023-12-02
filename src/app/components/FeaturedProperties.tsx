import CardFeatured from './CardFeatured';

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
      '/images/featured-43.jpg',
    ],
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
      '/images/featured-1.jpg',
      '/images/featured-3.jpg',
      '/images/featured-35.jpg',
      '/images/featured-43.jpg',
    ],
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
      '/images/featured-1.jpg',
      '/images/featured-3.jpg',
      '/images/featured-35.jpg',
      '/images/featured-43.jpg',
    ],
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
      '/images/featured-43.jpg',
    ],
  },
];

export type Card = (typeof cards)[0];

function FeaturedProperties() {
  return (
    <section>
      <div className="container mx-auto text-center">
        <div className="pb-4">
          <h2 className="font-bold text-5xl pb-4">Featured properties</h2>
          <p className="opacity-50 pb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel
            lobortis justo
          </p>
          <ul className="flex flex-row gap-3 justify-center">
            {tags.map((item, index) => (
              <li
                key={index}
                className="block py-1 px-3 cursor-pointer hover:text-primary hover:font-bold transition duration-300 opacity-80 feature-tag"
              >
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div
        className="px-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
      xl:grid-cols-4 gap-7"
      >
        {cards.map((item, index) => {
          return <CardFeatured data={item} key={index} />;
        })}
      </div>
    </section>
  );
}

export default FeaturedProperties;
