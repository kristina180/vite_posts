import type { FC } from "react";
import { PostCard } from "../../entities/post/ui/PostCard";

interface Post {
  id: number;
  title: string;
  content: string;
}

interface Props {
  posts: Post[];
}

export const PostList: FC<Props> = ({ posts }) => {
  return (
    <section>
      {posts.map((post) => (
        <PostCard key={post.id} title={post.title} content={post.content} />
      ))}
    </section>
  );
};
