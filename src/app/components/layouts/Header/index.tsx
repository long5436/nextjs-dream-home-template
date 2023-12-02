import Image from 'next/image';
import Link from 'next/link';
import { IconType } from 'react-icons';
import PrimaryButton from '~/app/components/PrimaryButton';
import HeaderListMenu from '~/app/components/layouts/Header/HeaderListMenu';
import MenuMobile from './MenuMobile';

function Icon({ className }: { className: string }) {
  return <img src="/images/home-dolar.svg" alt="" className={className} />;
}

function Header() {
  return (
    <>
      <header className="relative z-50 px-4 shadow-2xl shadow-black/10 flex items-center justify-between py-[15px]">
        <div className="">
          <Link href="/">
            <Image
              src="/images/logo@2x.png"
              alt="home"
              width="197"
              height="100"
              className="h-12 w-auto"
            />
          </Link>
        </div>
        <div className="hidden lg:block">
          <HeaderListMenu />
        </div>
        <div className="flex justify-end gap-7">
          <ul className="flex gap-1 opacity-95 text-[0.85rem] items-center">
            <li>
              <Image
                src="/images/user-icon.svg"
                alt="icon"
                width="22"
                height="22"
              />
            </li>
            <li>
              <Link
                href="#"
                className="font-medium hover:text-primary transition-colors duration-300 hidden md:block"
              >
                Register
              </Link>
            </li>
            <li className="hidden md:block">
              <span>/</span>
            </li>
            <li>
              <Link
                href="#"
                className="font-medium hover:text-primary transition-colors duration-300 "
              >
                Login
              </Link>
            </li>
          </ul>
          <div className="hidden md:block">
            <PrimaryButton text="Sell Property" icon={Icon as IconType} />
          </div>

          {/* menu mobile */}
          <MenuMobile />
        </div>
      </header>
    </>
  );
}

export default Header;
