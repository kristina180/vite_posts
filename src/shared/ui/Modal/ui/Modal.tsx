import { createPortal } from "react-dom";
import { type FC, type ReactNode } from "react";
import styles from "./Modal.module.css";

import { useTheme } from "../../../lib/theme/UseTheme";

import { ModalHeader } from "./ModalHeader";
import { ModalBody } from "./ModalBody";
import { ModalFooter } from "./ModalFooter";
import { useModal } from "../context/UseModal";

const modalRoot = document.getElementById("modal-root")!;

interface IProps {
  children: ReactNode;
}

interface ICompProps {
  Header: FC<{ children: ReactNode }>;
  Body: FC<{ children: ReactNode }>;
  Footer: FC<{ children: ReactNode }>;
}

export const Modal: FC<IProps> & ICompProps = ({ children }) => {
  const { theme } = useTheme();
  const { isOpen } = useModal();
  if (!isOpen) return null;

  function handleClick() {
    onClose();
  }

  return createPortal(
<<<<<<< HEAD:src/shared/ui/Modal/ui/Modal.tsx
    <div className={`${styles.modalStyles} ${styles[theme]}`}>
      <div className={`${styles.modalContentStyles} ${styles[theme]}`}>
        {children}
=======

    <ModalContext.Provider value={{ onClose }}>
      <div className={`${styles.modalStyles} ${styles[theme]}`}>
        <div className={`${styles.modalContentStyles} ${styles[theme]}`}>
          {children}
        </div>

>>>>>>> 3ca15e2bdb583ee1417aae1dad4ab9692f76414a:src/shared/ui/Modal/Modal.tsx
      </div>
    </div>,
    modalRoot
  );
};

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;
