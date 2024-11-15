"use client";
import Image from "next/image";
import Link from "next/link";
import { TransitionLink } from "../navigation/TransitionLink/TransitionLink";

import AnimatedText from "@/components/AnimatedText/AnimatedText";

const Hero = () => {
  return (
    <div className="h-screen flex flex-col justify-between">
      <section className="flex flex-col gap-2 text-clampHome flex-[1]">
        <h1>
          <span className="ml-12">My</span> name is{" "}
          <TransitionLink href="/about" underline>
            Chris Coutts
          </TransitionLink>
        </h1>
        <h2>
          <span className="ml-8">Full</span> Stack Developer
        </h2>
        <h2>
          <span className="ml-4">Based</span> in London
        </h2>
        <AnimatedText>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam voluptates
          quos ratione consequatur ullam commodi velit rerum sequi ipsam blanditiis,
          quo debitis exercitationem molestiae quasi. Nesciunt quod nihil iste
          repudiandae?
        </AnimatedText>
      </section>

      <aside className="flex-[1]">
        <h3>Featured Project</h3>
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
              src=""
              width={500}
              height={500}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <TransitionLink href="/contact" className="absolute inset-0">
            <span className="vh">See EWM Project Case Study</span>
          </TransitionLink>
        </article>
      </aside>
    </div>
  );
};

export default Hero;
