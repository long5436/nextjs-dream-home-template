import Image from 'next/image';
import Link from 'next/link';
import SectionWrapper from './SectionWrapper';

function SearchGallery() {
  return (
    <SectionWrapper
      title="Search real estate by area"
      description="Find your dream apartment with our listing"
      noContainer
    >
      <div className="grid grid-cols-2 lg:grid-cols-4 ">
        {new Array(8).fill(0).map((item, index) => {
          return (
            <div className="relative" key={index}>
              <Image
                src={`/images/search-area-${index + 1}.jpg`}
                alt=""
                height={100}
                width={100}
                className="w-full h-auto"
              />
              <Link
                href=""
                className="absolute inset-0 flex group photo-gradient"
              >
                <Image
                  src="/images/plus.svg"
                  alt=""
                  height={60}
                  width={60}
                  className="m-auto opacity-0 group-hover:opacity-100 transition duration-300 delay-100 z-10"
                />
              </Link>
              <div className="text-white absolute bottom-4 left-4">
                <Link
                  href=""
                  className="text-lg font-bold hover:text-primary transition-colors duration-300 block pb-1"
                >
                  Califonia
                </Link>
                <p>1570 listing</p>
              </div>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}

export default SearchGallery;
