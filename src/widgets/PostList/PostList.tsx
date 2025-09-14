import React, { useMemo } from "react";
import { PostCard } from "../../entities/post/ui/PostCard";
import type { FC } from "react";

import styles from "./PostList.module.css";

export interface IPost {
  id: number;
  title: string;
  content: string;
}

interface Props {
  posts: IPost[];
}

export const PostList: FC<Props> = ({ posts }) => {
  const value = useMemo(
    () =>
      posts.map((post) => (
        <React.Fragment key={post.id}>
          <PostCard id={post.id} title={post.title} content={post.content} />
        </React.Fragment>
      )),
    [posts]
  );
  return <section className={styles.section}>{value}</section>;
};
