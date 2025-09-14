import { useState, useCallback, type FC } from "react";
import { type IComment } from "../../../entities/comments/api/commentsApi";
import styles from "./CommentList.module.css";

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
            <li key={comment.id}>
              <strong>{comment.name}:</strong> {comment.body}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};
