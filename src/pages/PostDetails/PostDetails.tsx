import { Link, useParams } from "react-router-dom";
import { usePosts } from "../../features/PostList/model/hooks/usePost";
import styles from "./PostDetails.module.css";

export const PostDetails = () => {
  const { id } = useParams();
  const { posts } = usePosts();
  const current_post = id ? posts.find((post) => post.id == +id) : undefined;

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

          <div className={styles.content}>{current_post.content}</div>
        </div>
      ) : (
        <div>Пост не найден</div>
      )}
    </div>
  );
};
