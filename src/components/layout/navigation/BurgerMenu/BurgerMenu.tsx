"use client";
import { useEffect, useRef } from "react";
import { BurgerButton } from "@/components/ui/buttons/BurgerButton";
import { TransitionLink } from "../TransitionLink/TransitionLink";
import DateTime from "@/components/DateTime/DateTime";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

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
  const name = useRef<HTMLSpanElement | null>(null);

  const tl = useRef<GSAPTimeline | null>();

  useGSAP(
    () => {
      gsap.set(menu.current, { autoAlpha: 0 });
      gsap.set(menuLinks.current, { y: 75 });
      gsap.set(name.current, { y: 25 });
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
          stagger: 0.15,
          ease: "power4.inOut",
          delay: -0.75,
        })
        .to(
          name.current,
          {
            y: 0,
            duration: 1,
            stagger: 0.15,
            delay: -0.75,
            ease: "power4.inOut",
          },
          "<"
        )
        .to(socialLinks.current, {
          y: 0,
          duration: 1,
          ease: "power4.inOut",
          delay: -0.75,
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

  const splitText = (word: string) => {
    return (
      <>
        {word.split("").map((el, index) => {
          return (
            <span key={index} className="inline-block" ref={name}>
              {el}
            </span>
          );
        })}
      </>
    );
  };

  return (
    <div data-lenis-prevent ref={container}>
      <nav ref={menu} className="fixed inset-0 z-50 backdrop-blur-md p-4">
        <div className="flex justify-between items-center">
          <section className="flex flex-col">
            <h1 className="text-clampPageIntro relative">
              <TransitionLink href="/">{splitText("Chris Coutts")}</TransitionLink>
            </h1>
            <DateTime />
          </section>
          <BurgerButton status={status} onClick={toggleBurgerMenu} isOpen={isOpen} />
        </div>

        <ul className="mt-12 flex flex-col justify-end items-end w-full uppercase">
          {burgerMenuItems.slice(0, 3).map((item, index) => (
            <li
              key={index}
              className="text-6xl"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}>
              <div
                className="relative"
                ref={(el) => {
                  menuLinks.current[index] = el;
                }}
                onClick={toggleBurgerMenu}>
                <TransitionLink href={item.href} underline>
                  <span className="tracking-tight"> {item.label}</span>
                </TransitionLink>
              </div>
            </li>
          ))}
        </ul>

        <ul className="mt-12 flex flex-col justify-end items-end w-full uppercase">
          {burgerMenuItems.slice(3, 6).map((item, index) => (
            <li
              key={index}
              className="text-xl"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}>
              <div
                className="relative"
                ref={(el) => {
                  socialLinks.current[index] = el;
                }}
                onClick={toggleBurgerMenu}>
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
