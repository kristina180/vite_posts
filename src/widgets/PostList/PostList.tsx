import React from "react";
import PostCard from "../../entities/post/ui/PostCard";

interface Post {
  id: number;
  title: string;
  content: string;
}

interface Props {
  posts: Post[];
}

export default function PostList({ posts }: Props) {
  return (
    <section>
      {posts.map((post) => (
        <React.Fragment key={post.id}>
          <PostCard key={post.id} title={post.title} content={post.content} />
        </React.Fragment>
      ))}
    </section>
  );
}
