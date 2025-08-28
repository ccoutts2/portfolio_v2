"use client";
import { useRef } from "react";
import { assetsConfig } from "@/config/assets";
import Image from "next/image";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ImageTextScroll = () => {
  const container = useRef<HTMLDivElement | null>(null);
  const imageRef1 = useRef<HTMLImageElement | null>(null);
  const imageRef2 = useRef<HTMLImageElement | null>(null);

  useGSAP(
    () => {
      gsap.set(imageRef1.current, {
        scale: 0.25,
        transformOrigin: "100% 100%",
      });

      gsap.to(imageRef1.current, {
        scale: 1,
        scrollTrigger: {
          trigger: imageRef1.current,
          start: "top center",
          end: "bottom top",
          scrub: true,
        },
      });
      gsap.to(imageRef2.current, {
        scale: 1,
        scrollTrigger: {
          trigger: imageRef2.current,
          start: "top center",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: container }
  );
  return (
    <div ref={container} className="h-screen relative">
      <div className="w-full sticky h-screen overflow-hidden top-0">
        <Image
          ref={imageRef1}
          src={assetsConfig["ewm-bespoke-interiors"][0].src}
          alt={assetsConfig["ewm-bespoke-interiors"][0].description}
          width={800}
          height={800}
          className="w-full h-full object-cover z-100 absolute top-0 right-0 p-4"
        />
        <div className="fixed bottom-0 left-0">hello world</div>
      </div>
    </div>
  );
};

export default ImageTextScroll;
