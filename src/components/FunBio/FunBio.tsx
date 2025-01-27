"use client";
import { useEffect, useState } from "react";

const FunBio = () => {
  type ImageKey = keyof typeof images;

  const images = {
    shoutcast: {
      src: "/assets/images/chris_shawn_shoutcast.jpeg",
      position: { top: "-5rem", left: "2rem" },
    },
    help: {
      src: "/assets/images/chris_robert_helping.jpeg",
      position: { top: "2rem", left: "3rem" },
    },
  };
  const [hoverImage, setHoverImage] = useState<ImageKey | null>(null);

  return (
    <div className="p-4 md:w-[50%] text-clampProjectText relative">
      <p>
        <span
          onMouseEnter={() => setHoverImage("shoutcast")}
          onMouseLeave={() => setHoverImage(null)}
          className="relative underline">
          I&apos;m
        </span>{" "}
        a software developer hailing from the rolling hills of{" "}
        <span
          onMouseEnter={() => setHoverImage("help")}
          onMouseLeave={() => setHoverImage(null)}
          className="relative underline">
          Scotland
        </span>
        . I specialise in turning “meh, that&apos;s okay” into “whoa, that&apos;s
        incredible!” Powered by coffee, creativity, and a touch of Scottish charm, I
        bring designs to life that captivate and inspire. With ideas sparked by the
        world (and the occasional <strong>aye, that&apos;s brilliant</strong>{" "}
        moment), I&apos;m here to make you think -<em>This guy knows his stuff.</em>
      </p>
      {hoverImage && (
        <div
          className="w-[10rem] h-[10rem] absolute pointer-events-none animate-bounce z-[10]"
          style={{ ...images[hoverImage].position }}>
          <img src={images[hoverImage].src} className="h-full w-full object-cover" />
        </div>
      )}
    </div>
  );
};

export default FunBio;
