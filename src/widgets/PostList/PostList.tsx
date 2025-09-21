<<<<<<< HEAD

import React, { useMemo } from "react";
=======
import React from "react";
>>>>>>> homework-5
import { PostCard } from "../../entities/post/ui/PostCard";
import type { FC } from "react";

import styles from "./PostList.module.css";

<<<<<<< HEAD
export interface IPost {

  id: number;
  title: string;
  content: string;
}
=======
import { type IPost } from "../../entities/posts/api/postsApi";
>>>>>>> homework-5

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
