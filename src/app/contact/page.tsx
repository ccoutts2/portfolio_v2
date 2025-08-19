import ContactForm from "@/components/ContactForm/ContactForm";
import { PageHeader } from "@/components/layout/header/PageHeader/PageHeader";
import Link from "next/link";

export default async function Page() {
  return (
    <main>
      <PageHeader label="Contact Me" />
      <div className="flex flex-col md:flex-row gap-8 md:gap-0 p-4 md:px-8">
        <aside className="text-sm flex flex-col flex-[1] gap-1">
          <h2>Get in touch </h2>
          <p>
            Fill in the form or{" "}
            <span className="italic">
              <Link href="mailto:chris.dcoutts@gmail.com" target="_blank">
                email me
              </Link>
            </span>
          </p>
          <strong className="text-3xl pt-8 font-normal">
            Let&apos;s start working <span className="italic">together</span>
          </strong>
        </aside>
        <div className="flex justify-end w-full flex-[2]">
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
