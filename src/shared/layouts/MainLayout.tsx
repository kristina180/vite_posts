import { Header } from "../../widgets/LayoutHeader/Header";
import { Footer } from "../../widgets/LayoutFooter/Footer";
import React from "react";
import { useTheme } from "../lib/theme/UseTheme";

import styles from "./MainLayout.module.css";

interface Props {
  children: React.ReactNode;
  onOpenModal: () => void;
}

export const MainLayout: React.FC<Props> = ({ children, onOpenModal }) => {
  const { theme } = useTheme();

  return (
    <div className={`${styles.container} ${styles[theme]}`}>
      <Header theme={theme} />
      <main className={styles.main}>{children}</main>
      <Footer onOpenModal={onOpenModal} theme={theme} />
    </div>
  );
};
