"use client";
import styles from "./Hero.module.css";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import Image from "next/image";

import { TransitionLink } from "../navigation/TransitionLink/TransitionLink";
import { AnimatedText } from "@/components/animations/AnimatedText/AnimatedText";
import { FeaturedProject } from "@/components/ui/cards/FeaturedProject/FeaturedProject";

const Hero = () => {
  const container = useRef<HTMLDivElement | null>(null);

  const featuredProject = useRef<HTMLElement | null>(null);
  const image = useRef<HTMLDivElement | null>(null);

  const tl = useRef<GSAPTimeline | null>();

  const [isPageLoaded, setIsPageLoaded] = useState<boolean>(false);

  useEffect(() => {
    setIsPageLoaded(true);
  }, []);

  useGSAP(
    () => {
      const hasPlayed = localStorage.getItem("preLoader");
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
    <div
      ref={container}
      className={styles.Hero}
      {...(isPageLoaded && { "data-is-loaded": true })}
    >
      <div className="flex flex-col justify-between relative h-full">
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
              <span>I&apos;m</span> a Full Stack Developer
            </AnimatedText>
            <AnimatedText delay={1.2}>
              <span>Based</span> in London
            </AnimatedText>
          </section>

          <div
            ref={image}
            className="w-clamp-image h-clamp-image"
            style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)" }}
          >
            <Image
              src="https://hinrakjrdbrmrrvilpbg.supabase.co/storage/v1/object/public/portfolio/home-page/chris_sunny.webp"
              alt="A man sitting at a table outside, wearing a white tshirt, sunglasses and black cap, looking away from the camera. It is a sunny day with palm trees and a lake in the background."
              width={900}
              height={1200}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <aside ref={featuredProject} className="p-4">
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
