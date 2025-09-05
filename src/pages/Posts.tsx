import { useState } from "react";
import { PostListWithLoading, type IPost } from "../widgets/PostList/PostList";
import { PostLengthFilter } from "../features/PostLengthFilter/ui/PostLengthFilter";
import { usePosts } from "../features/PostList/model/hooks/usePost";

export const Posts = () => {
  const [filteredPosts, setFilterPosts] = useState<IPost[]>([]);

  const { posts } = usePosts();
  return (
    <div>
      <PostLengthFilter posts={posts} onFilter={setFilterPosts} />
      {filteredPosts.length > 0 ? (
        <PostListWithLoading isLoading={false} posts={filteredPosts} />
      ) : (
        <div>Нет постов</div>
      )}
    </div>
  );
};
