import { assetsConfig } from "@/config/assets";

interface ProjectImages {
  description: string;
  src: string;
}

export interface WorkDetails {
  id: number;
  title: string;
  slogan: string;
  information: string;
  projectType: string;
  year: string;
  service: string[];
  tech: string[];
  slug: string;
  images: ProjectImages[];
}

export const workDetails: { [key: string]: WorkDetails } = {
  "ewm-bespoke-interiors": {
    id: 0,
    title: "EWM Bespoke Interiors",
    slogan: "Bespoke Deign: Timeless Craft",
    information:
      "For the Finsbury Square office project, we designed, manufactured, and installed a stylish wall-dividing planter, featuring reeded panelling, integrated banquette seating, and a glazed screen partition. This creative solution not only divides the space but enhances its functionality and aesthetic appeal, providing both seating and visual separation. As part of the project, we also installed client-supplied kitchen units, ensuring seamless integration with the overall design of the office space. The result is a modern and inviting environment that maximises utility while maintaining an elegant, cohesive design.",
    projectType: "Commercial",
    year: "2024",
    service: ["Design", "Development"],
    tech: ["Next.js", "GSAP", "Lenis Scroll", "TailwindCSS", "CSS"],
    slug: "ewm-bespoke-interiors",
    images: assetsConfig.ewm.map(({ description, src }) => ({ description, src })),
  },
  "france-2k23": {
    id: 1,
    title: "France2k23",
    slogan: "France: A Visual Odyssey",
    information:
      "Our Saffron Hill, Farringdon project delivered a comprehensive suite of services, showcasing our expertise in joinery and upholstery. The CMF area was stylishly finished in birch plywood, treated with a white oil stain to achieve a refined, natural look. Our scope included the fabrication and installation of bespoke banquette seating, work pod desks, and new coat cupboards. Additionally, we revitalised existing bookshelves through a meticulous dismantling and respraying process, ensuring they seamlessly integrated with the new design elements. The result was a thoughtfully crafted, functional workspace, with a harmonious balance of form and function, tailored to reflect the aesthetic vision of the top-tier design consultancy while enhancing the overall user experience.",
    projectType: "Farringdon",
    year: "2024",
    service: ["Design", "Development"],
    tech: ["Next.js", "GSAP", "Lenis Scroll", "TailwindCSS", "CSS"],
    slug: "france-2k23",
    images: assetsConfig.ewm.map(({ description, src }) => ({ description, src })),
  },
  triangulate: {
    id: 2,
    title: "Triangulate",
    slogan: "Discover, Rate, and Connect: The Pub Experience Reimagined",
    information:
      "For the Finsbury Square office project, we designed, manufactured, and installed a stylish wall-dividing planter, featuring reeded panelling, integrated banquette seating, and a glazed screen partition. This creative solution not only divides the space but enhances its functionality and aesthetic appeal, providing both seating and visual separation. As part of the project, we also installed client-supplied kitchen units, ensuring seamless integration with the overall design of the office space. The result is a modern and inviting environment that maximises utility while maintaining an elegant, cohesive design.",
    projectType: "London",
    year: "2024",
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
    slug: "triangulate",
    images: assetsConfig.ewm.map(({ description, src }) => ({ description, src })),
  },
};
