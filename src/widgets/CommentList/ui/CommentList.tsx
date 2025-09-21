import { useState, useCallback, type FC } from "react";
import styles from "./CommentList.module.css";
import { Comment } from "../../Comment/Comment";

export interface IComment {
  id: number;
  userId: number;
  text: string;
  postId: number;
}

interface Props {
  comments: IComment[];
}

export const CommentList: FC<Props> = ({ comments }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <section className={styles.section}>
      <button onClick={handleToggleOpen}>
        {isOpen ? "Скрыть комментарии" : "Показать комментарии"}
      </button>

      {isOpen && (
        <ul className={styles.commentList}>
          {comments.map((comment) => (
            <Comment comment={comment} />
          ))}
        </ul>
      )}
    </section>
  );
};
