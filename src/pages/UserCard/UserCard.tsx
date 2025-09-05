import { Outlet, useParams } from "react-router-dom";
import { MOCK_USERS } from "../../shared/mocks/constants";
import type { IUser } from "../../shared/mocks/constants";
import { UserTabs } from "../../widgets/UserTabs/UserTabs";
import styles from "./UserCard.module.css";

export const UserCard = () => {
  const { id } = useParams();
  const user_current: IUser | undefined = id
    ? MOCK_USERS.find((user) => user.id == +id)
    : undefined;

  return (
    <div className={styles.section}>
      {user_current ? (
        <>
          <div className={styles.user_info}>
            <div>
              <img src={user_current.avatar} width={100} height={100}></img>
              <div className={styles.name}>
                <p>{user_current.name + " " + user_current.surname}</p>
                <div>
                  <p>Постов: {user_current.posts_id.length}</p>
                  <p>Альбомов: 1</p>
                  <p>Задач: {user_current.todos.length}</p>
                </div>
              </div>
            </div>
          </div>
          <UserTabs />
          <Outlet context={user_current} />
        </>
      ) : (
        <div>User not found</div>
      )}
    </div>
  );
};
