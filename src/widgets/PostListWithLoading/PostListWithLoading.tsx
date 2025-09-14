import { withLoading } from "../../shared/lib/hoc/WithLoading";
import { PostList } from "../PostList/PostList";

export const PostListWithLoading = withLoading(PostList);
