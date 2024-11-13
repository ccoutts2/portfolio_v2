"use client";
import styles from "./TransitionLink.module.css";
import { useRouter } from "next/navigation";
import Link, { LinkProps } from "next/link";

import classNames from "classnames";

interface TransitionLinkProps extends LinkProps {
  children: React.ReactNode;
  href: string;
  underline?: boolean;
}

const sleep = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const TransitionLink = ({
  children,
  href,
  underline = false,
  ...props
}: TransitionLinkProps) => {
  const router = useRouter();

  const handleTransition = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();

    const body = document.querySelector("body");
    body?.classList.add("PageTransition");
    await sleep(800);
    router.push(href);
    await sleep(800);
    body?.classList.remove("PageTransition");
  };
  return (
    <Link
      onClick={handleTransition}
      href={href}
      {...props}
      className={classNames(underline ? styles.HoverAnimation : "")}>
      {children}
    </Link>
  );
};
