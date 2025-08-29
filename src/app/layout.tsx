import "@/app/globals.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { NavBar } from "@/components";
import Footer from "@/components/layout/navigation/Footer/Footer";
import { SmoothScroll } from "@/components/SmoothScroll/SmoothScroll";
import Cursor from "@/components/Cursor/Cursor";

export const metadata: Metadata = {
  title: "Chris Coutts - Portfolio",
  description: "Software developer with a huge eye for slick design.",
  icons: {
    icon: "/assets/favicon/favicon-32x32.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`antialiased dark:bg-[--color-background] dark:text-[--color-foreground]`}
      >
        <SmoothScroll>
          <NavBar />
          {children}
          <Analytics />
          <Footer />
          <Cursor />
        </SmoothScroll>
      </body>
    </html>
  );
}
