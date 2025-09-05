import { NavLink, useParams } from "react-router-dom";
import styles from "./UserTabs.module.css";
import { useTheme } from "../../shared/lib/theme/UseTheme";

export const UserTabs = () => {
  const { id } = useParams();
  const { theme } = useTheme();
  return (
    <nav className={`${styles.tabs} ${styles[theme]}`}>
      <NavLink
        to={`/users/${id}/albums`}
        className={({ isActive }) => (isActive ? styles.active : "")}
      >
        Альбомы
      </NavLink>
      <NavLink
        to={`/users/${id}/todos`}
        className={({ isActive }) => (isActive ? styles.active : "")}
      >
        Задачи
      </NavLink>
      <NavLink
        to={`/users/${id}/posts`}
        className={({ isActive }) => (isActive ? styles.active : "")}
      >
        Посты
      </NavLink>
    </nav>
  );
};
