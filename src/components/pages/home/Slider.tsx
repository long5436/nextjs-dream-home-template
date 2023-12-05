'use client';

import clsx from 'clsx';
import Image from 'next/image';
import { useState } from 'react';
import { BsArrowDown } from 'react-icons/bs';
import { GrSearch } from 'react-icons/gr';
import { VscSettings } from 'react-icons/vsc';
import CustomInput from '~/components/CustomInput';
import PrimaryButton from '~/components/PrimaryButton';
import Wrapper from '~/components/Wrapper';

const optionType = [
  {
    name: 'Property type',
    value: '0',
  },
  {
    name: 'Bungalow',
    value: '1',
  },
  {
    name: 'Apartment',
    value: '2',
  },
  {
    name: 'House',
    value: '3',
  },
  {
    name: 'Smart House',
    value: '4',
  },
  {
    name: 'Office',
    value: '5',
  },
  {
    name: 'Villa',
    value: '6',
  },
];

const optionLocation = [
  {
    name: 'Location',
    value: '0',
  },
  {
    name: 'Japan',
    value: '1',
  },
  {
    name: 'America',
    value: '2',
  },
  {
    name: 'Angland',
    value: '3',
  },
  {
    name: 'Belgium',
    value: '4',
  },
  {
    name: 'France',
    value: '5',
  },
  {
    name: 'Vietnam',
    value: '6',
  },
];

function Banner() {
  const [menuTab, setMenuTab] = useState<number>(0);

  return (
    <section className="relative">
      <Image
        src="/images/bg-slider-1.png"
        alt=""
        width={100}
        height={100}
        className="w-full h-full object-cover absolute top-0 left-0"
      />
      <div className="relative top-0 left-0 right-0">
        <Wrapper container2xl>
          <div className="flex">
            <div className="w-full lg:w-[44%] xl:w-[51.5%]">
              <h1 className="font-bold text-6xl leading-tight pb-[22px]">
                We will find a perfect home for you
              </h1>
              <p>
                Find a variety of properties that suit you very easily, forget
                all difficulties in finding a residence for you
              </p>
              <div className="relative md:w-[200%] pt-16">
                <ul className="flex items-center cursor-pointer justify-center md:justify-start">
                  <li
                    className={clsx(
                      'py-2 px-10 font-semibold text-base hover:bg-primary hover:text-white transition duration-200 rounded-tl-xl',
                      {
                        'bg-[#FEF4DF]': menuTab !== 0,
                        'text-white bg-primary': menuTab === 0,
                      }
                    )}
                    onClick={() => setMenuTab(0)}
                  >
                    Rent
                  </li>

                  <li
                    className={clsx(
                      'py-2 px-10 font-semibold text-base hover:bg-primary hover:text-white transition duration-200 rounded-tr-xl',
                      {
                        'bg-[#FEF4DF]': menuTab !== 1,
                        'text-white bg-primary': menuTab === 1,
                      }
                    )}
                    onClick={() => setMenuTab(1)}
                  >
                    Buy
                  </li>
                </ul>

                <div className="block md:inline-flex gap-3 bg-white p-4 xl:p-5 rounded-lg">
                  <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
                    <div className="">
                      <CustomInput
                        placeholder="Type keyword..."
                        name="keyword"
                      />
                    </div>
                    <div>
                      <CustomInput
                        name="type"
                        type="select"
                        dataOptions={optionType}
                        selectDefault="0"
                      />
                    </div>
                    <div>
                      <CustomInput
                        name="location"
                        type="select"
                        dataOptions={optionLocation}
                        selectDefault="0"
                      />
                    </div>
                  </div>
                  <div className="flex gap-3 justify-between pt-3 md:pt-0">
                    <div>
                      <button className="bg-[#FEF4DF] text-primary font-bold py-4 px-4 rounded-xl flex items-center hover:bg-primary hover:text-white transition-all duration-300">
                        <VscSettings size={20} />
                      </button>
                    </div>
                    <div>
                      <PrimaryButton
                        text="Search Now"
                        icon={GrSearch}
                        type="basic"
                        sizeIcon={18}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex gap-20 pt-10 justify-between md:justify-start">
                  <div>
                    <p className="font-bold text-3xl pb-4">1500+</p>
                    <p className="font-bold text-sm opacity-50">
                      Property ready
                    </p>
                  </div>
                  <div>
                    <p className="font-bold text-3xl pb-4">700</p>
                    <p className="font-bold text-sm opacity-50">
                      Happy customer
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[146px] h-[146px] items-center bg-[#FFF5E0] rounded-full animate-rotate hidden lg:flex absolute top-20 left-1/2">
              <svg
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
                fill="transparent"
                className="p-2"
              >
                <path
                  id="circlePath"
                  d="
      M 10, 50
      a 40,40 0 1,1 80,0
      40,40 0 1,1 -80,0
    "
                />
                <text>
                  <textPath
                    href="#circlePath"
                    fill="#000"
                    textLength={290}
                    className="font-bold text-sm"
                  >
                    ESTETA FIND YOUR DREAMS REAL
                  </textPath>
                </text>
              </svg>
              <BsArrowDown
                size="35"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              />
            </div>
            <div className="hidden lg:block flex-1">
              <Image
                src="/images/slider-1.png"
                alt=""
                width={100}
                height={100}
                className="w-full h-auto"
              />
            </div>
          </div>
        </Wrapper>
      </div>
    </section>
  );
}

export default Banner;
