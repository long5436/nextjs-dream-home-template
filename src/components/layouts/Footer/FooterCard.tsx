import Image from 'next/image';
import { HiOutlinePhone } from 'react-icons/hi2';
import PrimaryButton from '../../PrimaryButton';

function FooterCard() {
  return (
    <div className="footer-card text-black rounded-xl py-7 px-4  relative">
      <div className="flex gap-4 flex-col md:flex-row footer-card-content">
        <div>
          <Image
            src="/images/footer-icon-1.png"
            alt="me"
            width="100"
            height="100"
            className="footer-card-image"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-3xl font-bold ">You need a house</h2>
          <p className="text-sm  py-3 mb-2">
            Tell us your needs, we will give you thousands of suggestions for
            the dream home.
          </p>
        </div>
      </div>
      {/* <Link
        href="#"
        className="bg-primary text-white font-bold py-4 px-7 rounded-xl flex items-center absolute -bottom-7 left-1/2 -translate-x-1/2 hover:bg-primaryHover transition-all duration-300 btn-card-footer"
      >
        <HiOutlinePhone size="24" className="icon" />
        <span className="w-max relative after:absolute after:w-[1px] after:h-full after:bg-white/30 after:-left-3 after:bottom-0 ml-5">
          Contact Seller
        </span>
      </Link> */}

      <PrimaryButton
        text="Contact Seller"
        className="absolute -bottom-7 left-1/2 -translate-x-1/2"
        style={{
          paddingLeft: '1.75rem',
          paddingRight: '1.75rem',
        }}
        icon={HiOutlinePhone}
      />
    </div>
  );
}

export default FooterCard;
