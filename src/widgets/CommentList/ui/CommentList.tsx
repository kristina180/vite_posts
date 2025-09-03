import { useState, useCallback, type FC } from "react";
import styles from "./CommentList.module.css";

interface Comment {
  id: number;
  author: string;
  text: string;
}

interface Props {
  comments: Comment[];
}

export const CommentList: FC<Props> = ({ comments }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <section className={styles.section}>
      <button onClick={toggleOpen}>
        {isOpen ? "Скрыть комментарии" : "Показать комментарии"}
      </button>

      {isOpen && (
        <ul className={styles.commentList}>
          {comments.map((comment) => (
            <li key={comment.id}>
              <strong>{comment.author}:</strong> {comment.text}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};
