import styles from "./Footer.module.css";
import Button from "../../shared/ui/Button/Button";

export default function Footer({
  onOpenModal,
  theme,
}: {
  onOpenModal: () => void;
  theme: "light" | "dark";
}) {
  return (
    <footer className={`${styles.section} ${styles[theme]}`}>
      <Button onOpenModal={onOpenModal} theme={theme}>
        О проекте
      </Button>
    </footer>
  );
}
