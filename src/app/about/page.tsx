import { ContactMe } from "@/components";
import AboutIntro from "@/components/AboutIntro/AboutIntro";
import Experience from "@/components/Experience/Experience";
import { ImageZoomScroll } from "@/components";
import { PageHeader } from "@/components/layout/header/PageHeader/PageHeader";

export default async function Page() {
  return (
    <main>
      <PageHeader label="About Me" />
      <AboutIntro />
      <Experience />
      <ContactMe />
      <ImageZoomScroll />
    </main>
  );
}
