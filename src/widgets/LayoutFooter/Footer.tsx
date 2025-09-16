import styles from "./Footer.module.css";
import type { FC } from "react";
import { Button } from "../../shared/ui/Button/Button";
import { useModal } from "../../shared/ui/Modal/context/UseModal";
import { Modal } from "../../shared/ui/Modal/ui/Modal";

interface IProps {
  theme: "light" | "dark";
}

export const Footer: FC<IProps> = ({ theme }) => {
  const { onOpenModal, onCloseModal } = useModal();
  return (
    <footer className={`${styles.section} ${styles[theme]}`}>
      <Button onOpenModal={onOpenModal} theme={theme}>
        О проекте
      </Button>
      <Modal>
        <Modal.Header>О проекте</Modal.Header>
        <Modal.Body>Это веб-сервис с постами</Modal.Body>
        <Modal.Footer>
          <button onClick={onCloseModal}>Закрыть</button>
        </Modal.Footer>
      </Modal>
    </footer>
  );
};
