"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const PreLoader = () => {
  const backgroundLoader = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLParagraphElement | null>(null);

  useGSAP(
    () => {
      gsap.set(textRef.current, {
        yPercent: 100,
        autoAlpha: 0,
      });

      const tl = gsap.timeline();
      tl.to(textRef.current, {
        yPercent: 0,
        autoAlpha: 1,
        delay: 0.5,
        duration: 0.5,
        ease: "power4.inOut",
      })
        .to(textRef.current, {
          yPercent: -105,
          autoAlpha: 0,
          delay: 1,
          duration: 0.5,
          ease: "power4.inOut",
        })
        .to(backgroundLoader.current, {
          yPercent: -100,
          duration: 1.5,
          ease: "power4.inOut",
        });
    },
    { scope: container, dependencies: [] }
  );

  return (
    <div className="overflow-hidden">
      <p
        ref={textRef}
        className="fixed top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 overflow-hidden z-[1000] text-white opacity-0 invisible">
        say hello
      </p>
      <div
        ref={backgroundLoader}
        className="fixed inset-0 z-20 flex justify-center items-center h-screen bg-black"></div>
    </div>
  );
};

export default PreLoader;
