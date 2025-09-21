import { configureStore } from "@reduxjs/toolkit";

import { albumsApi } from "../../../entities/albums/api/albumsApi";
import { todosApi } from "../../../entities/todos/api/todosApi";
import { postReducer } from "../../../entities/posts/model/slice/postSlice";
import { postsApi } from "../../../entities/posts/api/postsApi";
import { commentsApi } from "../../../entities/comments/api/commentsApi";
import { userReducer } from "../../../entities/users/model/slice/userSlice";

export const store = configureStore({
  reducer: {
    posts: postReducer,
    user: userReducer,
    [postsApi.reducerPath]: postsApi.reducer,
    [albumsApi.reducerPath]: albumsApi.reducer,
    [todosApi.reducerPath]: todosApi.reducer,
    [commentsApi.reducerPath]: commentsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(albumsApi.middleware)
      .concat(todosApi.middleware)
      .concat(postsApi.middleware)
      .concat(commentsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
