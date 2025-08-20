"use client";

import Image from "next/image";

interface MockupsProps {
  type: "mobile" | "desktop";
  src: string;
  alt: string;
  width: number;
  height: number;
}

export const Mockups = ({ type, src, alt, width, height }: MockupsProps) => {
  return (
    <div
      className={`min-w-[35vw] overflow-hidden rounded-[0.625rem] sm:rounded-3xl [&_img]:pointer-events-none ${
        type === "mobile" ? "border-2" : "border-3"
      }`}
      style={{
        borderColor: "rgba(33, 33, 33, 0.3)",
        maskImage: "-webkit-radial-gradient(center, white, black)",
      }}
    >
      <Image
        className="w-full h-full object-cover"
        src={src}
        alt={alt}
        width={width}
        height={height}
      />
    </div>
  );
};
