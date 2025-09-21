import { type FC } from "react";
import { type IComment } from "../../entities/comments/api/commentsApi";

import styles from "./Comment.module.css";

interface IProp {
  comment: IComment;
}

export const Comment: FC<IProp> = ({ comment }) => {
  return (
    <li key={comment.id} className={styles.comment}>
      <p>
        <strong>{comment.email}:</strong> {comment.body}
      </p>
    </li>
  );
};
