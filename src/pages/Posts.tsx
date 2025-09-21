import { useState } from "react";
import { type IPost } from "../widgets/PostList/PostList";
import { PostListWithLoading } from "../widgets/PostListWithLoading/PostListWithLoading";
import { PostLengthFilter } from "../features/PostLengthFilter/ui/PostLengthFilter";
import { usePosts } from "../features/PostList/model/hooks/usePost";

export const Posts = () => {
  const { filteredPostsById } = usePosts();
  const [filteredPostsValue, setFilterPosts] =
    useState<IPost[]>(filteredPostsById);

  return (
    <div>
      <PostLengthFilter posts={filteredPostsValue} onFilter={setFilterPosts} />
      {filteredPostsValue.length > 0 ? (
        <PostListWithLoading isLoading={false} posts={filteredPostsValue} />
      ) : (
        <div>Нет постов</div>
      )}
    </div>
  );
};
