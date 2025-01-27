import type { Metadata } from "next";
import "@/app/globals.css";
import { NavBar } from "@/components";
import Footer from "@/components/layout/navigation/Footer/Footer";
import { SmoothScroll } from "@/components/SmoothScroll/SmoothScroll";
import Cursor from "@/components/Cursor/Cursor";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
    <html lang="en">
      <body className={` antialiased dark:bg-[#252126] dark:text-[#f4f3ed]`}>
        <SmoothScroll>
          <NavBar />
          {children}
          <Footer />
          <Cursor />
        </SmoothScroll>
      </body>
    </html>
  );
}
