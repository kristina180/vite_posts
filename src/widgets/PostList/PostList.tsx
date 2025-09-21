import React from "react";

import { PostCard } from "../../entities/post/ui/PostCard";
import type { FC } from "react";

import styles from "./PostList.module.css";

import type { IPost } from "../../entities/posts/model/types";
import { ItemList } from "../../shared/ui/ItemList/ItemList";

interface Props {
  posts: IPost[];
}

export const PostList: FC<Props> = ({ posts }) => {
  return (
    <ItemList
      items={posts}
      keyExtractor={(post) => post.id}
      renderItem={(post) => (
        <React.Fragment key={post.id}>
          <PostCard post={post} />
        </React.Fragment>
      )}
      className={styles.section}
    />
  );
};
