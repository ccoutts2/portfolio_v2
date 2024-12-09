import { ContactMe } from "@/components";
import AboutIntro from "@/components/AboutIntro/AboutIntro";
import Experience from "@/components/Experience/Experience";
import { PageHeader } from "@/components/layout/header/PageHeader/PageHeader";
import { experience, ExperienceDetails, Roles } from "@/components/Experience/data";

export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const experienceFilter = searchParams["filter[experience]"] as string;

  const filterResults = (experiences: ExperienceDetails[]) => {
    if (experienceFilter) {
      return experiences.filter((exp) => exp.filter === experienceFilter);
    }

    return experiences;
  };

  const filteredExperience = filterResults(experience);

  return (
    <main>
      <PageHeader label="About Me" />
      <AboutIntro />
      <Experience experiences={filteredExperience} />
      <ContactMe />
    </main>
  );
}
