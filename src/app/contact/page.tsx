import { NavLink } from "@/components";
import ContactForm from "@/components/ContactForm/ContactForm";
import { PageHeader } from "@/components/layout/header/PageHeader/PageHeader";

export default async function Page() {
  return (
    <main>
      <PageHeader label="Contact Me" />
      <div className="flex p-4 px-8">
        <aside className="text-sm flex flex-col flex-[1]">
          <h2>Get in touch </h2>
          <p>
            Fill in the form or{" "}
            <span className="italic">
              <NavLink href="mailto:chris.dcoutts@gmail.com">email me</NavLink>
            </span>
          </p>
        </aside>
        <div className="flex justify-end w-full flex-[2]">
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
