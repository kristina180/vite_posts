import styles from "./Button.module.css";
import type { FC } from "react";
import React from "react";
import { type Theme } from "../../lib/theme/ThemeContext";

interface ButtonProps {
  onOpenModal: () => void;
  theme: Theme;
  children: React.ReactNode;
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
