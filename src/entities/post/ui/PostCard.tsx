interface Props {
  title: string;
  content: string;
}

export default function PostCard({ title, content }: Props) {
  return (
    <article>
      <h2>{title}</h2>
      <p>{content}</p>
    </article>
  );
}
