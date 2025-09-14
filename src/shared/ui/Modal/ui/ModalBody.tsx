import type { ReactNode } from "react";
import styles from "./Modal.module.css";

export const ModalBody = ({ children }: { children: ReactNode }) => {
  return <div className={styles.modalBody}>{children}</div>;
};
