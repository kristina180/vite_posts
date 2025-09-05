import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";
export const NotFound = () => {
  return (
    <div className={styles.section}>
      <h1>404 — Страница не найдена</h1>
      <p>Похоже, вы перешли по несуществующему маршруту.</p>
      <Link to="/">Вернуться на главную</Link>
    </div>
  );
};
