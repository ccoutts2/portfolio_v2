"use client";
import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

type Theme = "light" | "dark";

const ThemeSwitch = () => {
  const [theme, setTheme] = useState<Theme>("light");
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
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    window.localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme") as Theme | null;

    if (localTheme) {
      setTheme(localTheme);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      tl.current?.play();
    } else {
      document.documentElement.classList.remove("dark");
      tl.current?.reverse();
    }
  }, [theme, tl]);

  return (
    <button
      onClick={toggleTheme}
      className="border rounded-3xl border-[#191919] dark:border-[white] px-2 cursor-pointer"
    >
      <span
        className="flex flex-col overflow-hidden h-[1.34rem] text-sm"
        ref={container}
      >
        <span className="capitalize" ref={lightTextRef}>
          Light
        </span>
        <span className="capitalize" ref={darkTextRef}>
          Dark
        </span>
      </span>
    </button>
  );
};

export default ThemeSwitch;
