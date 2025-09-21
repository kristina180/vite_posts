import { useMemo } from "react";
import { MOCK_POSTS } from "../../../../shared/mocks/constants";

export const usePosts = (posts_id?: number[]) => {
  const filteredPostsById = useMemo(() => {
    if (!posts_id) return MOCK_POSTS;
    return MOCK_POSTS.filter((elem) => posts_id.includes(elem.id));
  }, [posts_id]);

  return { filteredPostsById };
};
