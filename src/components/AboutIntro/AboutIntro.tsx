"use client";
import { assetsConfig } from "@/config/assets";
import Image from "next/image";
import { AnimatedText } from "../animations/AnimatedText/AnimatedText";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const AboutIntro = () => {
  const container = useRef<HTMLDivElement | null>(null);
  const imageContainer1 = useRef<HTMLElement | null>(null);
  const imageContainer2 = useRef<HTMLElement | null>(null);
  const imageContainer3 = useRef<HTMLElement | null>(null);

  const tl = useRef<GSAPTimeline | null>();

  useGSAP(
    () => {
      tl.current = gsap
        .timeline({ delay: 1 })
        .to(imageContainer1.current, {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          duration: 0.8,
          delay: 0.25,
          ease: "power4.inOut",
        })
        .to(
          imageContainer2.current,
          {
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            duration: 0.8,
            delay: 0.1,
            ease: "power4.inOut",
          },
          "<"
        )
        .to(
          imageContainer3.current,
          {
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            duration: 0.8,
            delay: 0.1,
            ease: "power4.inOut",
          },
          "<"
        );
    },
    { scope: container, dependencies: [] }
  );
  return (
    <>
      <div className="p-4">
        <AnimatedText delay={0.8}>
          <p className="text-clampPageIntro">
            <span className="ml-12">I&apos;m</span> a full stack developer who
            transitioned into the tech industry through a{" "}
            <span className="text-[#442c35] dark:text-[#f40c3f] font-bold">
              passion
            </span>{" "}
            for building and creating. I love turning ideas into reality, whether
            that be building apps for me and my friends to use, or collaborating with
            clients to bring their{" "}
            <span className="text-[#442c35] dark:text-[#f40c3f] font-bold">
              visions
            </span>{" "}
            to life. For me, every line of code is an{" "}
            <span className="text-[#442c35] dark:text-[#f40c3f] font-bold">
              opportunity
            </span>{" "}
            to solve problems and make a difference.
          </p>
        </AnimatedText>
      </div>
      <div className="flex flex-col-reverse md:flex-row justify-between p-4 py-12 md:p-12 gap-6">
        <div className="flex-[1]">
          <AnimatedText delay={1}>
            <p className="text-lg">
              I come with a diverse background in both engineering and technology.
              Originally holding a Master&apos;s in Chemical Engineering, I
              transitioned into the tech industry and now, I&apos;m focused on
              building cutting-edge solutions in software development. My journey has
              been marked by continuous upskilling, freelancing, and a passion for
              problem-solving within business and technical environments
            </p>
          </AnimatedText>
        </div>
        <aside ref={container} className="flex flex-wrap gap-4">
          <figure
            ref={imageContainer1}
            className="max-h-[10rem] w-clampSmallImages"
            style={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}>
            <Image
              src={assetsConfig["new-street"][0].src}
              alt={assetsConfig["new-street"][0].description}
              width={assetsConfig["new-street"][0].width}
              height={assetsConfig["new-street"][0].height}
              className="w-full h-full object-cover"
            />
          </figure>
          <figure
            ref={imageContainer2}
            className="max-h-[10rem] w-clampSmallImages"
            style={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}>
            <Image
              src={assetsConfig["new-street"][0].src}
              alt={assetsConfig["new-street"][0].description}
              width={assetsConfig["new-street"][0].width}
              height={assetsConfig["new-street"][0].height}
              className="w-full h-full object-cover"
            />
          </figure>

          <figure
            ref={imageContainer3}
            className="max-h-[10rem] w-clampSmallImages"
            style={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}>
            <Image
              src={assetsConfig["new-street"][0].src}
              alt={assetsConfig["new-street"][0].description}
              width={assetsConfig["new-street"][0].width}
              height={assetsConfig["new-street"][0].height}
              className="w-full h-full object-cover"
            />
          </figure>
        </aside>
      </div>
    </>
  );
};

export default AboutIntro;
