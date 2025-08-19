"use client";
import { useEffect, useRef } from "react";
import { BurgerButton } from "@/components/ui/buttons/BurgerButton";
import { TransitionLink } from "../TransitionLink/TransitionLink";
import DateTime from "@/components/DateTime/DateTime";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { PercentageScroll } from "@/components/PercentageScroll/PercentageScroll";

interface BurgerMenuProps {
  isOpen: boolean;
  status: string;
  toggleBurgerMenu: () => void;
}

interface Links {
  label: string;
  href: string;
}

const burgerMenuItems: Links[] = [
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
  {
    label: "Work",
    href: "/work",
  },
  {
    label: "Github",
    href: "/about",
  },
  {
    label: "LinkedIn",
    href: "/contact",
  },
  {
    label: "Email",
    href: "/work",
  },
];

const BurgerMenu = ({ isOpen, status, toggleBurgerMenu }: BurgerMenuProps) => {
  const container = useRef<HTMLDivElement | null>(null);
  const menu = useRef<HTMLElement | null>(null);
  const menuLinks = useRef<(HTMLDivElement | null)[]>([]);
  const socialLinks = useRef<(HTMLDivElement | null)[]>([]);

  const tl = useRef<GSAPTimeline | null>();

  useGSAP(
    () => {
      gsap.set(container.current, { opacity: 1 });
      gsap.set(menu.current, { autoAlpha: 0 });
      gsap.set(menuLinks.current, { y: 75 });
      gsap.set(socialLinks.current, { y: 75 });

      tl.current = gsap
        .timeline()
        .to(menu.current, {
          autoAlpha: 1,
          duration: 1,
          ease: "power4.inOut",
        })
        .to(menuLinks.current, {
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power4.inOut",
          delay: -0.5,
        })
        .to(socialLinks.current, {
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power4.inOut",
          delay: -0.5,
        });
    },
    { scope: container }
  );

  useEffect(() => {
    if (isOpen) {
      tl.current?.play();
      document.body.style.overflow = "hidden";
    } else {
      tl.current?.reverse();
      document.body.style.overflow = "scroll";
    }
  }, [isOpen]);

  return (
    <div data-lenis-prevent ref={container} className="opacity-0 lg:hidden">
      <nav ref={menu} className="fixed inset-0 z-50 backdrop-blur-md">
        <div className="flex justify-between items-center">
          <section className="flex-[2] flex items-center p-4 pr-0 md:pr-4 md:px-8 gap-4">
            <h1 className="text-base md:text-2xl">
              <TransitionLink href="/">Chris Coutts</TransitionLink>
            </h1>
            <DateTime />

            <PercentageScroll />
          </section>
          <div className="pr-4">
            <BurgerButton
              status={status}
              onClick={toggleBurgerMenu}
              isOpen={isOpen}
            />
          </div>
        </div>

        <ul className="mt-12 flex flex-col justify-end items-end w-full uppercase p-4">
          {burgerMenuItems.slice(0, 3).map((item, index) => (
            <li
              key={index}
              className="text-6xl"
              style={{
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
              }}
            >
              <div
                className="relative"
                ref={(el) => {
                  menuLinks.current[index] = el;
                }}
                onClick={toggleBurgerMenu}
              >
                <TransitionLink href={item.href} underline>
                  <span className="tracking-tight"> {item.label}</span>
                </TransitionLink>
              </div>
            </li>
          ))}
        </ul>

        <ul className="mt-12 flex flex-col justify-end items-end w-full uppercase p-4">
          {burgerMenuItems.slice(3, 6).map((item, index) => (
            <li
              key={index}
              className="text-xl"
              style={{
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
              }}
            >
              <div
                className="relative"
                ref={(el) => {
                  socialLinks.current[index] = el;
                }}
                onClick={toggleBurgerMenu}
              >
                <TransitionLink href={item.href} underline>
                  <span className="tracking-tight"> {item.label}</span>
                </TransitionLink>
              </div>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default BurgerMenu;
