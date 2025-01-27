"use client";

import { useState } from "react";
import { NavLink } from "@/components/";
import { BurgerButton } from "@/components/";
import { BlinkingDot } from "@/components/";
import { TransitionLink } from "@/components/";
import { Icon } from "@/components/";
import Link from "next/link";
import ThemeSwitch from "@/components/ThemeSwitch/ThemeSwitch";
import DateTime from "@/components/DateTime/DateTime";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { PercentageScroll } from "@/components/PercentageScroll/PercentageScroll";

export const NavBar = () => {
  if (typeof window === "undefined") return null;
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState("closed");

  const toggleBurgerMenu = () => {
    if (isOpen) {
      setIsOpen(false);
      setStatus("closed");
    } else if (!isOpen) {
      setIsOpen(true);
      setStatus("open");
    }
  };

  return (
    <>
      <header className="w-full border-b border-solid lg:sticky lg:top-0 z-[1000] backdrop-blur-md">
        <nav className="flex justify-between items-center w-full gap-4">
          <div className="flex-[2] flex items-center p-4 pr-0 md:pr-4 md:px-8 gap-4">
            <h1 className="text-base md:text-2xl">
              <TransitionLink href="/">Chris Coutts</TransitionLink>
            </h1>
            <DateTime />

            <PercentageScroll />
          </div>

          <div className="hidden md:flex justify-center gap-20 flex-[2] w-full">
            <ul className="hidden md:flex items-center justify-center gap-20 p-4">
              <li>
                <TransitionLink href="/about" underline>
                  About
                </TransitionLink>
              </li>
              <li>
                <TransitionLink href="/work" underline>
                  Work
                </TransitionLink>
              </li>
              <li>
                <TransitionLink href="/contact" underline>
                  Contact
                </TransitionLink>
              </li>
            </ul>
          </div>

          <div className="flex-[1] flex justify-end items-center md:border-solid gap-2">
            <ul className="hidden md:flex flex-col items-stretch md:border-r md:border-l md:border-solid">
              <li className="p-2 md:p-4 md:border-b border-solid hover:bg-[#435558] hover:duration-200 relative">
                <Icon>
                  <svg
                    className="h-4 w-4 hover:scale-110 hover:duration-200 dark:fill-[#f6f6f6]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512">
                    <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                  </svg>
                </Icon>
                <Link
                  href="https://www.linkedin.com/in/chris-coutts/"
                  target="_blank"
                  className="absolute inset-0">
                  <span className="vh">See my LinkedIn profile</span>
                </Link>
              </li>
              <li className="p-2 md:p-4 hover:bg-[#435558] hover:duration-200 relative">
                <Icon>
                  <svg
                    className="h-4 w-4 hover:scale-110 hover:duration-200 dark:fill-[#f6f6f6]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 496 512">
                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                  </svg>
                </Icon>
                <Link
                  href="https://github.com/ccoutts2/"
                  target="_blank"
                  className="absolute inset-0">
                  <span className="vh">See my GitHub profile</span>
                </Link>
              </li>
            </ul>
            <div className="pr-4 md:px-6 flex flex-row-reverse items-center md:flex-col md:items-end gap-4">
              <BurgerButton
                status={status}
                onClick={toggleBurgerMenu}
                isOpen={isOpen}
              />
              <p className="hidden md:text-sm lg:text-base md:flex items-center gap-2">
                <BlinkingDot />
                <NavLink href="mailto:chris.dcoutts@gmail.com">Available</NavLink>
              </p>
              <span>
                <ThemeSwitch />
              </span>
            </div>
          </div>
        </nav>
      </header>

      <BurgerMenu
        isOpen={isOpen}
        toggleBurgerMenu={toggleBurgerMenu}
        status={status}
      />
    </>
  );
};
