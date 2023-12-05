'use client';

import clsx from 'clsx';
import { Mulish } from 'next/font/google';
import Image from 'next/image';
import CustomInput from '../../CustomInput';
import PrimaryButton from '../../PrimaryButton';
import Wrapper from '../../Wrapper';

const mulush = Mulish({
  weight: ['800'],
  subsets: ['latin'],
});
const IconSend = ({ ...props }) => {
  return <img src="/images/contact-send.svg" alt="" {...props} />;
};

const properties = [
  { name: 'Choose', value: 'choose' },
  { name: 'Home', value: 'home' },
  { name: 'Apartment', value: 'apertment' },
  { name: 'Rent', value: 'rent' },
];

function ContactUs() {
  return (
    <section className="bg-[url('/images/bg-contact.png')] pb-20">
      <Wrapper noPaddingY>
        <div className="grid grid-cols-1 lg:grid-cols-2 py-6">
          <div className="relative overflow-hidden">
            <Image
              src="/images/mark-contact.png"
              alt=""
              height={270}
              width={196}
              className="absolute -right-11 bottom-20 animate-image-mark"
            />
            <h2
              className={clsx(
                'font-semibold text-5xl leading-tight',
                mulush.className
              )}
            >
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
          <div className="card-shadow py-7 px-4 lg:px-7  bg-white rounded-xl">
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
                <CustomInput
                  label="Your name"
                  placeholder="Your name"
                  name="name"
                  imageIconPath="/images/contact-name.svg"
                />
              </div>
              <div className="flex gap-5 pb-6">
                <CustomInput
                  label="Email"
                  placeholder="Email"
                  name="email"
                  type="email"
                  imageIconPath="/images/contact-email.svg"
                />
                <CustomInput
                  label="Phone"
                  placeholder="Phone"
                  name="phone"
                  imageIconPath="/images/contact-phone.svg"
                />
              </div>
              <div className="pb-6">
                <CustomInput
                  name="type"
                  placeholder="Choose"
                  type="select"
                  label="Property type"
                  dataOptions={properties}
                  selectDefault={properties[0].value}
                  imageIconPath="/images/contact-choose.svg"
                />
              </div>

              <div className="pb-6">
                <CustomInput
                  label="Message"
                  placeholder="Your message"
                  name="message"
                  type="textarea"
                />
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
      </Wrapper>
    </section>
  );
}

export default ContactUs;
