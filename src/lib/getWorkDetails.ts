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
  information2: string[];
  projectType: string;
  year: string;
  service: string[];
  tech: string[];
  slug: string;
  images: ProjectImages[];
  liveSite: string;
}

export const workDetails: { [key: string]: WorkDetails } = {
  triangulate: {
    id: 0,
    title: "Triangulate",
    slogan: "Discover, Rate, and Connect: The Pub Experience Reimagined",
    information:
      "Triangulate was my first full stack baby. An idea born through two separate friends groups. One friend has been rating pubs around the UK for years now, and stores his data in an ugly looking spreadsheet. Another group of friends wanted an app which helped you and your friends identify the most central point to meet. With my new found tech skillset, I decided to create an app which could do both. This project was for my Capstone project and I only had two weeks to design and develop it. I think I did okay, given it was my first full stack app!",
    information2: [
      "The main features of this app included signing up and logging in, creating and joining groups, seeing your friends' locations in the group on a map, calculating the most central point between you and your friends, adding pub markers to the map, rating pubs, and finding out the closest pubs to you based on your live location. Long list!",
      "As well as making sure the features of the app were built, I wanted to design something which caught the users eye. I decided to go for a fairly monochrome look, with not too many colours. I'm quite a visual person and if something doesn't look good, it removes some of the appeal of using.",
      "This is defintitely a project I'd like to revist, and probably rebuild using my new favourite framework - SvelteKit. I feel way more competent in my abilities to deliver an app me and my friends would love to use, while enhancing the current features and expanding in the future.",
    ],
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
    images: assetsConfig.ewm.map(({ description, src }) => ({
      description,
      src,
    })),
    liveSite: "https://github.com/ccoutts2/triangulate-project",
  },
  "france-2k23": {
    id: 1,
    title: "France2k23",
    slogan: "France: A Visual Odyssey",
    information:
      "France2k23 was a personal project of mine, delving into the capabilities of animation frameworks such as GSAP and Framer Motion. I wanted this to be an immersive experience for the user, and guide them on the same journey I took for the Rugby World Cup. I've always been passionate about rugby and travelling, so this was the perfect project to let you, yes you, gain a little insight into what I enjoy. I made many memories on this trip, so it was nice to turn these memories into an everlasting (I hope) trip.",
    information2: [
      "What better way to tell people about my travels through France, than to bring it to life through immersive visualisation. The site features different visual animations.",
      "The hero section for each of the city pages dives you into the experience. The parallax effect encapsulates this perfectly, with images flying towards you.",
      "The next section features a vignette experience. While scrolling through each of the main pictures, you can see a different angle of the experience through a mouse hover effect. The image changes as you scroll onto the next image and so forth.",
      "Finally, I implement the same effect but hovering over text. The image displayed relates to the text. Each text represents a memory of mine - signigifcant or small.",
    ],
    projectType: "Personal",
    year: "2024",
    service: ["Design", "Development"],
    tech: [
      "Next.js",
      "GSAP",
      "Framer Motion",
      "Lenis Scroll",
      "TailwindCSS",
      "CSS",
    ],
    slug: "france-2k23",
    images: assetsConfig.ewm.map(({ description, src }) => ({
      description,
      src,
    })),
    liveSite: "https://france2k23.chris-coutts.com",
  },
  "ewm-bespoke-interiors": {
    id: 2,
    title: "EWM Bespoke Interiors",
    slogan: "Bespoke Deign: Timeless Craft",
    information:
      "I worked with EWM Bespoke Interiors to design and build a website that truly showcased their incredible craftsmanship and attention to detail. The site featured their portfolio of diverse projects, including stone surfaces and tailored joinery, presented in a clean, modern design. I focused on creating a user-friendly experience that made it easy to explore their work while reflecting the quality and care they put into everything they do. By adding features to simplify client enquiries, the website became both practical and visually stunning - a perfect match for their bespoke approach",
    information2: [
      "The projects section serves as the centerpiece of the site, embodying the core purpose of showcasing the client's diverse portfolio of work. Designed to captivate past, present, and future clients, this section highlights the breadth and craftsmanship of their projects, ensuring it stands out as a testament to their expertise.",
      "The main project page introduces a sleek and interactive card-style layout, where each card provides a concise overview of an individual project. Key details such as the project's title, a brief description, location, and an image are presented, creating an inviting gateway to the full project details. EWM are represented by the colour organge, which is why the design choice was made to have orange cards.",
      "Each project is displayed in a carefully crafted two-section layout; image and content. A full-height image scrolling carousel or single image display visually immerses the user in the project, giving prominence to the aesthetic and technical qualities of the work, and the image section adapts seamlessly across screen sizes, occupying the full viewport on mobile for maximum visual impact.",
      "The information section contains the project's detailed description, title, location, and other relevant information. On wider screens, the information is displayed alongside the images, offering a comprehensive view at a glance. For mobile users, the design prioritizes simplicity and focus: the images dominate the screen, and additional details are accessible via an intuitive button. Clicking this button reveals a modal overlay containing all the project's information, ensuring accessibility without cluttering the layout",
    ],
    projectType: "Commercial",
    year: "2024",
    service: ["Design", "Development"],
    tech: ["Next.js", "GSAP", "Lenis Scroll", "TailwindCSS", "CSS"],
    slug: "ewm-bespoke-interiors",
    images: assetsConfig.ewm.map(({ description, src }) => ({
      description,
      src,
    })),
    liveSite: "https://www.ewmbespokeinteriors.co.uk",
  },
  "wedding-website": {
    id: 3,
    title: "Wedding Website",
    slogan: "Your Presence: The Greatest Gift",
    information:
      "I worked with a couple to bring wedding RSVP's into the digital era, but also use it as a platform to tell their story. The site featured routes for guests to RSVP, and put down their preferences for their meals. They could also use the platofrm to find out information about getting to the venue as well as accomodation. The engaged couple had their admin panel (only accessibile to them) so they could have an overview of all responses, to help them better organise the event.",
    information2: [
      "What better way to avoid postal issues than to bring your wedding RSVP capabilities to the digital world. Not only were my clients looking for a way to manage RSVP's, but they also wanted to sahre their story and create a wesbite which reflected them. They could have easily gone down the route of building a website using  free tool, but I offered them full customisation - an offer they couldn't refuse.",
      "Core features of the site included: password protection and routes for guests/admins, guest RSVP, admin ability to add guests and view all guests and curent state of responses in a table, coach transfer request and logistics information, an image gallery of the couple's hourney, and finally information surrounding the event in general.",
      "Initially the guests had to be added by the admins and upon adding them through a form, an email was triggered to the guest's email containing an invitiation, link to the site, and password for access.",
      "I wanted to make the authentication process as simple as possible, so once a guest was added and they had logged into the site, a way for them to RSVP (and essentially authneticate) was by putting their email address through a check to see if it matched what was in the database.",
      "As this site is password protected, and the wedding is still to come, I am not providing the password to enter the site out of respect for my client's privacy.",
    ],
    projectType: "Commercial",
    year: "2025",
    service: ["Design", "Development"],
    tech: [
      "SvelteKit",
      "PostgreSQL",
      "Prisma",
      "Supabase",
      "Resend",
      "GSAP",
      "TailwindCSS",
      "SCSS",
    ],
    slug: "wedding-website",
    images: assetsConfig.ewm.map(({ description, src }) => ({
      description,
      src,
    })),
    liveSite: "https://www.clareanddavidwedding26.org/",
  },
};
