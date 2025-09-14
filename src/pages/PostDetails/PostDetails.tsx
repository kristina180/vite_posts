import { Link, useParams } from "react-router-dom";
import { usePosts } from "../../features/PostList/model/hooks/usePost";
import styles from "./PostDetails.module.css";
import { MOCK_USERS, type IUser } from "../../shared/mocks/constants";
import type { FC } from "react";
import type { IPost } from "../../widgets/PostList/PostList";

export const PostDetails: FC = () => {
  const { id } = useParams();
  const { filteredPostsById } = usePosts();
  const current_post: IPost | undefined = id
    ? filteredPostsById.find((post) => post.id == +id)
    : undefined;

  const current_user: IUser | undefined = MOCK_USERS.find((elem) =>
    elem.posts_id.includes(Number(id))
  );

  return (
    <div className={styles.section}>
      <div className={styles.linkreturn}>
        <div>
          <Link to={"/"}>Посты</Link>
        </div>
        <div>{"/"}</div>
        <div>
          <Link to={`/posts/${id}`}>{current_post?.title}</Link>
        </div>
      </div>
      {current_post ? (
        <div className={styles.post_info}>
          <h2>{current_post.title}</h2>
          <div className={styles.author}>
            Автор:{" "}
            <Link to={`/users/${current_user?.id}`}>
              {current_user?.name + " " + current_user?.surname}
            </Link>
          </div>
          <div className={styles.content}>{current_post.content}</div>
        </div>
      ) : (
        <div>Пост не найден</div>
      )}
    </div>
  );
};
