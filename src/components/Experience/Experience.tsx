"use client";
import styles from "./Experience.module.css";
import classNames from "classnames";
import { experience } from "./data";

import { useInView } from "react-intersection-observer";
import { AnimatedText } from "../animations/AnimatedText/AnimatedText";
import Image from "next/image";
import { assetsConfig } from "@/config/assets";

const Experience = () => {
  return (
    <section className="p-4">
      <div>
        <AnimatedText delay={1.25}>
          <p className="text-clampPageIntro">
            <span className="ml-12">I&apos;m</span> a full stack developer who
            transitioned into the tech industry through a{" "}
            <span className="text-[#442c35] font-bold">passion</span> for building
            and creating. I love turning ideas into reality, whether that be building
            apps for me and my friends to use, or collaborating with clients to bring
            their <span className="text-[#442c35] font-bold">visions</span> to life.
            For me, every line of code is an{" "}
            <span className="text-[#442c35] font-bold">opportunity</span> to solve
            problems and make a difference.
          </p>
        </AnimatedText>
      </div>
      <div className="flex flex-col-reverse md:flex-row justify-between p-4 py-12 md:p-12">
        <div className="flex-[1]">
          <p className="text-lg">
            I come with a diverse background in both engineering and technology.
            Originally holding a Master&apos;s in Chemical Engineering, I
            transitioned into the tech industry and now, I&apos;m focused on building
            cutting-edge solutions in software development. My journey has been
            marked by continuous upskilling, freelancing, and a passion for
            problem-solving within business and technical environments
          </p>
        </div>
        <aside className="w-clampSmallImages flex flex-wrap gap-4">
          <figure className="max-h-[10rem]">
            <Image
              src={assetsConfig["new-street"][0].src}
              alt={assetsConfig["new-street"][0].description}
              width={assetsConfig["new-street"][0].width}
              height={assetsConfig["new-street"][0].height}
              className="w-full h-full object-cover"
            />
          </figure>
          <figure className="max-h-[10rem]">
            <Image
              src={assetsConfig["new-street"][0].src}
              alt={assetsConfig["new-street"][0].description}
              width={assetsConfig["new-street"][0].width}
              height={assetsConfig["new-street"][0].height}
              className="w-full h-full object-cover"
            />
          </figure>

          <figure className="max-h-[10rem]">
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
      <h2 className="text-clampHome">Experience</h2>
      <ul className="flex flex-col py-4 w-full">
        {experience.map((item, index) => {
          const { ref, inView } = useInView({
            threshold: 0.2,
          });

          return (
            <li
              ref={ref}
              key={index}
              className={classNames(
                styles.ListItem,
                "flex",
                "relative",
                "flex-col",
                "md:flex-row",
                "py-2",
                "justify-between",
                "items-start",
                "gap-4",
                {
                  [styles.InView]: inView,
                }
              )}>
              <div className="flex-[1]">
                <h3 className="font-bold text-gray-400 text-sm">Company</h3>
                <p>{item.company}</p>
              </div>
              <div className="flex-[1]">
                <h3 className="font-bold text-gray-400 text-sm">Role</h3>
                <p>{item.role}</p>
              </div>
              <div className="flex-[0.25]">
                <h3 className="font-bold text-gray-400 text-sm">Year</h3>
                <time>{item.period}</time>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Experience;
