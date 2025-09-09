import React, { useMemo } from "react";
import { PostCard } from "../../entities/post/ui/PostCard";
import type { FC } from "react";
import { withLoading } from "../../shared/lib/hoc/WithLoading";
import styles from "./PostList.module.css";

export interface IPost {
  id: number;
  title: string;
  content: string;
  comments: number[];
}

interface Props {
  posts: IPost[];
}

export const PostList: FC<Props> = ({ posts }) => {
  const value = useMemo(
    () =>
      posts.map((post) => (
        <React.Fragment key={post.id}>
          <PostCard post={post} />
        </React.Fragment>
      )),
    [posts]
  );
  return <section className={styles.section}>{value}</section>;
};

export const PostListWithLoading = withLoading(PostList);
