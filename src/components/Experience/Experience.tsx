"use client";
import styles from "./Experience.module.css";
import classNames from "classnames";
import { experience } from "./data";

import { useInView } from "react-intersection-observer";

const Experience = () => {
  return (
    <section className="p-4">
      <h2 className="text-clamp-home">Experience</h2>
      <ul className="flex flex-col py-4 w-full">
        {experience.map((item, index) => {
          const { ref, inView } = useInView({
            threshold: 0.2,
          });

          return (
            <li
              ref={ref}
              key={index}
              className={`dark:after:bg-[#f6f6f6] ${classNames(
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
              )}`}
            >
              <div className="flex-1">
                <h3 className="font-bold text-gray-400 text-sm">Company</h3>
                <p>{item.company}</p>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-400 text-sm">Role</h3>
                <p>{item.role}</p>
              </div>
              <div className="flex-[0.25]">
                <h3 className="font-bold text-gray-400 text-sm">Year</h3>
                <time dateTime={item.period}>{item.period}</time>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Experience;
