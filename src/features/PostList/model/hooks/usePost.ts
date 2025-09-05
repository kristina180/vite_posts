import { useState } from "react";
import type { IPost } from "../../../../widgets/PostList/PostList";
import { MOCK_POSTS } from "../../../../shared/mocks/constants";

export const usePosts = () => {
  const [posts, setPosts] = useState<IPost[]>(MOCK_POSTS);

  return { posts, setPosts };
};
