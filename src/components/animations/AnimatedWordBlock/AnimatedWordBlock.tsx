"use client";
import { useRef, forwardRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface AnimatedWordBlockProps {
  wordAbove: string;
  wordBelow: string;
}

export const AnimatedWordBlock = ({
  wordAbove,
  wordBelow,
}: AnimatedWordBlockProps) => {
  const wordContainerRef = useRef<HTMLDivElement | null>(null);
  const wordAboveRef = useRef<HTMLHeadingElement | null>(null);
  const wordBelowRef = useRef<HTMLHeadingElement | null>(null);

  useGSAP(
    () => {
      gsap.set(wordAboveRef.current, { translateY: "-200%" });
      gsap.set(wordBelowRef.current, { translateY: "0%" });
    },
    { scope: wordContainerRef }
  );

  gsap.to(wordAboveRef.current, {
    translateY: "0%",
    ease: "power4.inOut",
    scrollTrigger: {
      trigger: wordContainerRef.current,
      scrub: true,
      start: "top center",
      end: "top +=100px",
    },
  });

  gsap.to(wordBelowRef.current, {
    translateY: "100%",
    ease: "power4.inOut",
    scrollTrigger: {
      trigger: wordContainerRef.current,
      scrub: true,
      start: "top center",
      end: "top +=100px",
    },
  });

  return (
    <span
      ref={wordContainerRef}
      style={{ clipPath: "polygon(0 3%, 0 99%, 100% 99%, 100% 3%)" }}
      className="flex flex-col overflow-hidden leading-[0.8] relative"
    >
      <span ref={wordAboveRef}>{wordAbove}</span>
      <span ref={wordBelowRef} className="absolute left-0 top-0">
        {wordBelow}
      </span>
    </span>
  );
};
