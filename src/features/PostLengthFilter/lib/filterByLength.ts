import type { IPost } from "../../../widgets/PostList/PostList";
export const filterByLength = (posts: IPost[], minlength: number): IPost[] => {
  return posts.filter((post) => post.title.length >= minlength);
};
