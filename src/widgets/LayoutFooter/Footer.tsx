import styles from "./Footer.module.css";
import type { FC } from "react";
import { Button } from "../../shared/ui/Button/Button";
import { useModal } from "../../shared/ui/Modal/context/UseModal";

interface IProps {
  theme: "light" | "dark";
}

export const Footer: FC<IProps> = ({ theme }) => {
  const { onOpenModal } = useModal();
  return (
    <footer className={`${styles.section} ${styles[theme]}`}>
      <Button onOpenModal={onOpenModal} theme={theme}>
        О проекте
      </Button>
    </footer>
  );
};
