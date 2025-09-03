import styles from "./Header.module.css";
import { ThemeSwitcher } from "../../features/ThemeSwitcher/ui/ThemeSwitcher";
import type { Theme } from "../../shared/lib/theme/ThemeContext";
import type { FC } from "react";

export const Header: FC<{ theme: Theme }> = ({ theme }) => {
  return (
    <header className={`${styles.section} ${styles[theme]}`}>
      <p>Header</p>
      <ThemeSwitcher />
    </header>
  );
};
