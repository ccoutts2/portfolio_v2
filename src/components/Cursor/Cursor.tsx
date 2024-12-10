"use client";
import styles from "./Cursor.module.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Cursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      gsap.to(cursorRef.current, {
        x: clientX,
        y: clientY,
        duration: 0.3,
      });
    };

    const onMouseEnter = (e: MouseEvent) => {
      if ((e.target as HTMLElement).tagName === "A") {
        gsap.to(cursorRef.current, {
          scale: 3,
          duration: 0.25,
        });
      }
    };

    const onMouseLeave = (e: MouseEvent) => {
      if ((e.target as HTMLElement).tagName === "A") {
        gsap.to(cursorRef.current, {
          scale: 1,
          duration: 0.25,
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
