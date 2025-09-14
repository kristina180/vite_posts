import { Link, useParams } from "react-router-dom";
import styles from "./PostDetails.module.css";
import { useGetPostByIdQuery } from "../../entities/posts/api/postsApi";
import { PostCard } from "../../entities/post/ui/PostCard";

export const PostDetails = () => {
  const { id } = useParams();

  const { data: post, isError, isLoading } = useGetPostByIdQuery(+id);

  if (isLoading) return <p>Загрузка поста...</p>;
  if (isError) return <p>Ошибка при загрузке поста</p>;

  return (
    <div className={styles.section}>
      <div className={styles.linkreturn}>
        <div>
          <Link to={"/"}>Посты</Link>
        </div>
        <div>{"/"}</div>
        <div>
          <Link to={`/posts/${id}`}>{post?.title}</Link>
        </div>
      </div>
      {post ? (
        <div className={styles.post_info}>
          <PostCard post={post} />
          {/* <h2>{post.title}</h2>

          <div className={styles.content}>{post.body}</div> */}
        </div>
      ) : (
        <div>Пост не найден</div>
      )}
    </div>
  );
};
