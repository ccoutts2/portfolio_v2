import { PageHeader } from "@/components/layout/header/PageHeader/PageHeader";
import ProjectList from "@/components/ProjectList/ProjectList";

export default async function Page() {
  return (
    <main className="h-screen relative">
      <PageHeader label="My Work" />
      <ProjectList />
    </main>
  );
}
