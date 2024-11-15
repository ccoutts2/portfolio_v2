"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import Image from "next/image";
import Link from "next/link";

import { TransitionLink } from "../navigation/TransitionLink/TransitionLink";
import { AnimatedText } from "@/components/animations/AnimatedText/AnimatedText";
import { assetsConfig } from "@/config/assets";
import AnimatedImage from "@/components/animations/AnimatedImage/AnimatedImage";

const Hero = () => {
  const container = useRef<HTMLDivElement | null>(null);
  const featuredProject = useRef<HTMLElement | null>(null);
  const image = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      gsap.set(featuredProject.current, {
        autoAlpha: 0,
      });

      gsap.to(featuredProject.current, {
        autoAlpha: 1,
        delay: 2,
        duration: 1.5,
        ease: "power4.inOut",
      });
      gsap.to(image.current, {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        delay: 3,
        duration: 1.5,
        ease: "power4.inOut",
      });
    },
    { scope: container, dependencies: [] }
  );

  return (
    <div ref={container} className="h-screen flex flex-col justify-between relative">
      <div className="flex flex-col justify-between md:flex-row gap-8">
        <section className="flex flex-col gap-2 text-clampHome flex-[1]">
          <AnimatedText delay={2}>
            <h1>
              <span className="ml-12">My</span> name is{" "}
              <TransitionLink href="/about" underline>
                Chris Coutts
              </TransitionLink>
            </h1>
          </AnimatedText>
          <AnimatedText delay={2.2}>
            <h2>
              <span className="ml-8">Full</span> Stack Developer
            </h2>
          </AnimatedText>
          <AnimatedText delay={2.4}>
            <h2>
              <span className="ml-4">London</span> Based
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
                <span className="uppercase relative text-sm md:text-base">Ewm </span>
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
      {/* <div className="absolute bottom-1 right-1">
        <AnimatedText>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam voluptates
          quos ratione consequatur ullam commodi velit rerum sequi ipsam blanditiis,
          quo debitis exercitationem molestiae quasi. Nesciunt quod nihil iste
          repudiandae?
        </AnimatedText>
      </div> */}
    </div>
  );
};

export default Hero;
