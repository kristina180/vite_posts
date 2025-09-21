import type { FC } from "react";
import { type IComment } from "../CommentList/ui/CommentList";
import { MOCK_USERS } from "../../shared/mocks/constants";
import { Link } from "react-router-dom";
import styles from "./Comment.module.css";

interface IProp {
  comment: IComment;
}

export const Comment: FC<IProp> = ({ comment }) => {
  const user = MOCK_USERS.find((elem) => elem.id == comment.userId);

  return (
    <li key={comment.id} className={styles.comment}>
      <Link to={`/users/${comment.userId}`}>
        <p>
          <strong>{`${user?.name} ${user?.surname}:`} </strong>
        </p>
      </Link>
      <p>{comment.text}</p>
    </li>
  );
};
