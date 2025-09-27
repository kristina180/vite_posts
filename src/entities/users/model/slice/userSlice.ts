import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { IUser, UserState } from "../types";

const initialState: UserState = {
  user: null,
  isLoading: false,
  error: null,
};

export const getUserById = createAsyncThunk<
  IUser,
  number,
  { rejectValue: string }
>("user/getUserById", async (userId, { rejectWithValue }) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );

    if (!response.ok) {
      throw new Error("Не удалось загрузить пользователя");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    let errorMessage = "Неизвестная ошибка";

    if (error instanceof Error) {
      errorMessage = error.message;
    }

    return rejectWithValue(errorMessage);
  }
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    clearUser(state) {
      state.user = null;
      state.error = null;
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserById.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getUserById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(getUserById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
