import { createPortal } from "react-dom";
import styles from "./Modal.module.css";
import { useTheme } from "../../lib/theme/ThemeContext";

const Modal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const { theme } = useTheme();
  if (!isOpen) return null;

  return createPortal(
    <div className={`${styles.modalStyles} ${styles[theme]}`}>
      <div className={`${styles.modalContentStyles} ${styles[theme]}`}>
        <h2>О проекте</h2>
        <p>Это веб-сервис с постами</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
