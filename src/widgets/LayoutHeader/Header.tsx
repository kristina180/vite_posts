import styles from "./Header.module.css";
import { ThemeSwitcher } from "../../features/ThemeSwitcher/ui/ThemeSwitcher";
import type { Theme } from "../../shared/lib/theme/ThemeContext";
import type { FC } from "react";

interface IProps {
  theme: Theme;
}

export const Header: FC<IProps> = ({ theme }) => {
  return (
    <header className={`${styles.section} ${styles[theme]}`}>
      <p>Header</p>
      <ThemeSwitcher />
    </header>
  );
};
