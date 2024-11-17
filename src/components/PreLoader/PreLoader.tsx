"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
// import Flip from "gsap-trial/Flip";

const PreLoader = () => {
  const container = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLParagraphElement | null>(null);

  const tl = useRef<GSAPTimeline | null>();

  useGSAP(
    () => {
      gsap.set(textRef.current, {
        yPercent: 100,
        autoAlpha: 0,
      });
      tl.current = gsap
        .timeline()
        .to(textRef.current, {
          yPercent: 0,
          autoAlpha: 1,
          delay: 1,
          duration: 0.5,
          ease: "power4.inOut",
        })
        .to(textRef.current, {
          yPercent: -105,
          autoAlpha: 0,
          delay: 1.2,
          duration: 0.5,
          ease: "power4.inOut",
        })
        .to(
          container.current,
          {
            yPercent: -100,
            duration: 1.5,
            ease: "power4.inOut",
          },
          "<"
        );
    },
    { scope: container, dependencies: [] }
  );
  return (
    <div ref={container} className="bg-black h-screen z-[999]">
      <p
        ref={textRef}
        className="fixed top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 overflow-hidden z-[1000] text-white">
        say hello
      </p>
    </div>
  );
};

export default PreLoader;
