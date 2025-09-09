import { useOutletContext } from "react-router-dom";
import type { IUser } from "../../shared/mocks/constants";

import { PostCard } from "../../entities/post/ui/PostCard";
import { usePosts } from "../../features/PostList/model/hooks/usePost";
import styles from "./UserPosts.module.css";

export const UserPosts = () => {
  const userData = useOutletContext<IUser>();
  const { filteredPostsById } = usePosts(userData.posts_id);

  return (
    <div className={styles.section}>
      {filteredPostsById.map((elem) => (
        <PostCard post={elem} />
      ))}
    </div>
  );
};
