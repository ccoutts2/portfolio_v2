import { ContactMe } from "@/components";
import AboutIntro from "@/components/AboutIntro/AboutIntro";
import Experience from "@/components/Experience/Experience";
import FunBio from "@/components/FunBio/FunBio";
import { PageHeader } from "@/components/layout/header/PageHeader/PageHeader";

export default async function Page() {
  return (
    <main>
      <PageHeader label="About Me" />
      <AboutIntro />
      <Experience />
      <ContactMe />
      <div className="flex items-center justify-center my-[5vh] md:my-[20vh] relative">
        <FunBio />
      </div>
    </main>
  );
}
