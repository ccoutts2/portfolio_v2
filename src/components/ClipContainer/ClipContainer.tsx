"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { useScreenDetector } from "@/hooks/useScreenDetector";

gsap.registerPlugin(ScrollTrigger);

interface ClipContainerProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const ClipContainer = ({ src, alt, width, height }: ClipContainerProps) => {
  const container = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const tl = useRef<GSAPTimeline | null>();

  const { isMobile } = useScreenDetector();

  useGSAP(
    () => {
      if (tl.current) {
        tl.current.scrollTrigger?.kill();
        tl.current.kill();
      }
      tl.current = gsap.timeline().to(imageRef.current, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "none",
        scrollTrigger: {
          trigger: imageRef.current,
          scrub: true,
          start: isMobile ? "top bottom" : "top center+=100px",
          end: isMobile ? "bottom center" : "bottom top+=600px",
        },
      });
    },
    { scope: container, dependencies: [isMobile] }
  );

  return (
    <div ref={container}>
      <Image
        style={{
          clipPath: "polygon(30% 35%, 70% 35%, 70% 80%, 30% 80%)",
        }}
        ref={imageRef}
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="w-full h-full object-cover pt-4"
      />
    </div>
  );
};

export default ClipContainer;
