import { Header } from "../../widgets/LayoutHeader/Header";
import { Footer } from "../../widgets/LayoutFooter/Footer";
import React from "react";
import { useTheme } from "../lib/theme/UseTheme";
import { Modal } from "../ui/Modal/Modal";
import { useState } from "react";

import styles from "./MainLayout.module.css";

interface Props {
  children: React.ReactNode;
}

export const MainLayout: React.FC<Props> = ({ children }) => {
  const { theme } = useTheme();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  function handleClick(value: boolean) {
    setIsModalOpen(value);
  }

  return (
    <div className={`${styles.container} ${styles[theme]}`}>
      <Header theme={theme} />
      <main className={styles.main}>{children}</main>
      <Modal isOpen={isModalOpen} onClose={() => handleClick(false)}>
        <Modal.Header>О проекте</Modal.Header>
        <Modal.Body>Это веб-сервис с постами</Modal.Body>
        <Modal.Footer>
          <button onClick={() => handleClick(false)}>Закрыть</button>
        </Modal.Footer>
      </Modal>
      <Footer onOpenModal={() => handleClick(true)} theme={theme} />
    </div>
  );
};
