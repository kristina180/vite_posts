import styles from "./Footer.module.css";
import type { FC } from "react";
import { Button } from "../../shared/ui/Button/Button";

interface IProps {
  onOpenModal: () => void;
  theme: "light" | "dark";
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
