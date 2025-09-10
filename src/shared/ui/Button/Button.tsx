import styles from "./Button.module.css";
import type { FC } from "react";
import React from "react";

interface ButtonProps {
  onOpenModal: () => void;
  children: React.ReactNode;
  theme: "light" | "dark";
}

export const Button: FC<ButtonProps> = ({ onOpenModal, theme, children }) => {
  function handleClick() {
    onOpenModal();
  }
  return (
    <button onClick={handleClick} className={styles[theme]}>
      {children}
    </button>
  );
};
