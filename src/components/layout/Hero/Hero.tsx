"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import Image from "next/image";
import Link from "next/link";

import { TransitionLink } from "../navigation/TransitionLink/TransitionLink";
import { AnimatedText } from "@/components/animations/AnimatedText/AnimatedText";
import { assetsConfig } from "@/config/assets";
import AnimatedImage from "@/components/animations/AnimatedImage/AnimatedImage";

import { NavBar } from "../navigation/NavBar/NavBar";

const Hero = () => {
  const container = useRef<HTMLDivElement | null>(null);
  const backgroundLoader = useRef<HTMLDivElement | null>(null);
  const featuredProject = useRef<HTMLElement | null>(null);
  const image = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLParagraphElement | null>(null);

  const tl = useRef<GSAPTimeline | null>();

  useGSAP(
    () => {
      gsap.set(textRef.current, {
        yPercent: 100,
      });
      gsap.set(featuredProject.current, {
        autoAlpha: 0,
      });

      tl.current = gsap
        .timeline()
        .to(textRef.current, {
          yPercent: 0,
          autoAlpha: 1,
          delay: 1,
          duration: 0.5,
          ease: "power4.inOut",
        })
        .to(textRef.current, {
          yPercent: -105,
          autoAlpha: 0,
          delay: 1.2,
          duration: 0.5,
          ease: "power4.inOut",
        })
        .to(
          backgroundLoader.current,
          {
            yPercent: -100,
            duration: 1.5,
            ease: "power4.inOut",
          },
          "<"
        )
        .to(featuredProject.current, {
          autoAlpha: 1,
          duration: 1.5,
          ease: "power4.inOut",
        })
        .to(image.current, {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          duration: 1.5,
          ease: "power4.inOut",
        });
    },
    { scope: container, dependencies: [] }
  );

  return (
    <div ref={container}>
      <div className="overflow-hidden">
        <p
          ref={textRef}
          className="fixed top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 overflow-hidden z-[1000] text-white opacity-0 invisible">
          say hello
        </p>
        <div
          ref={backgroundLoader}
          className="fixed inset-0 z-20 flex justify-center items-center h-screen bg-black"></div>
      </div>
      <div className="#f6f6f6">
        <NavBar />
        <div className="h-screen flex flex-col justify-between relative">
          <div className="flex flex-col justify-between md:flex-row gap-8">
            <section className="flex flex-col gap-2 text-clampHome flex-[1]">
              <AnimatedText delay={4}>
                <h1>
                  <span className="ml-12">My</span> name is{" "}
                  <TransitionLink href="/about" underline>
                    Chris Coutts
                  </TransitionLink>
                </h1>
              </AnimatedText>
              <AnimatedText delay={4.1}>
                <h2>
                  <span className="ml-8">I&apos;m</span> a Full Stack Developer
                </h2>
              </AnimatedText>
              <AnimatedText delay={4.2}>
                <h2>
                  <span className="ml-4">Based</span> in London
                </h2>
              </AnimatedText>
            </section>

            <div
              ref={image}
              className="w-clampImage h-clampImage"
              style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" }}>
              <Image
                src={assetsConfig["new-street"][0].src}
                alt={assetsConfig["new-street"][0].description}
                width={assetsConfig["new-street"][0].width}
                height={assetsConfig["new-street"][0].height}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <aside ref={featuredProject} className="flex-[1]">
            <h3 className="text-lg">Featured Project</h3>
            <article className="border border-solid max-w-fit p-4 flex flex-row-reverse gap-4 relative">
              <div className="flex flex-col justify-between h-full gap-4">
                <div className="flex flex-col">
                  <h4>
                    <span className="uppercase relative text-sm md:text-base">
                      Ewm{" "}
                    </span>
                    Besoke Interiors
                  </h4>
                  <dl className="flex gap-1 text-xs text-gray-500 flex-wrap">
                    <dt className="vh">Role</dt>
                    <dd>Design,</dd>
                    <dt className="vh">Role</dt>
                    <dd>Development,</dd>
                    <dt className="vh">Year</dt>
                    <dd>2024</dd>
                  </dl>
                </div>
                <span className="block text-sm md:text-base">
                  <Link href="/contact">See Project</Link>
                </span>
              </div>

              <div className="border-[0.75rem] border-solid max-w-[12rem] max-h-[12rem]">
                <Image
                  src={assetsConfig["new-street"][0].src}
                  alt={assetsConfig["new-street"][0].description}
                  width={assetsConfig["new-street"][0].width}
                  height={assetsConfig["new-street"][0].height}
                  className="w-full h-full object-cover"
                />
              </div>

              <TransitionLink href="/contact" className="absolute inset-0">
                <span className="vh">See EWM Project Case Study</span>
              </TransitionLink>
            </article>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Hero;
