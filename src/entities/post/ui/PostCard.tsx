import type { FC } from "react";
import { CommentList } from "../../../widgets/CommentList/ui/CommentList";
import { COMMENT_LIST } from "../../../shared/mocks/constants";
import styles from "./PostCard.module.css";
import { useTheme } from "../../../shared/lib/theme/UseTheme";
import { Link } from "react-router-dom";

interface Props {
  id?: number;
  title: string;
  content: string;
}

export const PostCard: FC<Props> = ({ id, title, content }: Props) => {
  const { theme } = useTheme();
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
      <CommentList comments={COMMENT_LIST} />
    </article>
  );
};
