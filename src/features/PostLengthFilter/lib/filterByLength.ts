import type { IPost } from "../../../entities/posts/api/postsApi";
export const filterByLength = (posts: IPost[], minlength: number): IPost[] => {
  return posts.filter((post) => post.title.length >= minlength);
};
