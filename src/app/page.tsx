'use client';

import { Tooltip as ReactTooltip } from 'react-tooltip';
import BrandSwiper from '~/components/BrandSwiper';
import Card from '~/components/Card';
import CardAgent from '~/components/CardAgent';
import CardBlog from '~/components/CardBlog';
import TestimonialItem from '~/components/CardComment';
import CustomSwiper from '~/components/CustomSwpier';
import SectionWrapper from '~/components/SectionWrapper';
import ContactUs from '~/components/pages/home/ContactUs';
import SearchGallery from '~/components/pages/home/SearchGallery';
import Slider from '~/components/pages/home/Slider';
import agentsData from '~/jsons/agents.json';
import blogsData from '~/jsons/blog.json';
import featuredForPropertiesData from '~/jsons/featuredProperties.json';
import rentData from '~/jsons/propertiesForRent.json';
import PropertiesForSaleData from '~/jsons/propertiesForSale.json';
import tags from '~/jsons/tag.json';

const breakpointsXL = {
  500: {
    slidesPerView: 1,
    spaceBetween: 10,
  },
  768: {
    slidesPerView: 2,
    spaceBetween: 10,
  },
  960: {
    slidesPerView: 3,
    spaceBetween: 10,
  },
};

const breakpoints2XL = {
  ...breakpointsXL,
  1280: {
    slidesPerView: 4,
    spaceBetween: 20,
  },
};

export default function Home() {
  return (
    <main>
      <Slider />
      <BrandSwiper />

      {/* featured for properties*/}

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
          className="px-0 lg:px-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
      xl:grid-cols-4 2xl:grid-cols-4 gap-7"
        >
          {featuredForPropertiesData.map((item, index) => {
            return <Card data={item} key={index} />;
          })}
        </div>
      </SectionWrapper>

      <SearchGallery />
      {/* Properties for sale */}
      <SectionWrapper
        title="Properties for sale"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel lobortis justo"
      >
        <CustomSwiper
          breakpoints={breakpointsXL}
          data={PropertiesForSaleData}
          child={(item) => <Card data={item} />}
        />
      </SectionWrapper>
      {/* rent */}
      <SectionWrapper
        title="Properties for rent"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel lobortis justo"
        container2xl
        className="bg-[url('/images/bg-rent.jpg')]"
      >
        <CustomSwiper
          breakpoints={breakpoints2XL}
          data={rentData}
          child={(item) => <Card data={item} />}
          classNameSlide="p-2"
        />
      </SectionWrapper>
      {/* meet the agent */}
      <SectionWrapper
        title="Meet the agents"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel lobortis justo"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 pt-4">
          {agentsData.map((item, index) => (
            <CardAgent data={item} key={index} />
          ))}
        </div>

        <div className="text-center text-[0.85rem] pt-5">
          <span className="opacity-70">
            Become an agent and get the commission you deserve.
          </span>
          <a href="#" className="text-primary font-medium underline pl-1">
            Contact us
          </a>
        </div>
      </SectionWrapper>

      {/* conntact us */}
      <ContactUs />
      {/* blog */}
      <SectionWrapper
        title="Form our blog"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed
          tristique metus proin id lorem odio"
        className="bg-gray-500/5"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 pt-4">
          {blogsData.map((item, index) => (
            <CardBlog data={item} key={index} />
          ))}
        </div>
      </SectionWrapper>
      {/* comment */}
      <SectionWrapper
        title="From our happy customers"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed
          tristique metus proin id lorem odio"
      >
        <CustomSwiper
          breakpoints={breakpointsXL}
          data={[{}, {}, {}, {}, {}]}
          child={(item) => <TestimonialItem data={item} />}
        />

        <div className="text-center pt-6">
          <div className="text-base border border-black/5 inline-block py-2 px-4 rounded-full">
            Become our next customer, and find your dream home
            <a
              href="tel:3145550123"
              className="text-primary font-semibold pl-2"
            >
              Contact us: 314-555-0123
            </a>
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
}
