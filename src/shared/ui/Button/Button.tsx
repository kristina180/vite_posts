import styles from "./Button.module.css";

import React from "react";

interface ButtonProps {
  onOpenModal: () => void;
  children: React.ReactNode;
  theme: "light" | "dark";
}

const Button = ({ onOpenModal, theme, children }: ButtonProps) => {
  return (
    <button onClick={onOpenModal} className={styles[theme]}>
      {children}
    </button>
  );
};

export default Button;
