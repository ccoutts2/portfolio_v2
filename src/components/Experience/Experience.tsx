"use client";
import styles from "./Experience.module.css";
import { useState } from "react";
import classNames from "classnames";
import { ExperienceDetails } from "./data";

import { useInView } from "react-intersection-observer";
import Link from "next/link";

interface ExperienceProps {
  experiences: ExperienceDetails[];
}

const Experience = ({ experiences }: ExperienceProps) => {
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);

  const filteredExperiences = selectedFilter
    ? experiences.filter((item) => item.filter === selectedFilter)
    : experiences;

  const refs = experiences.map(() => useInView({ threshold: 0.2 }));

  return (
    <section className="p-4">
      <h2 className="text-clampHome">Experience</h2>
      <ul className="flex gap-6 items-center">
        <div className="flex gap-2 items-center relative">
          <p>All</p>

          <span
            className={classNames(
              "border rounded-[999px] pt-[1px] px-[6px] pb-[2px] text-[0.8rem] mt-[0.2rem]",
              {
                "bg-gray-800 text-white": selectedFilter === null,
              }
            )}>
            {experiences.length}
          </span>

          <Link className="absolute inset-0" href="/about">
            <span className="vh">Show filter results for all</span>
          </Link>
        </div>
        {[...new Set(experiences.map(({ filter }) => filter))].map(
          (filter, index) => (
            <li key={index}>
              <div className="flex gap-2 items-center relative">
                <span
                  className={classNames("border rounded-3xl px-4 py-1 capitalize", {
                    "bg-gray-800 text-white": selectedFilter === filter,
                  })}>
                  {filter}
                </span>
                <span
                  className={classNames(
                    "border relative rounded-[999px] pt-[1px] px-[6px] pb-[2px] text-[0.8rem] mt-[0.2rem]",
                    {
                      "bg-gray-800 text-white": selectedFilter === null,
                    }
                  )}>
                  {filter.length}
                </span>
                <Link
                  href={`/about?filter[experience]=${filter}`}
                  className="absolute inset-0">
                  <span className="vh">{`Show filter results for ${filter}`} </span>
                </Link>
              </div>
            </li>
          )
        )}
      </ul>
      <ul className="flex flex-col py-4 w-full">
        {filteredExperiences.map((item, index) => {
          const { ref, inView } = refs[index];

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
                "dark:after:bg-[#f6f6f6]",
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
