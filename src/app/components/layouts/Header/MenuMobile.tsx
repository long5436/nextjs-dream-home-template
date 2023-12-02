"use client";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IconType } from "react-icons";
import { GrMenu } from "react-icons/gr";
import { IoCloseSharp } from "react-icons/io5";
import { styled } from "styled-components";
import PrimaryButton from "../../PrimaryButton";
import HeaderListMenu from "./HeaderListMenu";

function Icon({ className }: { className: string }) {
  return <img src="/images/home-dolar.svg" alt="" className={className} />;
}

const CheckBox = styled.input`
  &:checked ~ div {
    display: flex;
  }

  &:not(:checked) ~ div {
    display: none;
  }
`;

function MenuMobile() {
  const [visible, setVisible] = useState<boolean>(false);
  const [isClose, setIsClose] = useState<boolean>(false);

  const handleCloseMenu = () => {
    setIsClose(true);

    setTimeout(() => {
      setVisible(false);
    }, 550);
  };

  return (
    <>
      {/* menu button */}
      <div
        className="lg:hidden"
        onClick={() => {
          setVisible(true);
          setIsClose(false);
        }}
      >
        <GrMenu className="text-primary" size="33" />
      </div>

      {visible ? (
        <div className="fixed top-0 left-0 h-screen w-screen">
          <div
            className={clsx("absolute h-screen w-screen bg-black/50", {
              "animate-overlay-in": !isClose,
              "animate-overlay-out": isClose,
            })}
            onClick={handleCloseMenu}
          ></div>
          <div
            className={clsx(
              "absolute top-0 left-0 h-full w-[300px] bg-white -translate-x-full",
              {
                "animate-menu": !isClose,
                "animate-menu-close": isClose,
              }
            )}
          >
            <div className="relative z-50 px-4 shadow-2xl shadow-black/10 flex items-center justify-between py-3">
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
            <div className="px-5">
              <div className="flex gap-1 opacity-95 text-[0.85rem] items-center border-b border-black/5 py-6">
                <Image
                  src="/images/user-icon.svg"
                  alt="icon"
                  width="22"
                  height="22"
                />

                <Link
                  href="#"
                  className="font-medium hover:text-primary transition-colors duration-300 "
                >
                  Login
                </Link>
              </div>

              <div className="py-5">
                <HeaderListMenu mobile />
              </div>

              <div className="border-t border-b border-black/5 py-6">
                <PrimaryButton
                  text="Sell Property"
                  icon={Icon as IconType}
                  className="justify-center"
                />
              </div>

              <div className="py-4">
                <h3 className="font-semibold text-lg"> Contact</h3>
                <div className="">
                  <div className="flex items-center gap-4 py-5">
                    <div>
                      <Image
                        src="/images/call-us.svg"
                        alt="email"
                        height="40"
                        width="40"
                      />
                    </div>
                    <div>
                      <p className="text-sm opacity-50 pb-1">Call us:</p>
                      <a href="tel:405555-0128" className="font-semibold">
                        <h5>(201) 555-0124:</h5>
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4  py-5 border-t border-black/5">
                    <div>
                      <Image
                        src="/images/email2.svg"
                        alt="email"
                        height="40"
                        width="40"
                      />
                    </div>

                    <div>
                      <p className="text-sm opacity-50 pb-1">Email:</p>
                      <a
                        href="mailto:themesflat@gmail.com"
                        className="font-semibold"
                      >
                        <h5>themesflat@gmail.com</h5>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="absolute top-5 right-6 text-white"
            onClick={handleCloseMenu}
          >
            <IoCloseSharp size="40" />
          </button>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default MenuMobile;
