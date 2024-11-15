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
      if (textRef.current) {
        const splitTextInstance = new SplitType(textRef.current, {
          types: "words",
        });

        gsap.to(splitTextInstance.words, {
          y: "0%",
          autoAlpha: 1,
          delay: delay,
          stagger: 0.01,
          duration: 1.3,
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
