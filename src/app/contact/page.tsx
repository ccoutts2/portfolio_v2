import { NavLink } from "@/components";
import { PageHeader } from "@/components/layout/header/PageHeader/PageHeader";

export default async function Page() {
  return (
    <main>
      <PageHeader label="Contact Me" />
      <div className="flex">
        <aside className="text-sm p-4 px-8 flex flex-col">
          <h2>Get in touch </h2>
          <p>
            Fill in the form or{" "}
            <span className="italic">
              <NavLink href="mailto:chris.dcoutts@gmail.com">email me</NavLink>
            </span>
          </p>
        </aside>
        <form></form>
      </div>
    </main>
  );
}
