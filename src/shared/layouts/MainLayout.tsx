import { Header } from "../../widgets/LayoutHeader/Header";
import { Footer } from "../../widgets/LayoutFooter/Footer";
import React from "react";
import { useTheme } from "../lib/theme/UseTheme";

import styles from "./MainLayout.module.css";

interface Props {
  children: React.ReactNode;
}

export const MainLayout: React.FC<Props> = ({ children }) => {
  const { theme } = useTheme();

  return (
    <div className={`${styles.container} ${styles[theme]}`}>
      <Header theme={theme} />
      <main className={styles.main}>{children}</main>

      <Footer theme={theme} />
    </div>
  );
};
