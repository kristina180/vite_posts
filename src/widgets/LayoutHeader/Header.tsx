import styles from "./Header.module.css";
import ThemeSwitcher from "../../features/ThemeSwitcher/ui/ThemeSwitcher";

export default function Header({ theme }: { theme: "light" | "dark" }) {
  return (
    <header className={`${styles.section} ${styles[theme]}`}>
      <p>Header</p>
      <ThemeSwitcher />
    </header>
  );
}
