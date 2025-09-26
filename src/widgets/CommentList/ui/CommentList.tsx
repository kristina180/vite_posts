import { useState, useCallback, type FC } from "react";
import type { IComment } from "../../../entities/comments/model/types";
import styles from "./CommentList.module.css";
import { Comment } from "../../Comment/Comment";
import { ItemList } from "../../../shared/ui/ItemList/ItemList";

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

      {isOpen &&
        (comments ? (
          <ul className={styles.commentList}>
            <ItemList
              items={comments}
              keyExtractor={(comment) => comment.id}
              renderItem={(comment) => (
                <Comment key={comment.id} comment={comment} />
              )}
            />
          </ul>
        ) : (
          <div>Нет комментариев</div>
        ))}
    </section>
  );
};
