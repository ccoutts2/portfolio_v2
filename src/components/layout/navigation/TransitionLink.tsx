"use client";
import { useRouter } from "next/navigation";
import Link, { LinkProps } from "next/link";

interface TransitionLinkProps extends LinkProps {
  children: React.ReactNode;
  href: string;
}

const sleep = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const TransitionLink = ({
  children,
  href,
  ...props
}: TransitionLinkProps) => {
  const router = useRouter();

  const handleTransition = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();

    const main = document.querySelector("main");
    main?.classList.add("PageTransition");
    await sleep(800);
    router.push(href);
    await sleep(800);
    main?.classList.remove("PageTransition");
  };
  return (
    <Link onClick={handleTransition} href={href} {...props}>
      {children}
    </Link>
  );
};
