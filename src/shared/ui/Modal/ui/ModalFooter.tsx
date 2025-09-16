import { useContext, type ReactNode } from "react";
import styles from "./Modal.module.css";
import { ModalContext } from "../context/ModalContext";

export const ModalFooter = ({ children }: { children: ReactNode }) => {
  const context = useContext(ModalContext);
  if (!context) throw new Error("Modal.Footer must be used inside Modal");

  return <div className={styles.modalFooter}>{children}</div>;
};
