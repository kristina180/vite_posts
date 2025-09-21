import type { ReactNode } from "react";
import styles from "./Modal.module.css";

export const ModalHeader = ({ children }: { children: ReactNode }) => {
  return (
    <div className={styles.modalHeader}>
      <h2>{children}</h2>
    </div>
  );
};
