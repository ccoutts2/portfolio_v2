import { ContactMe } from "@/components";
import AboutIntro from "@/components/AboutIntro/AboutIntro";
import Experience from "@/components/Experience/Experience";
import { PageHeader } from "@/components/layout/header/PageHeader/PageHeader";

export default async function Page() {
  return (
    <main>
      <PageHeader label="About Me" />
      <AboutIntro />
      <Experience />
      <ContactMe />
    </main>
  );
}
