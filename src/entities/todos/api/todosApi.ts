import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "../../utils/constantsApi";
import type { ITodos } from "../model/types";

export const todosApi = createApi({
  reducerPath: "todosApi",
  tagTypes: ["Todos"],
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getTodos: builder.query<ITodos[], void>({
      query: () => "todos",
      providesTags: (result) =>
        result
          ? [
              ...result.map((todo) => ({
                type: "Todos" as const,
                id: todo.id,
              })),
              { type: "Todos", id: "LIST" },
            ]
          : [{ type: "Todos", id: "LIST" }],
    }),

    getTodosByUser: builder.query<ITodos[], number>({
      query: (userId) => `todos?userId=${userId}`,
      providesTags: (result, error, userId) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Todos" as const, id })),
              { type: "Todos", id: `USER_${userId}` },
            ]
          : [{ type: "Todos", id: `USER_${userId}` }],
    }),
  }),
});

export const { useGetTodosQuery, useGetTodosByUserQuery } = todosApi;
