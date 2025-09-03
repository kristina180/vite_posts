import styles from "./ThemeSwitcher.module.css";
import { useTheme } from "../../../shared/lib/theme/UseTheme";
import type { FC } from "react";
import { Sun, Moon } from "lucide-react";

export const ThemeSwitcher: FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`${styles.button} ${styles[theme]}`}
    >
      {theme === "light" ? (
        <Moon strokeWidth={1} size={24} />
      ) : (
        <Sun strokeWidth={1} size={24} />
      )}
    </button>
  );
};
