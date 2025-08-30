import styles from "./ThemeSwitcher.module.css";
import { useTheme } from "../../../shared/lib/theme/ThemeContext";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`${styles.button} ${styles[theme]}`}
    >
      Switch to {theme === "light" ? "dark" : "light"} theme
    </button>
  );
};

export default ThemeSwitcher;
