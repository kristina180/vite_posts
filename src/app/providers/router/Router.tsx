import { createBrowserRouter } from "react-router-dom";

import { Posts } from "../../../pages/Posts";
import { PostDetails } from "../../../pages/PostDetails/PostDetails";
import { AlbumsPhotos } from "../../../pages/AlbumsPhotos/AlbumsPhotos";
import { UserAlbums } from "../../../pages/UserAlbums/UserAlbums";
import { UserPosts } from "../../../pages/UserPosts/UserPosts";
import { UserTodos } from "../../../pages/UserTodos/UserTodos";
import { MainLayout } from "../../../shared/layouts/MainLayout";
import { UserCard } from "../../../pages/UserCard/UserCard";
import { NotFound } from "../../../pages/NotFound/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Posts />,
      },
      { path: "posts", element: <Posts /> },

      {
        path: "/posts/:id",
        element: <PostDetails />,
      },
      {
        path: "/users/:id",
        element: <UserCard />,
        children: [
          {
            path: "albums",
            element: <UserAlbums />,
          },
          {
            path: "todos",
            element: <UserTodos />,
          },
          {
            path: "posts",
            element: <UserPosts />,
          },
        ],
      },
      {
        path: "/albums/:id/photos",
        element: <AlbumsPhotos />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
