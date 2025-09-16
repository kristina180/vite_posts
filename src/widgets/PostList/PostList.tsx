import React from "react";
import { PostCard } from "../../entities/post/ui/PostCard";
import type { FC } from "react";

import styles from "./PostList.module.css";

import { type IPost } from "../../entities/posts/api/postsApi";

interface Props {
  posts: IPost[];
}

export const PostList: FC<Props> = ({ posts }) => {
  const value = posts.map((post) => (
    <React.Fragment key={post.id}>
      <PostCard post={post} />
    </React.Fragment>
  ));

  return <section className={styles.section}>{value}</section>;
};
