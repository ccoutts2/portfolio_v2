export enum Roles {
  FREELANCE = "freelance",
  PERMANENT = "permanent",
}

export interface ExperienceDetails {
  company: string;
  role: string;
  period: string;
  filter: string;
}

export const experience: ExperienceDetails[] = [
  {
    company: "Sunderland Software City",
    role: "Junior Software Developer",
    period: "2024 - now",
    filter: Roles.PERMANENT,
  },
  {
    company: "Effortless Interior Designer",
    role: "Freelance Design and Development",
    period: "2024 - now",
    filter: Roles.FREELANCE,
  },
  {
    company: "EWM Bespoke Interiors",
    role: "Freelance Design and Development",
    period: "2024",
    filter: Roles.FREELANCE,
  },
];
