import { Outlet, useParams } from "react-router-dom";
import { UserTabs } from "../../widgets/UserTabs/UserTabs";
import styles from "./UserCard.module.css";
import { useDispatch, useSelector } from "react-redux";
import type {
  AppDispatch,
  RootState,
} from "../../app/providers/store/reduxStore";
import { getUserById } from "../../entities/users/model/slice/userSlice";
import { useEffect } from "react";

const Photo =
  "https://i.pinimg.com/736x/e4/ac/d9/e4acd9e2e8e022167f4e7d162ef441d0.jpg";

export const UserCard = () => {
  const { id } = useParams();

  const dispatch = useDispatch<AppDispatch>();
  const {
    user,
    error,
    isLoading: userLoading,
  } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    if (id) {
      dispatch(getUserById(+id));
    }
  }, [dispatch, id]);

  if (userLoading) return <p>Загрузка юзера...</p>;
  if (error) return <p>Ошибка при загрузке юзера</p>;

  return (
    <div className={styles.section}>
      {user ? (
        <>
          <div className={styles.user_info}>
            <div>
              <img src={Photo} width={100} height={100}></img>
              <div className={styles.name}>
                <p>{user.name}</p>
              </div>
            </div>
          </div>
          <UserTabs />
          <Outlet context={user} />
        </>
      ) : (
        <div>User not found</div>
      )}
    </div>
  );
};
