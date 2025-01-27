"use client";
import styles from "./Cursor.module.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      gsap.to(cursorRef.current, {
        x: clientX,
        y: clientY,
        duration: 0.3,
        ease: "power1.out",
      });
    };

    const onMouseEnter = (e: MouseEvent) => {
      if ((e.target as HTMLElement).tagName === "A") {
        gsap.to(cursorRef.current, {
          scale: 3.5,
          duration: 0.25,
          ease: "power1.out",
        });
      }
    };

    const onMouseLeave = (e: MouseEvent) => {
      if ((e.target as HTMLElement).tagName === "A") {
        gsap.to(cursorRef.current, {
          scale: 1,
          duration: 0.25,
          ease: "power1.out",
        });
      }
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseover", onMouseEnter);
    document.addEventListener("mouseout", onMouseLeave);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onMouseEnter);
      document.removeEventListener("mouseout", onMouseLeave);
    };
  }, []);

  return <div ref={cursorRef} className={styles.Cursor}></div>;
};

export default Cursor;
