"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import Image from "next/image";

import { TransitionLink } from "../navigation/TransitionLink/TransitionLink";
import { AnimatedText } from "@/components/animations/AnimatedText/AnimatedText";
import { assetsConfig } from "@/config/assets";
import { FeaturedProject } from "@/components/ui/cards/FeaturedProject/FeaturedProject";

const Hero = () => {
  const container = useRef<HTMLDivElement | null>(null);

  const featuredProject = useRef<HTMLElement | null>(null);
  const image = useRef<HTMLDivElement | null>(null);

  const tl = useRef<GSAPTimeline | null>();

  const hasPlayed = localStorage.getItem("preLoader");

  useGSAP(
    () => {
      gsap.set(featuredProject.current, {
        autoAlpha: 0,
      });

      tl.current = gsap
        .timeline()
        .to(featuredProject.current, {
          autoAlpha: 1,
          duration: 1.5,
          delay: hasPlayed ? 1 : 4.25,
          ease: "power4.inOut",
        })
        .to(
          image.current,
          {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            duration: 1.5,
            delay: 0.5,
            ease: "power4.inOut",
          },
          "<"
        );
    },
    { scope: container, dependencies: [] }
  );

  return (
    <div ref={container} className="min-h-screen">
      <div className="flex flex-col justify-between relative">
        <div className="flex flex-col justify-between md:flex-row gap-8 p-4">
          <section className="flex flex-col gap-2 text-clamp-home flex-1">
            <AnimatedText delay={1}>
              <h1>
                <span className="ml-12">My</span> name is{" "}
                <TransitionLink href="/about" underline>
                  Chris Coutts
                </TransitionLink>
              </h1>
            </AnimatedText>
            <AnimatedText delay={1.1}>
              <h2>
                <span>I&apos;m</span> a Full Stack Developer
              </h2>
            </AnimatedText>
            <AnimatedText delay={1.2}>
              <h2>
                <span>Based</span> in London
              </h2>
            </AnimatedText>
          </section>

          <div
            ref={image}
            className="w-clamp-image h-clamp-image"
            style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)" }}
          >
            <Image
              src={assetsConfig["ewm"][0].src}
              alt={assetsConfig["ewm"][0].description}
              width={800}
              height={800}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <aside ref={featuredProject} className="flex-1 p-4">
          <FeaturedProject
            projectName="EWM Bespoke Interiors"
            role={[{ role: "Design" }, { role: "Development" }]}
            year="2024"
          />
        </aside>
      </div>
    </div>
  );
};

export default Hero;
