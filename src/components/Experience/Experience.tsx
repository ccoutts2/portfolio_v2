import styles from "./Experience.module.css";
import classNames from "classnames";
import { experience } from "./data";

const Experience = () => {
  return (
    <section className="p-4">
      <h2 className="text-clampHome">Experience</h2>
      <ul className="flex flex-col gap-4 py-2 w-full">
        {experience.map((item, index) => (
          <li
            key={index}
            className={classNames(
              styles.ListItem,
              "flex",
              "relative",
              "flex-col",
              "md:flex-row",
              "justify-between",
              "items-start",
              "gap-2",
              "md:gap-4"
            )}>
            <div className="flex-[1]">
              <h3 className="font-bold">Company</h3>
              <p>{item.company}</p>
            </div>
            <div className="flex-[1]">
              <h3 className="font-bold">Role</h3>
              <p>{item.role}</p>
            </div>
            <div className="flex-[1]">
              <h3 className="font-bold">Year</h3>
              <time>{item.period}</time>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Experience;
