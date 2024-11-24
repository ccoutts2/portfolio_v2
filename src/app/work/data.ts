import { assetsConfig } from "@/config/assets";

import { AccordionItems } from "./types";

export const accordionData: AccordionItems[] = [
  {
    title: "EWM Bespoke Interiors",
    content:
      "A website for a Bespoke Joinery company which transfers residential and commmerical spaces",
    service: ["Design", "Development"],
    tech: ["Next.js", "GSAP", "Lenis Scroll", "TailwindCSS", "CSS"],
    image: assetsConfig["new-street"][0].src,
    alt: assetsConfig["new-street"][0].description,
  },

  {
    title: "France2k23",
    content:
      "An immersive image gallery experience, telling the story of my trip to France during the Rugby World Cup in 2023",
    service: ["Design", "Development"],
    tech: [
      "Next.js",
      "PostgreSQL",
      "Prisma",
      "GSAP",
      "Lenis Scroll",
      "TailwindCSS",
      "CSS",
    ],
    image: assetsConfig["new-street"][1].src,
    alt: assetsConfig["new-street"][1].description,
  },
  {
    title: "Triangulate",
    content:
      "An immersive map experience, allowing users to join groups, post pubs onto group maps, rate the pub and calculate the most central point to meet between the group members",
    service: ["Design", "Development"],
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "Knex.js",
      "MySQL",
      "Mapbox",
      "SCSS",
    ],
    image: assetsConfig["new-street"][2].src,
    alt: assetsConfig["new-street"][2].description,
  },
];
