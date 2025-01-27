"use client";
import { useEffect, useRef } from "react";
import Lenis from "lenis";

export const PercentageScroll = () => {
  const scrollRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {}, []);

  useEffect(() => {
    let percentage = 0;

    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
    });

    lenis.on("scroll", ({ scroll, limit }: { scroll: number; limit: number }) => {
      if (limit > 0) {
        percentage = (scroll / limit) * 100;
      } else {
        percentage = 0;
      }

      if (scrollRef.current) {
        scrollRef.current.textContent = `${percentage.toFixed(0)}%`;
      }
    });

    function raf(time: DOMHighResTimeStamp) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <span className="list-none text-base uppercase no-underline " ref={scrollRef}>
      0%
    </span>
  );
};
