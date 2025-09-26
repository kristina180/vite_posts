import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "../../utils/constantsApi";

interface IPhoto {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

interface IAlbum {
  userId: number;
  id: number;
  title: string;
}

export const albumsApi = createApi({
  reducerPath: "albumsApi",
  tagTypes: ["Albums", "Photos"],
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getAlbums: builder.query<IAlbum[], void>({
      query: () => "albums",
      providesTags: [{ type: "Albums", id: "LIST" }],
    }),

    getAlbumById: builder.query<IAlbum, number>({
      query: (id) => `albums/${id}`,
      providesTags: (result, error, id) => [
        { type: "Albums", id: "LIST" },
        { type: "Albums", id },
      ],
    }),

    getAlbumsByUser: builder.query<IAlbum[], number>({
      query: (userId) => `albums?userId=${userId}`,
      providesTags: (result, error, userId) => [
        { type: "Albums", id: "LIST" },
        { type: "Albums", id: `USER_${userId}` },
      ],
    }),

    getPhotosByAlbumId: builder.query<IPhoto[], number>({
      query: (albumId) => `albums/${albumId}/photos`,
      providesTags: (result, error, albumId) => [
        { type: "Photos", id: `ALBUM_${albumId}` },
      ],
    }),
  }),
});

export const {
  useGetAlbumsQuery,
  useGetAlbumByIdQuery,
  useGetAlbumsByUserQuery,
  useGetPhotosByAlbumIdQuery,
} = albumsApi;
