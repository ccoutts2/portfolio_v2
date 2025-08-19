import Link from "next/link";
import { TransitionLink } from "../TransitionLink/TransitionLink";

const Footer = () => {
  return (
    <footer
      className="relative h-[300px] z-[100]"
      style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
    >
      <div className="fixed bottom-0 h-[300px] w-full">
        <div className="flex h-full w-full flex-col justify-between bg-[#FB4D4C] dark:text-[#191919] px-4 py-8 md:px-12">
          <nav className="flex w-full justify-between">
            <section className="flex w-full flex-col justify-between gap-4">
              <h3 className="b-bottom uppercase">Sitemap</h3>
              <ul className="gap-2 flex flex-col">
                <li>
                  <TransitionLink href="/" underline>
                    Home
                  </TransitionLink>
                </li>
                <li>
                  <TransitionLink href="/about" underline>
                    About
                  </TransitionLink>
                </li>
                <li>
                  <TransitionLink href="/work" underline>
                    Work
                  </TransitionLink>
                </li>
                <li>
                  <TransitionLink href="/contact" underline>
                    Contact
                  </TransitionLink>
                </li>
              </ul>
            </section>
            <aside className="flex w-full flex-col justify-between text-right">
              <h3 className="b-bottom uppercase">Let's connect</h3>
              <ul className="gap-4">
                <li className="hidden md:block">
                  <Link href="mailto:Info@ewmbespokeinteriors.co.uk">
                    chris.dcoutts@gmail.com
                  </Link>
                </li>
                <li className="md:hidden">
                  <Link
                    href="mailto:Info@ewmbespokeinteriors.co.uk"
                    target="_blank"
                  >
                    Email
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.linkedin.com/in/chris-coutts/"
                    target="_blank"
                  >
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link href="https://github.com/ccoutts2/" target="_blank">
                    GitHub
                  </Link>
                </li>
              </ul>
            </aside>
          </nav>
          <dl className="flex items-end justify-between">
            <dt className="Website Information"></dt>
            <dd>
              <small>Website designed and built by Chris Coutts</small>
            </dd>
          </dl>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
