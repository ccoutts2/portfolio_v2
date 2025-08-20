import styles from "./BlinkingDot.module.css";

interface BlinkingDotProps {
  status?: "available" | "unavailable";
}

export const BlinkingDot = ({ status = "available" }: BlinkingDotProps) => {
  return (
    <span
      className={` ${
        styles.Blinking
      } flex h-2 w-2 items-center justify-center rounded-[20rem] ${
        status === "available" ? "bg-[#2ed84a]" : "bg-[#d82e2e]"
      }`}></span>
  );
};
