import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import type { IPost } from "../../api/postsApi";
import { postsApi } from "../../api/postsApi";
import type { RootState } from "../../../../app/providers/store/reduxStore";

const postsAdapter = createEntityAdapter<IPost>();

const postSlice = createSlice({
  name: "posts",
  initialState: postsAdapter.getInitialState(),
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      postsApi.endpoints.getPosts.matchFulfilled,
      (state, action) => {
        postsAdapter.setAll(state, action.payload);
      }
    );
    builder.addMatcher(
      postsApi.endpoints.getPostById.matchFulfilled,
      (state, action) => {
        postsAdapter.upsertOne(state, action.payload);
      }
    );
    builder.addMatcher(
      postsApi.endpoints.getPostsByUser.matchFulfilled,
      (state, action) => {
        postsAdapter.upsertMany(state, action.payload);
      }
    );
  },
});

export const postReducer = postSlice.reducer;

export const {
  selectAll: selectAllPosts,
  selectById: selectPostById,
  selectIds: selectPostIds,
} = postsAdapter.getSelectors((state: RootState) => state.posts);
