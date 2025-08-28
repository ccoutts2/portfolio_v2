"use client";
import { useInView } from "react-intersection-observer";
import styles from "./ExperienceItem.module.css";
import classNames from "classnames";

interface ExperienceItemProps {
  item: {
    id: number;
    company: string;
    role: string;
    period: string;
  };
}
export const ExperienceItem = ({ item }: ExperienceItemProps) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  return (
    <li
      ref={ref}
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
};
