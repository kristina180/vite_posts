import { Header } from "../../widgets/LayoutHeader/Header";
import { Footer } from "../../widgets/LayoutFooter/Footer";
import React from "react";
import { useTheme } from "../lib/theme/UseTheme";
import { Modal } from "../ui/Modal/ui/Modal";
import { useState } from "react";

import styles from "./MainLayout.module.css";

import { Outlet } from "react-router-dom";
import { ModalProvider } from "../ui/Modal/context/ModalProvider";

interface Props {
  children?: React.ReactNode;
}

export const MainLayout: React.FC<Props> = () => {
  const { theme } = useTheme();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  function handleClick(value: boolean) {
    setIsModalOpen(value);
  }

  return (
    <ModalProvider onOpenModal={() => handleClick(true)}>
      <div className={`${styles.container} ${styles[theme]}`}>
        <Header theme={theme} />

        <main className={styles.main}>
          <Outlet />
        </main>
        <Modal isOpen={isModalOpen} onClose={() => handleClick(false)}>
          <Modal.Header>О проекте</Modal.Header>
          <Modal.Body>Это веб-сервис с постами</Modal.Body>
          <Modal.Footer>
            <button onClick={() => handleClick(false)}>Закрыть</button>
          </Modal.Footer>
        </Modal>
        <Footer theme={theme} />
      </div>
    </ModalProvider>
  );
};
