import Hero from "@/components/layout/Hero/Hero";
import PreLoader from "@/components/PreLoader/PreLoader";
import { Mockups } from "@/components/ui/Mockups/Mockups";

export default async function Page() {
  return (
    <main>
      <PreLoader />
      <Hero />
    </main>
  );
}
