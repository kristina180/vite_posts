import { createPortal } from "react-dom";
import { createContext, useContext, type FC, type ReactNode } from "react";
import styles from "./Modal.module.css";
import { useTheme } from "../../../lib/theme/UseTheme";

const modalRoot = document.getElementById("modal-root")!;

interface ModalContextType {
  onClose: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

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

const ModalHeader = ({ children }: { children: ReactNode }) => {
  return (
    <div className={styles.modalHeader}>
      <h2>{children}</h2>
    </div>
  );
};

const ModalBody = ({ children }: { children: ReactNode }) => {
  return <div className={styles.modalBody}>{children}</div>;
};

const ModalFooter = ({ children }: { children: ReactNode }) => {
  const context = useContext(ModalContext);
  if (!context) throw new Error("Modal.Footer must be used inside Modal");

  return <div className={styles.modalFooter}>{children}</div>;
};

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;
