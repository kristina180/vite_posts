import { createPortal } from "react-dom";
import type { FC } from "react";
import styles from "./Modal.module.css";
import { useTheme } from "../../lib/theme/UseTheme";

const modalRoot = document.getElementById("modal-root")!;

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Modal: FC<IProps> = ({ isOpen, onClose }) => {
  const { theme } = useTheme();
  if (!isOpen) return null;

  function handleClick() {
    onClose();
  }

  return createPortal(
    <div className={`${styles.modalStyles} ${styles[theme]}`}>
      <div className={`${styles.modalContentStyles} ${styles[theme]}`}>
        <h2>О проекте</h2>
        <p>Это веб-сервис с постами</p>
        <button onClick={handleClick}>Close</button>
      </div>
    </div>,
    modalRoot
  );
};
