import styles from "./Footer.module.css";
import type { FC } from "react";
import { Button } from "../../shared/ui/Button/Button";
import { type Theme } from "../../shared/lib/theme/ThemeContext";

interface IProps {
  onOpenModal: () => void;
  theme: Theme;
}

export const Footer: FC<IProps> = ({ onOpenModal, theme }) => {
  return (
    <footer className={`${styles.section} ${styles[theme]}`}>
      <Button onOpenModal={onOpenModal} theme={theme}>
        О проекте
      </Button>
    </footer>
  );
};
