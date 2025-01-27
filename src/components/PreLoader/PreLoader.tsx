"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const PreLoader = () => {
  const container = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLParagraphElement | null>(null);
  const backgroundLoader = useRef<HTMLDivElement | null>(null);

  const tl = useRef<GSAPTimeline | null>();

  useGSAP(
    () => {
      const hasPlayed = localStorage.getItem("preLoader");

      if (!hasPlayed) {
        gsap.set(textRef.current, {
          yPercent: 100,
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
            backgroundLoader.current,
            {
              yPercent: -100,
              duration: 1.5,
              ease: "power4.inOut",
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
    <div ref={container} className="overflow-hidden">
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
