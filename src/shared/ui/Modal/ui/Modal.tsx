import { createPortal } from "react-dom";
import { type FC, type ReactNode } from "react";
import styles from "./Modal.module.css";

import { useTheme } from "../../../lib/theme/UseTheme";
import { ModalContext } from "../context/ModalContext";
import { ModalHeader } from "./ModalHeader";
import { ModalBody } from "./ModalBody";
import { ModalFooter } from "./ModalFooter";

const modalRoot = document.getElementById("modal-root")!;

interface IProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

interface ICompProps {
  Header: FC<{ children: ReactNode }>;
  Body: FC<{ children: ReactNode }>;
  Footer: FC<{ children: ReactNode }>;
}

export const Modal: FC<IProps> & ICompProps = ({
  isOpen,
  onClose,
  children,
}) => {
  const { theme } = useTheme();
  if (!isOpen) return null;

  return createPortal(
    <ModalContext.Provider value={{ onClose }}>
      <div className={`${styles.modalStyles} ${styles[theme]}`}>
        <div className={`${styles.modalContentStyles} ${styles[theme]}`}>
          {children}
        </div>
      </div>
    </ModalContext.Provider>,
    modalRoot
  );
};

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;
