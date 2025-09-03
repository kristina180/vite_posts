import React from "react";
import { PostCard } from "../../entities/post/ui/PostCard";
import type { FC } from "react";

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
        <React.Fragment key={post.id}>
          <PostCard key={post.id} title={post.title} content={post.content} />
        </React.Fragment>
      ))}
    </section>
  );
};
