import { NavLink } from "@/components";
import ContactForm from "@/components/ContactForm/ContactForm";
import { PageHeader } from "@/components/layout/header/PageHeader/PageHeader";
import MobileContactForm from "@/components/MobileContactForm/MobileContactForm";

export default async function Page() {
  return (
    <main className="min-h-screen">
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
        <div className="hidden md:flex justify-end w-full flex-[2]">
          <ContactForm />
        </div>
      </div>
      <MobileContactForm />
    </main>
  );
}
