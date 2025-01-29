"use client";
import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

type Theme = "light" | "dark";

const ThemeSwitch = () => {
  if (typeof window === "undefined") return null;

  const [theme, setTheme] = useState<Theme>("light");
  const [isThemeClicked, setIsThemeClicked] = useState(false);
  const container = useRef<HTMLDivElement | null>(null);
  const lightTextRef = useRef<HTMLElement | null>(null);
  const darkTextRef = useRef<HTMLElement | null>(null);

  const tl = useRef<GSAPTimeline | null>();

  useGSAP(
    () => {
      gsap.set(darkTextRef.current, { autoAlpha: 0, translateY: "50%" });

      tl.current = gsap
        .timeline({ paused: true })
        .to(
          lightTextRef.current,
          {
            translateY: "-50%",
            autoAlpha: 0,
            duration: 0.85,
            ease: "power4.inOut",
          },
          "<"
        )
        .to(
          darkTextRef.current,
          {
            translateY: "-100%",
            autoAlpha: 1,
            duration: 0.85,
            ease: "power4.inOut",
          },
          "<"
        );
    },
    { scope: container }
  );

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }

    console.log(isThemeClicked);
    setIsThemeClicked(!isThemeClicked);
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme") as Theme | null;

    if (localTheme) {
      setTheme(localTheme);

      if (localTheme === "dark") {
        document.documentElement.classList.add("dark");
      }
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    if (isThemeClicked) {
      tl.current?.play();
    } else {
      tl.current?.reverse();
    }
  }, [isThemeClicked]);

  return (
    <button
      onClick={toggleTheme}
      className="border rounded-3xl border-[#191919] dark:border-[white] px-2">
      <span
        className="flex flex-col overflow-hidden h-[1.34rem] text-sm"
        ref={container}>
        <span ref={lightTextRef}>Light</span>
        <span ref={darkTextRef}>Dark</span>
      </span>
    </button>
  );
};

export default ThemeSwitch;
