import { assetsConfig } from "@/config/assets";

import { AccordionItems } from "./types";

export const accordionData: AccordionItems[] = [
  {
    title: "Wedding Website",
    content:
      "A website for a couple who can host their special day information, invite guests, have guests RSVP, and manage their responses",
    service: ["Design", "Development"],
    tech: [
      "SvelteKit",
      "PostgreSQL",
      "Prisma",
      "Supabase",
      "GSAP",
      "TailwindCSS",
      "SCSS",
    ],
    image: assetsConfig["wedding-website"][0].src,
    alt: assetsConfig["wedding-website"][0].description,
    slug: "/wedding-website",
    year: "2024",
    project: "Commercial",
  },
  {
    title: "Effortless Interior Design",
    content:
      "A website for an Interior Designer, showcasing her work, services, and new online shop for selling 'Off the Peg Design Schemes'",
    service: ["Design", "Development"],
    tech: [
      "Next.js",
      "PostgreSQL",
      "Prisma",
      "Stripe",
      "Vercel",
      "GSAP",
      "Framer Motion",
      "Lenis Scroll",
      "TailwindCSS",
      "CSS",
    ],
    image: assetsConfig["ewm-bespoke-interiors"][0].src,
    alt: assetsConfig["ewm-bespoke-interiors"][0].description,
    slug: "coming-soon/effortless-interior-design",
    year: "2024",
    project: "Commercial",
  },
  {
    title: "EWM Bespoke Interiors",
    content:
      "A website for a Bespoke Joinery company which transfers residential and commmerical spaces",
    service: ["Design", "Development"],
    tech: ["Next.js", "GSAP", "Lenis Scroll", "TailwindCSS", "CSS"],
    image: assetsConfig["ewm-bespoke-interiors"][0].src,
    alt: assetsConfig["ewm-bespoke-interiors"][0].description,
    slug: "ewm-bespoke-interiors",
    year: "2024",
    project: "Commercial",
  },

  {
    title: "France2k23",
    content:
      "An immersive image gallery experience, telling the story of my trip to France during the Rugby World Cup in 2023",
    service: ["Design", "Development"],
    tech: ["Next.js", "GSAP", "Lenis Scroll", "TailwindCSS", "CSS"],
    image: assetsConfig["france-2k23"][0].src,
    alt: assetsConfig["france-2k23"][0].description,
    slug: "france-2k23",
    year: "2024",
    project: "Personal",
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
    image: assetsConfig["ewm-bespoke-interiors"][0].src,
    alt: assetsConfig["ewm-bespoke-interiors"][0].description,
    slug: "triangulate",
    year: "2024",
    project: "Personal",
  },
];
