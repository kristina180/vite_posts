import styles from "./Footer.module.css";
import type { FC } from "react";
import { Button } from "../../shared/ui/Button/Button";
import { Modal } from "../../shared/ui/Modal/Modal";
import { useState } from "react";

interface IProps {
  theme: "light" | "dark";
}

export const Footer: FC<IProps> = ({ theme }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  function handleClick(value: boolean) {
    setIsModalOpen(value);
  }

  return (
    <footer className={`${styles.section} ${styles[theme]}`}>
      <Button onOpenModal={() => handleClick(true)} theme={theme}>
        О проекте
      </Button>
      <Modal isOpen={isModalOpen} onClose={() => handleClick(false)}>
        <Modal.Header>О проекте</Modal.Header>
        <Modal.Body>Это веб-сервис с постами</Modal.Body>
        <Modal.Footer>
          <button onClick={() => handleClick(false)}>Закрыть</button>
        </Modal.Footer>
      </Modal>
    </footer>
  );
};
