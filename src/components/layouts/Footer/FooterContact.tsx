import Image from 'next/image';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

function FooterContact() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 lg:gap-6 py-14 lg:mt-12">
      <div>
        <h3 className="font-bold text-lg pb-4">Office Address</h3>
        <p className="text-sm opacity-50 pb-2">Head office:</p>
        <h4 className="font-bold pb-3">
          2118 Thornridge Cir. Syracuse, Connecticut 35624
        </h4>
        <p className="text-sm opacity-50 pb-1">Branch:</p>
        <p className="py-1">3891 Ranchview Dr. Richardson, California 62639</p>
        <p className="py-2">3517 W. Gray St. Utica, Pennsylvania 57867</p>
      </div>
      <div className="flex gap-7 flex-col">
        <h3 className="font-bold text-lg pb-4">Contact Seller</h3>
        <div className="flex items-center gap-4 justify-between">
          <div className="flex items-center gap-4">
            <div>
              <Image
                src="/images/author-footer.jpg"
                alt="email"
                height="65"
                width="65"
                className="rounded-full"
              />
            </div>
            <div>
              <p className="text-sm opacity-50 pb-1">Darrell Steward</p>
              <a href="tel:405555-0128" className="font-bold">
                <h5>(405) 555-0128</h5>
              </a>
            </div>
          </div>
          <a
            href="#"
            className="w-8 h-8 bg-white/10 rounded-full flex border border-white/20 hover:bg-primary hover:border-primary transition-all duration-300"
          >
            <MdOutlineKeyboardArrowRight size="20" className="m-auto" />
          </a>
        </div>
        <div className="flex items-center gap-4">
          <div>
            <Image src="/images/phone.svg" alt="email" height="50" width="50" />
          </div>
          <div>
            <p className="text-sm opacity-50 pb-1">Hotline:</p>
            <a href="tel:405555-0128" className="font-bold">
              <h5>(201) 555-0124:</h5>
            </a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div>
            <Image src="/images/email.svg" alt="email" height="50" width="50" />
          </div>
          <div>
            <p className="text-sm opacity-50 pb-1">Email:</p>
            <a href="mailto:Realestatecp@gmail.com" className="font-bold">
              <h5>Realestatecp@gmail.com</h5>
            </a>
          </div>
        </div>
      </div>
      <div>
        <h3 className="font-bold text-lg pb-4">Our Company</h3>
        <ul className="flex gap-2 flex-col">
          <li className="">
            <a
              href="#"
              className="flex gap-1 opacity-50 footer-list-item hover:opacity-100 hover:text-primary"
            >
              <MdOutlineKeyboardArrowRight
                size="20"
                className="inline-block text-primary icon"
              />
              <span className="footer-list-item-text">Property For Sale</span>
            </a>
          </li>
          <li className="">
            <a
              href="#"
              className="flex gap-1 opacity-50 footer-list-item hover:opacity-100 hover:text-primary"
            >
              <MdOutlineKeyboardArrowRight
                size="20"
                className="inline-block text-primary icon"
              />
              <span className="footer-list-item-text">About Us</span>
            </a>
          </li>
          <li className="">
            <a
              href="#"
              className="flex gap-1 opacity-50 footer-list-item hover:opacity-100 hover:text-primary"
            >
              <MdOutlineKeyboardArrowRight
                size="20"
                className="inline-block text-primary icon"
              />
              <span className="footer-list-item-text">Our Agents</span>
            </a>
          </li>
          <li className="">
            <a
              href="#"
              className="flex gap-1 opacity-50 footer-list-item hover:opacity-100 hover:text-primary"
            >
              <MdOutlineKeyboardArrowRight
                size="20"
                className="inline-block text-primary icon"
              />
              <span className="footer-list-item-text">FAQ</span>
            </a>
          </li>
          <li className="">
            <a
              href="#"
              className="flex gap-1 opacity-50 footer-list-item hover:opacity-100 hover:text-primary"
            >
              <MdOutlineKeyboardArrowRight
                size="20"
                className="inline-block text-primary icon"
              />
              <span className="footer-list-item-text">Pricing</span>
            </a>
          </li>
          <li className="">
            <a
              href="#"
              className="flex gap-1 opacity-50 footer-list-item hover:opacity-100 hover:text-primary"
            >
              <MdOutlineKeyboardArrowRight
                size="20"
                className="inline-block text-primary icon"
              />
              <span className="footer-list-item-text">Contact Us</span>
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="font-bold text-lg pb-4">Newsletter</h3>
        <p className="text-sm">Sign up to receive the latest articles</p>
        <form className="py-3">
          <input
            type="text"
            placeholder="Your mail address"
            className="w-full py-4 px-4 rounded-xl font-sm border border-gray-400 focus:border-primary outline-none mb-2"
          />
          <button className="w-full py-4 px-4 rounded-xl bg-white/10 flex border border-white/20 hover:bg-primary hover:border-primary transition-all duration-300 justify-center font-bold gap-2 mb-4">
            Sign up
            <IoIosArrowRoundForward size="26" />
          </button>
          <div className="flex">
            <div>
              <input
                type="checkbox"
                id="footer-checkbox"
                className="footer-checkox opacity-0 w-8"
              />
              <label
                htmlFor="footer-checkbox"
                className="relative after:absolute after:-left-8 after:bottom-0 after:w-6 after:h-5 after:bg-white/10 after:border after:border-white/20 transition-all duration-300 after:rounded-lg footer-checkbox-label"
              ></label>
            </div>
            <label htmlFor="footer-checkbox">
              <span className="text-sm">
                I have read and agree to the terms & conditions
              </span>
            </label>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FooterContact;
