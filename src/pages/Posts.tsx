import { useEffect, useState } from "react";

import { PostListWithLoading } from "../widgets/PostListWithLoading/PostListWithLoading";

import { PostLengthFilter } from "../features/PostLengthFilter/ui/PostLengthFilter";
import { usePosts } from "../features/PostList/model/hooks/usePost";
import { type IPost } from "../entities/posts/api/postsApi";

export const Posts = () => {
  const { posts, isLoading } = usePosts();
  const [filteredPostsValue, setFilterPosts] = useState<IPost[]>(posts);
  useEffect(() => {
    setFilterPosts(posts);
  }, [posts]);

  return (
    <div>
      <PostLengthFilter posts={posts} onFilter={setFilterPosts} />

      <PostListWithLoading isLoading={isLoading} posts={filteredPostsValue} />
    </div>
  );
};
