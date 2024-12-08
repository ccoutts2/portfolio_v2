import { TransitionLink } from "@/components/layout/navigation/TransitionLink/TransitionLink";
import Link from "next/link";

export const ContactMe = () => {
  return (
    <section className="p-4 flex justify-end">
      <div className="relative w-fit p-4">
        <h2>Contact Me</h2>
        <p>I&apos;m up for any kind of conversation!</p>
        <p>
          You can get in touch by either filling out the
          <TransitionLink href="/contact">
            {" "}
            <span className="font-bold text-[#442c35] dark:text-[#f40c3f]">
              contact form
            </span>
          </TransitionLink>{" "}
          or by pinging me an{" "}
          <Link href="mailto:chris.dcoutts@gmail.com" target="_blank">
            email
          </Link>
        </p>

        <svg
          className="absolute top-0 left-0"
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <line x1="0.5" y1="0.5" x2="0.499999" y2="20.5" stroke="#666666" />
          <line x1="21" y1="1" x2="1" y2="1" stroke="#666666" />
        </svg>

        <svg
          className="absolute bottom-0 right-0"
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <line x1="20.5" y1="20" x2="20.5" y2="-6.55671e-08" stroke="#666666" />
          <line x1="4.37114e-08" y1="19.5" x2="20" y2="19.5" stroke="#666666" />
        </svg>
      </div>
    </section>
  );
};
