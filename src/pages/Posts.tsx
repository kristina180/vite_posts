import { useState } from "react";
import { PostListWithLoading } from "../widgets/PostList/PostList";
import { PostLengthFilter } from "../features/PostLengthFilter/ui/PostLengthFilter";
import { usePosts } from "../features/PostList/model/hooks/usePost";
import { type IPost } from "../entities/posts/api/postsApi";

export const Posts = () => {
  const { posts, isLoading } = usePosts();
  const [filteredPostsValue, setFilterPosts] = useState<IPost[]>(posts);

  console.log(isLoading);

  return (
    <div>
      <PostLengthFilter posts={posts} onFilter={setFilterPosts} />

      <PostListWithLoading isLoading={isLoading} posts={filteredPostsValue} />
    </div>
  );
};
