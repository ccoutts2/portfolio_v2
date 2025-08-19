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
  return type === "mobile" ? (
    <div
      className="min-w-full overflow-hidden rounded-[0.625rem] border-2 sm:rounded-3xl [&_img]:pointer-events-none"
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
  ) : (
    <div
      className="min-w-full overflow-hidden rounded-[0.625rem] border-2 sm:rounded-2xl [&_img]:pointer-events-none"
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
