import { useOutletContext } from "react-router-dom";
import type { IUser } from "../../shared/mocks/constants";
import styles from "./UserTodos.module.css";

export const UserTodos = () => {
  const userData = useOutletContext<IUser>();

  return (
    <div className={styles.section}>
      {userData.todos.map((todo) => (
        <li key={`todo${todo.id}`}>{todo.text}</li>
      ))}
    </div>
  );
};
