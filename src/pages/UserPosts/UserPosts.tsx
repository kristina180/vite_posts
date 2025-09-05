import { useOutletContext } from "react-router-dom";
import type { IUser } from "../../shared/mocks/constants";

import { PostCard } from "../../entities/post/ui/PostCard";
import { usePosts } from "../../features/PostList/model/hooks/usePost";
import styles from "./UserPosts.module.css";

export const UserPosts = () => {
  const userData = useOutletContext<IUser>();
  const { posts } = usePosts();

  return (
    <div className={styles.section}>
      {userData.posts_id.map((id) => {
        const cur_post = posts.find((elem) => elem.id == id);
        return (
          <>
            {cur_post ? (
              <PostCard
                id={id}
                title={cur_post.title}
                content={cur_post.content}
              />
            ) : (
              <div>Пост не найден</div>
            )}
          </>
        );
      })}
    </div>
  );
};
