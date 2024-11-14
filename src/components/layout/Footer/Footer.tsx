import Link from "next/link";

interface FooterProps {}
const Footer = () => {
  return (
    <footer
      className="relative h-[300px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}>
      <div className="fixed bottom-0 h-[300px] w-full">
        <div className="flex h-full w-full flex-col justify-between bg-[#3C4254] px-4 py-8 text-[#e4e8ed]  md:px-12 lg:px-32">
          <nav className="flex w-full justify-between">
            <div className="flex w-full flex-col justify-between">
              <h3 className="b-bottom uppercase text-[#F17A14]">Navigation</h3>
              <ul className="gap-4">
                <li>nice</li>
              </ul>
            </div>
            <section className="flex w-full flex-col justify-between text-right">
              <h3 className="b-bottom uppercase text-[#F17A14]">Contact details</h3>
              <ul className="gap-4">
                <li className="text-sm md:text-base">
                  <Link href="mailto:Info@ewmbespokeinteriors.co.uk">
                    <p>info@ewmbespokeinteriors.co.uk</p>
                  </Link>
                </li>
                <li>07515829261</li>
                <li>07734387217</li>
              </ul>
            </section>
          </nav>
          <div className="flex items-end justify-between">
            <Link href="/">
              <div className="h-[5rem] w-[10rem]">
                <img
                  className="h-full w-full rounded-md object-cover"
                  src="/assets/logos/ewm.jpg"
                  alt="EWM company logo"
                />
              </div>
            </Link>
            <ul className="flex gap-4">
              <li>hi</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
