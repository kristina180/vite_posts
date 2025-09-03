import type { FC } from "react";

interface Props {
  title: string;
  content: string;
}

export const PostCard: FC<Props> = ({ title, content }: Props) => {
  return (
    <article>
      <h2>{title}</h2>
      <p>{content}</p>
    </article>
  );
};
