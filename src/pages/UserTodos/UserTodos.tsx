import { useOutletContext } from "react-router-dom";
import type { IUser } from "../../shared/mocks/constants";
import styles from "./UserTodos.module.css";
import { useGetTodosByUserQuery } from "../../entities/todos/api/todosApi";

export const UserTodos = () => {
  const userData = useOutletContext<IUser>();

  const {
    data: todos = [],
    isError,
    isLoading,
  } = useGetTodosByUserQuery(userData.id);

  if (isLoading) return <p>Загрузка задач...</p>;
  if (isError) return <p>Ошибка при загрузке задач</p>;
  if (!todos || todos.length === 0) return <p>У пользователя нет задач</p>;

  return (
    <ul className={styles.section}>
      {todos.map((todo) => (
        <li key={`todo${todo.id}`}>{todo.title}</li>
      ))}
    </ul>
  );
};
