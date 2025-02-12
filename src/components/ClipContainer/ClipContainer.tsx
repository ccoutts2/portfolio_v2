"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { assetsConfig } from "@/config/assets";

gsap.registerPlugin(ScrollTrigger);

const ClipContainer = () => {
  const container = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const tl = useRef<GSAPTimeline | null>();
  useGSAP(
    () => {
      tl.current = gsap.timeline().to(imageRef.current, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "power4.inOut",
        scrollTrigger: {
          trigger: imageRef.current,
          scrub: true,
          start: "top center-=100px",
          end: "top top-=200px",
        },
      });
    },
    { scope: container, dependencies: [] }
  );

  return (
    <div ref={container}>
      <Image
        style={{
          clipPath: "polygon(30% 35%, 70% 35%, 70% 80%, 30% 80%)",
        }}
        ref={imageRef}
        src={assetsConfig.ewm[2].src}
        alt={assetsConfig.ewm[2].description}
        width={800}
        height={800}
        className="w-full h-full object-cover pt-4 zoom"
      />
    </div>
  );
};

export default ClipContainer;
