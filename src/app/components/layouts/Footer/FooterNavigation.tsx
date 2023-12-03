import Image from 'next/image';
import Link from 'next/link';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from 'react-icons/fa6';

function FooterNavigation() {
  return (
    <div className="border-t border-b border-white/10 py-7">
      <div className="container 2xl:max-w-[1140px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-4 items-center">
        <div>
          <Image
            src="/images/logo-footer@2x.png"
            alt=""
            width="100"
            height="100"
            className="h-12 w-auto m-auto lg:m-0"
          />
        </div>
        <div className="hidden md:block">
          <ul className="flex gap-10 justify-center lg:justify-start">
            <li>
              <Link
                className="font-bold text-base hover:text-primary transition-colors duration-300"
                href="#"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="font-bold text-base hover:text-primary transition-colors duration-300"
                href="#"
              >
                Property
              </Link>
            </li>
            <li>
              <Link
                className="font-bold text-base hover:text-primary transition-colors duration-300"
                href="#"
              >
                Agents
              </Link>
            </li>
            <li>
              <Link
                className="font-bold text-base hover:text-primary transition-colors duration-300"
                href="#"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                className="font-bold text-base hover:text-primary transition-colors duration-300"
                href="#"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="">
          <ul className="flex gap-2 justify-center lg:justify-end">
            <li>
              <a
                href="#"
                className="w-11 h-11 bg-purple-900/10 rounded-full flex border border-white/20 hover:bg-primary hover:border-primary transition-all duration-300"
              >
                <FaFacebookF className="m-auto" size="17" />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="w-11 h-11 bg-purple-900/10 rounded-full flex border border-white/20 hover:bg-primary hover:border-primary transition-all duration-300"
              >
                <FaTwitter className="m-auto" size="17" />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="w-11 h-11 bg-purple-900/10 rounded-full flex border border-white/20 hover:bg-primary hover:border-primary transition-all duration-300"
              >
                <FaLinkedinIn className="m-auto" size="17" />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="w-11 h-11 bg-purple-900/10 rounded-full flex border border-white/20 hover:bg-primary hover:border-primary transition-all duration-300"
              >
                <FaInstagram className="m-auto" size="17" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FooterNavigation;
