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

  return createPortal(
    <div className={`${styles.modalStyles} ${styles[theme]}`}>
      <div className={`${styles.modalContentStyles} ${styles[theme]}`}>
        {children}
      </div>
    </div>,
    modalRoot
  );
};

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;
