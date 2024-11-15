import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface AnimatedImageProps {
  children: React.ReactNode;
  delay: number;
}

const AnimatedImage = ({ children, delay }: AnimatedImageProps) => {
  const container = useRef<HTMLDivElement | null>(null);
  const imageContainerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      gsap.set(imageContainerRef.current, {
        clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
      });
      gsap.to(imageContainerRef.current, {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        delay: delay,
        duration: 1.5,
        ease: "power4.inOut",
      });
    },
    { scope: container, dependencies: [] }
  );

  return (
    <div ref={container}>
      <div ref={imageContainerRef}>{children}</div>
    </div>
  );
};

export default AnimatedImage;
