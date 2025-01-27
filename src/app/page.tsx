import Hero from "@/components/layout/Hero/Hero";
import PreLoader from "@/components/PreLoader/PreLoader";

export default async function Page() {
  return (
    <main>
      <PreLoader />
      <Hero />
    </main>
  );
}
