"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const PreLoader = () => {
  const container = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLParagraphElement | null>(null);
  const backgroundLoader = useRef<HTMLDivElement | null>(null);

  const tl = useRef<GSAPTimeline>();

  const hasPlayed = localStorage.getItem("preLoader");

  useGSAP(
    () => {
      gsap.set(container.current, { opacity: 1 });

      if (!hasPlayed) {
        gsap.set(textRef.current, {
          yPercent: 100,
        });

        tl.current = gsap.timeline({ defaults: { ease: "power4.inOut" } });

        tl.current
          .to(textRef.current, {
            yPercent: 0,
            delay: 1,
            duration: 1,
          })
          .to(textRef.current, {
            yPercent: -100,
            delay: 1.2,
            duration: 1,
          })
          .to(
            backgroundLoader.current,
            {
              yPercent: -100,
              duration: 1,
              delay: 0.25,
            },
            "<"
          );
      } else {
        gsap.set(textRef.current, {
          autoAlpha: 0,
        });

        gsap.set(backgroundLoader.current, {
          autoAlpha: 0,
        });
      }
      localStorage.setItem("preLoader", "true");
    },
    { scope: container }
  );
  return (
    <div ref={container} className="overflow-hidden opacity-0">
      <div className="fixed top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 overflow-hidden text-[#191919] text-2xl z-[1000]">
        <p ref={textRef}>say hello</p>
      </div>
      <div
        ref={backgroundLoader}
        className="fixed inset-0 z-[999] flex justify-center items-center h-screen bg-[#FB4D4C]"
      ></div>
    </div>
  );
};

export default PreLoader;
