import { experience } from "./data";
import { ExperienceItem } from "@/components/Experience/ExperienceItem";

const Experience = () => {
  return (
    <section className="p-4">
      <h2 className="text-clamp-home">Experience</h2>
      <ul className="flex flex-col py-4 w-full">
        {experience.map((item) => (
          <ExperienceItem item={item} />
        ))}
      </ul>
    </section>
  );
};

export default Experience;
