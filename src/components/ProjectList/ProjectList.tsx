"use client";
import { accordionData } from "@/app/work/data";
import { Accordion } from "../Accordion/Accordion";
import ProjectModal from "../ProjectModal/ProjectModal";
import { useEffect, useState } from "react";
import { AccordionItems } from "@/app/work/types";

const ProjectList = () => {
  const [modal, setModal] = useState({ active: false, index: 0 });
  const [projects, setProjects] = useState(null);

  return (
    <>
      <Accordion items={accordionData} />
    </>
  );
};

export default ProjectList;
