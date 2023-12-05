import Image from 'next/image';
import Link from 'next/link';
import { FaPhoneAlt } from 'react-icons/fa';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from 'react-icons/fa6';
import { IoMdMail } from 'react-icons/io';
import { CardAgent } from '~/types';

interface Props {
  data: CardAgent;
}

function MeetTheAgentItem({ data }: Props) {
  return (
    <div className="text-center group">
      <div className="relative overflow-hidden rounded-xl">
        <Link href={'#'} className="block">
          <Image
            src={data.image}
            alt=""
            height={100}
            width={100}
            quality={100}
            className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
          />
        </Link>
        <div className="bg-primary flex flex-col justify-between gap-3 text-white py-3 absolute top-0 bottom-0 right-0 opacity-0 translate-x-full group-hover:translate-x-0 group-hover:opacity-100 transition duration-300">
          <a href="#" className="px-4">
            <FaFacebookF className="m-auto" size="17" />
          </a>

          <a href="#" className="px-4">
            <FaTwitter className="m-auto" size="17" />
          </a>

          <a href="#" className="px-4">
            <FaLinkedinIn className="m-auto" size="17" />
          </a>

          <a href="#" className="px-4">
            <FaInstagram className="m-auto" size="17" />
          </a>
        </div>
      </div>
      <div className="lg:flex items-center justify-between">
        <div className="lg:text-left">
          <Link
            href={'#'}
            className="text-lg font-semibold hover:text-primary transition-colors duration-300 block pt-5 pb-1"
          >
            <h3>{data.name}</h3>
          </Link>
          <p className="text-sm pb-2">{data.job}</p>
        </div>
        <div className="flex gap-2 justify-center">
          <a
            href="#"
            className="w-[38px] h-[38px] border text-black/40 border-black/5 flex rounded-full hover:text-white hover:bg-primary transition duration-300"
          >
            <FaPhoneAlt className="m-auto" />
          </a>
          <a
            href="#"
            className="w-[38px] h-[38px] border text-black/40 border-black/5 flex rounded-full hover:text-white hover:bg-primary transition duration-300"
          >
            <IoMdMail className="m-auto" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default MeetTheAgentItem;
