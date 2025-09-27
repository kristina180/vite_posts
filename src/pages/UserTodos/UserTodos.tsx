import { useOutletContext } from "react-router-dom";
import type { IUser } from "../../entities/users/model/types";
import styles from "./UserTodos.module.css";
import { useGetTodosByUserQuery } from "../../entities/todos/api/todosApi";
import { ItemList } from "../../shared/ui/ItemList/ItemList";

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
      <ItemList
        items={todos}
        keyExtractor={(todo) => todo.id}
        renderItem={(todo) => <li key={`todo${todo.id}`}>{todo.title}</li>}
      />
    </ul>
  );
};
