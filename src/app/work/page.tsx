import { PageHeader } from "@/components/layout/header/PageHeader/PageHeader";
import ProjectList from "@/components/ProjectList/ProjectList";
import { accordionData } from "./data";

export default async function Page() {
  return (
    <main className="min-h-screen relative">
      <div className="flex">
        <PageHeader label="My Work" />
        <span className="text-clampHome">({accordionData.length})</span>
      </div>
      <ProjectList />
    </main>
  );
}
