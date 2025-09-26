import { createAsyncThunk } from "@reduxjs/toolkit";
import type { IUser } from "./userSlice";

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
