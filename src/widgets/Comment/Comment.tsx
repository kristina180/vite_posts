import type { FC } from "react";
import { type IComment } from "../CommentList/ui/CommentList";

interface IProp {
  comment: IComment;
}

export const Comment: FC<IProp> = ({ comment }) => {
  return (
    <li key={comment.id}>
      <strong>{comment.author}:</strong> {comment.text}
    </li>
  );
};
