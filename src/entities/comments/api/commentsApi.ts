import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "../../utils/constantsApi";

import type { IComment } from "../model/types";

export const commentsApi = createApi({
  reducerPath: "commentsApi",
  tagTypes: ["Comments"],
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getComments: builder.query<IComment[], void>({
      query: () => "Comments",
      providesTags: (result) =>
        result
          ? [
              ...result.map((comment) => ({
                type: "Comments" as const,
                id: comment.id,
              })),
              { type: "Comments", id: "LIST" },
            ]
          : [{ type: "Comments", id: "LIST" }],
    }),

    getCommentsByIdPost: builder.query<IComment[], number>({
      query: (postId) => `comments?postId=${postId}`,
      providesTags: (result, error, postId) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Comments" as const, id })),
              { type: "Comments", id: `Post_${postId}` },
            ]
          : [{ type: "Comments", id: `USER_${postId}` }],
    }),
  }),
});

export const { useGetCommentsQuery, useGetCommentsByIdPostQuery } = commentsApi;
