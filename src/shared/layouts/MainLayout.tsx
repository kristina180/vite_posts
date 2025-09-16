import { Header } from "../../widgets/LayoutHeader/Header";
import { Footer } from "../../widgets/LayoutFooter/Footer";
import React from "react";
import { useTheme } from "../lib/theme/UseTheme";

import styles from "./MainLayout.module.css";

import { Outlet } from "react-router-dom";
import { ModalProvider } from "../ui/Modal/context/ModalProvider";

interface Props {
  children?: React.ReactNode;
}

export const MainLayout: React.FC<Props> = () => {
  const { theme } = useTheme();

  return (
    <ModalProvider>
      <div className={`${styles.container} ${styles[theme]}`}>
        <Header theme={theme} />
        <main className={styles.main}>
          <Outlet />
        </main>
        <Footer theme={theme} />
      </div>
    </ModalProvider>
  );
};
