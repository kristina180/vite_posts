import type { FC } from "react";
import { CommentList } from "../../../widgets/CommentList/ui/CommentList";
import { COMMENT_LIST } from "../../../shared/mocks/constants";
import styles from "./PostCard.module.css";
import { useTheme } from "../../../shared/lib/theme/UseTheme";

interface Props {
  title: string;
  content: string;
}

export const PostCard: FC<Props> = ({ title, content }: Props) => {
  const { theme } = useTheme();
  return (
    <article className={`${styles.section} ${styles[theme]}`}>
      <h2>{title}</h2>
      <p>{content}</p>
      <CommentList comments={COMMENT_LIST} />
    </article>
  );
};
