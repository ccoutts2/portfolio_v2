import Link, { LinkProps } from "next/link";

export interface NavLinkProps extends LinkProps {
  href: string;
  children: React.ReactNode;
}

export const NavLink = ({ href, children, ...props }: NavLinkProps) => {
  return (
    <Link
      href={href}
      {...props}
      className="text-black dark:text-[#f6f6f6] underline">
      {children}
    </Link>
  );
};
