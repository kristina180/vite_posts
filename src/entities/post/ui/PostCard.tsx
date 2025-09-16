import type { FC } from "react";
import { CommentList } from "../../../widgets/CommentList/ui/CommentList";

import styles from "./PostCard.module.css";
import { useTheme } from "../../../shared/lib/theme/UseTheme";
import { Link } from "react-router-dom";
import { type IPost } from "../../posts/api/postsApi";
import { useGetCommentsByIdPostQuery } from "../../comments/api/commentsApi";

interface Props {
  post: IPost;
}

export const PostCard: FC<Props> = ({ post }) => {
  const { id, title, body } = post;

  const { theme } = useTheme();

  const { data: comments } = useGetCommentsByIdPostQuery(id);

  return (
    <article className={`${styles.section} ${styles[theme]}`}>
      {id ? (
        <Link to={`/posts/${id}`}>
          <h2>{title}</h2>
        </Link>
      ) : (
        <h2>{title}</h2>
      )}

      <div>{body}</div>

      <CommentList comments={comments ?? []} />
    </article>
  );
};
