import {
  useGetPostsByUserQuery,
  useGetPostsQuery,
} from "../../../../entities/posts/api/postsApi";
import { useSelector } from "react-redux";
import { selectAllPosts } from "../../../../entities/posts/model/slice/postSlice";

export const usePosts = (userId?: number) => {
  const { isLoading: isLoadingAll, isFetching: isFetchingAll } =
    useGetPostsQuery(undefined, { skip: userId !== undefined });

  const { isLoading: isLoadingByUser, isFetching: isFetchingByUser } =
    useGetPostsByUserQuery(userId ?? 0, {
      skip: userId === undefined,
    });

  const allPosts = useSelector(selectAllPosts);

  const filteredPosts = userId
    ? allPosts.filter((post) => post.userId === userId)
    : allPosts;

  const isLoading = userId
    ? isLoadingByUser || isFetchingByUser
    : isLoadingAll || isFetchingAll;

  return {
    posts: filteredPosts,
    isEmpty: filteredPosts.length === 0,
    isLoading,
  };
};
