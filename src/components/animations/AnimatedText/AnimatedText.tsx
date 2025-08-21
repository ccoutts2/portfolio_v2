"use client";
import styles from "./AnimatedText.module.css";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitType from "split-type";

interface AnimatedTextProps {
  children: React.ReactNode;
  delay: number;
}

export const AnimatedText = ({ children, delay }: AnimatedTextProps) => {
  const container = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const hasPlayed = localStorage.getItem("preLoader");

      if (textRef.current) {
        const splitTextInstance = new SplitType(textRef.current, {
          types: "words",
        });

        gsap.to(splitTextInstance.words, {
          y: "0%",
          autoAlpha: 1,
          delay: hasPlayed ? delay : 4,
          stagger: 0.01,
          duration: 1.2,
        });
      }
    },
    { scope: container, dependencies: [] }
  );

  return (
    <div ref={container}>
      <div ref={textRef} className={styles.Word}>
        {children}
      </div>
    </div>
  );
};
