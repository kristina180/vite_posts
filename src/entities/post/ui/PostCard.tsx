import type { FC } from "react";
import { CommentList } from "../../../widgets/CommentList/ui/CommentList";
import { COMMENT_LIST } from "../../../shared/mocks/constants";
import styles from "./PostCard.module.css";
import { useTheme } from "../../../shared/lib/theme/UseTheme";
import { Link } from "react-router-dom";
import type { IPost } from "../../../widgets/PostList/PostList";

interface Props {
  post: IPost;
}

export const PostCard: FC<Props> = ({ post }) => {
  const { id, title, content } = post;

  const { theme } = useTheme();
  const comments = COMMENT_LIST.filter((elem) => elem.postId == id);
  return (
    <article className={`${styles.section} ${styles[theme]}`}>
      {id ? (
        <Link to={`/posts/${id}`}>
          <h2>{title}</h2>
        </Link>
      ) : (
        <h2>{title}</h2>
      )}
      <div>{content}</div>
      <CommentList comments={comments} />
    </article>
  );
};
