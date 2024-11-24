import { accordionData } from "@/app/work/data";
import { Accordion } from "../Accordion/Accordion";

const ProjectList = () => {
  return (
    <>
      <Accordion items={accordionData} />
    </>
  );
};

export default ProjectList;
