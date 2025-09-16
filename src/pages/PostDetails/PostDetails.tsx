import { Link, useParams } from "react-router-dom";
import styles from "./PostDetails.module.css";
import { useGetPostByIdQuery } from "../../entities/posts/api/postsApi";
import { useEffect, type FC } from "react";
import type { RootState } from "../../app/providers/store/reduxStore";
import { useDispatch, useSelector } from "react-redux";
import { getUserById } from "../../entities/users/model/slice/userSlice";
import { type AppDispatch } from "../../app/providers/store/reduxStore";
import { CommentList } from "../../widgets/CommentList/ui/CommentList";
import { useGetCommentsByIdPostQuery } from "../../entities/comments/api/commentsApi";

import { ChevronLeft } from "lucide-react";

export const PostDetails: FC = () => {
  const { id } = useParams();

  const numericId = id ? Number(id) : undefined;

  const dispatch = useDispatch<AppDispatch>();

  const {
    data: post,
    isError,
    isLoading,
  } = useGetPostByIdQuery(numericId!, {
    skip: !id,
  });

  const {
    user,
    error,
    isLoading: userLoading,
  } = useSelector((state: RootState) => state.user);

  const { data: comments } = useGetCommentsByIdPostQuery(numericId!, {
    skip: !id,
  });

  useEffect(() => {
    if (post?.userId) {
      dispatch(getUserById(post.userId));
    }
  }, [dispatch, post?.userId]);

  if (isLoading || userLoading) return <p>Загрузка поста...</p>;
  if (isError || error) return <p>Ошибка при загрузке поста</p>;

  return (
    <div className={styles.section}>
      <div className={styles.linkreturn}>
        <Link to={"/"}>
          <ChevronLeft size={18} className={styles.icon} />
        </Link>

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
          <h2>{post.title}</h2>
          {user ? (
            <div className={styles.author}>
              Автор: <Link to={`/users/${post.userId}`}>{user.name}</Link>
            </div>
          ) : (
            <div></div>
          )}
          <div className={styles.content}>{post.body}</div>
          <CommentList comments={comments ?? []} />
        </div>
      ) : (
        <div>Пост не найден</div>
      )}
    </div>
  );
};
