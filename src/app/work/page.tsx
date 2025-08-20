import { PageHeader } from "@/components/layout/header/PageHeader/PageHeader";
import { accordionData } from "./data";
import { Accordion } from "@/components/Accordion/Accordion";

export default async function Page() {
  return (
    <main className="min-h-screen relative">
      <div className="flex">
        <PageHeader label="My Work" />
        <span className="text-clamp-home">({accordionData.length})</span>
      </div>
      <Accordion items={accordionData} />
    </main>
  );
}
