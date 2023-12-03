'use client';

import clsx from 'clsx';
import { Mulish } from 'next/font/google';
import Image from 'next/image';
import { MouseEventHandler, useState } from 'react';
import { BsChevronDown } from 'react-icons/bs';
import PrimaryButton from './PrimaryButton';

const mulush = Mulish({
  weight: ['800'],
  subsets: ['latin'],
});
const IconSend = ({ ...props }) => {
  return <img src="/images/contact-send.svg" alt="" {...props} />;
};

const properties = ['Choose', 'Home', 'Apartment', 'Rent'];

function ContactUs() {
  const [select, setSelect] = useState<string>(properties[0]);
  const [selectOpen, setSelectOpen] = useState<boolean>(false);

  const handleSelect = (e: MouseEventHandler) => {
    const element = (e as any).target;
    if (element.nodeName === 'LI') {
      setSelect(element.textContent);
    }

    setSelectOpen(!selectOpen);
  };

  return (
    <section className="container mx-auto bg-[url('/images/bg-contact.png')] pb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 py-6">
        <div className="relative overflow-hidden">
          <Image
            src="/images/mark-contact.png"
            alt=""
            height={270}
            width={196}
            className="absolute -right-11 bottom-20 animate-image-mark"
          />
          <h2 className="font-bold text-5xl">
            We provide the most suitable and quality real estate.
          </h2>
          <p className="opacity-70 py-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed
            tristique metus proin id lorem odio
          </p>
          <div className="flex flex-col gap-8 pt-8">
            <div className="flex items-center gap-16">
              <div className="relative after:absolute after:-right-8 after:-bottom-0 after:w-[1px] after:h-12 after:rotate-[21deg] after:bg-black/20">
                <Image
                  src="/images/contact-maps.svg"
                  alt=""
                  height={50}
                  width={50}
                />
              </div>
              <div className="flex-1">
                <p className="font-bold opacity-50">Office address</p>
                <p className="text-base">
                  2715 Ash Dr. San Jose, South Dakota 83475
                </p>
              </div>
            </div>
            <div className="flex items-center gap-16">
              <div className="relative after:absolute after:-right-8 after:-bottom-0 after:w-[1px] after:h-12 after:rotate-[21deg] after:bg-black/20">
                <Image
                  src="/images/contact-message.svg"
                  alt=""
                  height={50}
                  width={50}
                />
              </div>
              <div className="flex-1">
                <p className="font-bold opacity-50">Request a call back</p>
                <a
                  href="tel:+"
                  className={clsx(
                    'text-primary text-3xl font-bold',
                    mulush.className
                  )}
                >
                  314-555-0123
                </a>
              </div>
            </div>
            <div className="flex items-center gap-16">
              <div className="relative after:absolute after:-right-8 after:-bottom-0 after:w-[1px] after:h-12 after:rotate-[21deg] after:bg-black/20">
                <Image
                  src="/images/contact-email-us.svg"
                  alt=""
                  height={50}
                  width={50}
                />
              </div>
              <div className="flex-1">
                <p className="font-bold opacity-50">Email us</p>
                <a href="mailto:" className="text-base text-primary">
                  hellosupport@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="card-shadow p-7">
          <div className="flex justify-between gap-2 py-3 items-center">
            <div>
              <h3 className="text-3xl font-bold pb-2">Contact us</h3>
              <p className="opacity-60">
                We will respond as soon as we receive your message.
              </p>
            </div>
            <div>
              <Image src="/images/chat.svg" alt="" height={40} width={40} />
            </div>
          </div>
          <form action="">
            <div className="pb-6">
              <label htmlFor="" className="font-bold">
                Your name
              </label>

              <div className="relative pt-2">
                <Image
                  src="/images/contact-name.svg"
                  alt=""
                  height={18}
                  width={18}
                  className="absolute bottom-4 left-4"
                />
                <input
                  type="text"
                  placeholder="Your name"
                  className="block border py-3 pr-4 pl-11 rounded-lg w-full outline-none focus:border-primary transition duration-300"
                />
              </div>
            </div>
            <div className="flex gap-5 pb-6">
              <div>
                <label htmlFor="" className="font-bold">
                  Email
                </label>

                <div className="relative pt-2">
                  <Image
                    src="/images/contact-email.svg"
                    alt=""
                    height={18}
                    width={18}
                    className="absolute bottom-4 left-4"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="block border py-3 pr-4 pl-11 rounded-lg w-full outline-none focus:border-primary transition duration-300"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="" className="font-bold">
                  Phone
                </label>

                <div className="relative pt-2">
                  <Image
                    src="/images/contact-phone.svg"
                    alt=""
                    height={18}
                    width={18}
                    className="absolute bottom-4 left-4"
                  />
                  <input
                    type="text"
                    placeholder="Phone"
                    className="block border py-3 pr-4 pl-11 rounded-lg w-full outline-none focus:border-primary transition duration-300"
                  />
                </div>
              </div>
            </div>
            <div className="pb-6">
              <label htmlFor="" className="font-bold">
                Property type
              </label>

              <div
                className="relative pt-2 cursor-pointer"
                onClick={handleSelect}
              >
                <div
                  placeholder="Your message"
                  className="block border py-3 pr-4 pl-11 rounded-lg w-full outline-none focus:border-primary transition duration-300"
                >
                  {select}
                </div>
                <Image
                  src="/images/contact-choose.svg"
                  alt=""
                  height={18}
                  width={18}
                  className="absolute bottom-4 left-4"
                />
                <BsChevronDown
                  className={clsx(
                    'absolute right-5 bottom-4 transition-transform duration-300',
                    {
                      'rotate-180': selectOpen,
                    }
                  )}
                />
                <ul
                  className={clsx(
                    'absolute top-38 rounded-lg bg-white z-10 w-full border overflow-hidden transition',
                    {
                      'h-0 opacity-0': !selectOpen,
                    }
                  )}
                >
                  {properties.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className={clsx('px-4 py-2 hover:bg-black/5', {
                          'text-primary font-bold': item === select,
                        })}
                      >
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="pb-6">
              <label htmlFor="" className="font-bold">
                Message
              </label>

              <div className="relative pt-2">
                <textarea
                  rows={4}
                  placeholder="Your message"
                  className="block border py-3 px-4 rounded-lg w-full outline-none focus:border-primary transition duration-300"
                />
              </div>
            </div>
            <div className="inline-block">
              <PrimaryButton
                icon={IconSend}
                text="Send request"
                className="px-7"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
