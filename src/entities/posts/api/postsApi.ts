import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "../../utils/constantsApi";

export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const postsApi = createApi({
  reducerPath: "postsApi",
  tagTypes: ["Posts"],
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getPosts: builder.query<IPost[], void>({
      query: () => "posts",
      providesTags: [{ type: "Posts", id: "LIST" }],
    }),

    getPostById: builder.query<IPost, number>({
      query: (id) => `posts/${id}`,
      providesTags: (result, error, id) => [{ type: "Posts", id }],
    }),

    getPostsByUser: builder.query<IPost[], number>({
      query: (userId) => `posts?userId=${userId}`,
      providesTags: (result, error, userId) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Posts" as const, id })),
              { type: "Posts", id: `USER_${userId}` },
            ]
          : [{ type: "Posts", id: `USER_${userId}` }],
    }),
  }),
});

export const { useGetPostByIdQuery, useGetPostsQuery, useGetPostsByUserQuery } =
  postsApi;
