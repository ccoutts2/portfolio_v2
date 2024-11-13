import styles from "./Icon.module.css";

interface IconProps {
  children: React.ReactNode;
}

const Icon = ({ children }: IconProps) => {
  return <span className={styles.Icon}>{children}</span>;
};

export default Icon;
