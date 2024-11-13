import styles from "./Icon.module.css";

interface IconProps {
  children: React.ReactNode;
}

export const Icon = ({ children }: IconProps) => {
  return <span className={styles.Icon}>{children}</span>;
};
