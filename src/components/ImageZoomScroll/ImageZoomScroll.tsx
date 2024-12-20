"use client";
import { useRef } from "react";
import Image from "next/image";
import { assetsConfig } from "@/config/assets";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { AnimatedWordBlock } from "../animations/AnimatedWordBlock/AnimatedWordBlock";

gsap.registerPlugin(ScrollTrigger);

export const ImageZoomScroll = () => {
  const container = useRef<HTMLDivElement | null>(null);
  const image1 = useRef<HTMLImageElement | null>(null);
  const image2 = useRef<HTMLImageElement | null>(null);
  const image3 = useRef<HTMLImageElement | null>(null);

  useGSAP(
    () => {
      gsap.set(image2.current, { scale: 0 });
      gsap.set(image3.current, { scale: 0 });

      gsap.to(image2.current, {
        scale: 1,
        ease: "power4.inOut",
        scrollTrigger: {
          trigger: container.current,
          scrub: true,
          start: "top center",
          end: "center center",
        },
      });

      gsap.to(image3.current, {
        scale: 1,
        ease: "power4.inOut",
        scrollTrigger: {
          trigger: container.current,
          scrub: true,
          start: "center center",
          end: "bottom bottom",
        },
      });
    },
    { scope: container }
  );

  return (
    <div ref={container} className="w-full h-[300vh] relative flex justify-between">
      <div className="sticky h-[100vh] overflow-hidden w-full top-0">
        <Image
          ref={image1}
          src={assetsConfig["new-street"][0].src}
          alt={assetsConfig["new-street"][0].description}
          width={assetsConfig["new-street"][0].width}
          height={assetsConfig["new-street"][0].height}
          className="w-full h-full absolute top-0 left-0 object-cover z-10"
        />

        <Image
          ref={image2}
          src={assetsConfig["new-street"][1].src}
          alt={assetsConfig["new-street"][1].description}
          width={assetsConfig["new-street"][1].width}
          height={assetsConfig["new-street"][1].height}
          className="w-full h-full absolute top-0 left-0 object-cover z-20"
        />

        <Image
          ref={image3}
          src={assetsConfig["new-street"][2].src}
          alt={assetsConfig["new-street"][2].description}
          width={assetsConfig["new-street"][2].width}
          height={assetsConfig["new-street"][2].height}
          className="w-full h-full absolute top-0 left-0 object-cover z-30"
        />
      </div>
      <div className=" w-full h-full">
        <div className="h-[100vh] flex flex-col items-center justify-center text-clampHome">
          {" "}
          <AnimatedWordBlock wordAbove="Health" wordBelow="Health" />
        </div>
        <div className="h-[100vh] flex flex-col items-center justify-center text-clampHome">
          {" "}
          <AnimatedWordBlock wordAbove="Power" wordBelow="Power" />
        </div>
        <div className="h-[100vh] flex flex-col items-center justify-center text-clampHome">
          {" "}
          <AnimatedWordBlock wordAbove="Desire" wordBelow="Desire" />
        </div>
      </div>
    </div>
  );
};
