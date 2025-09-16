// import type { IPost } from "../../widgets/PostList/PostList";

export const MOCK_POSTS = [
  {
    id: 1,
    title: "CSS",
    content: `Cascading  Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG, MathML or XHTML).
    CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.

CSS is among the core languages of the open web and is standardized across Web browsers according to W3C specifications. Previously, the development of various parts of CSS specification was done synchronously, which allowed the versioning of the latest recommendations. You might have heard about CSS1, CSS2.1, or even CSS3. There will never be a CSS3 or a CSS4; rather, everything is now just "CSS" with individual CSS modules having version numbers.

After CSS 2.1, the scope of the specification increased significantly and the progress on different CSS modules started to differ so much, that it became more effective to develop and release recommendations separately per module. Instead of versioning the CSS specification, W3C now periodically takes a snapshot of the latest stable state of the CSS specification and individual modules progress. CSS modules now have version numbers, or levels, such as CSS Color Module Level 5.`,
  },
  {
    id: 2,
    title: "Второй пост",
    content: "Контент второго поста",
  },
  {
    id: 3,
    title: "Третий пост",
    content: "Контент третьего поста",
  },
  {
    id: 4,
    title: "Четвёртый пост с описанием",
    content: "Контент четвертого поста",
  },
  {
    id: 5,
    title: "Пятый пост тест",
    content: "Контент пятого поста",
  },
];

export const COMMENT_LIST = [
  { id: 1, userId: 1, text: "Хорошая статья!", postId: 1 },
  { id: 2, userId: 2, text: "Полезная информация.", postId: 2 },
  { id: 3, userId: 3, text: "Нравится!", postId: 2 },
  { id: 4, userId: 1, text: "Окак.", postId: 5 },
  { id: 5, userId: 2, text: "Пишите больше.", postId: 4 },
  { id: 6, userId: 3, text: "Лайк репост.", postId: 4 },
  { id: 7, userId: 1, text: "Хороший пост.", postId: 3 },
  { id: 8, userId: 2, text: "Подписался.", postId: 3 },
  { id: 9, userId: 3, text: "Отписка.", postId: 5 },
];

export interface IUser {
  id: number;
  name: string;
  surname: string;
  album_id: number;
  todos: ITodo[];
  posts_id: number[];
  avatar?: string;
}
export interface ITodo {
  id: number;
  text: string;
  completed: boolean;
}

export const MOCK_USERS: IUser[] = [
  {
    id: 1,
    name: "Ryan",
    surname: "Gosling",
    avatar:
      "https://wallpapers.com/images/hd/blonde-man-denim-vest-pink-backdrop-dhz2e7cddo95arm6.jpg",
    album_id: 1,
    todos: [
      { id: 1, text: "Страдать по барби", completed: false },
      { id: 2, text: "Качаться", completed: false },
      { id: 3, text: "Ещё немного пострадать по барби", completed: false },
    ],
    posts_id: [2, 4],
  },
  {
    id: 2,
    name: "Tomas",
    surname: "Shelby",
    avatar:
      "https://i.pinimg.com/originals/c7/cd/d7/c7cdd72f08b536b92fb59c764c832bcd.jpg",
    album_id: 2,
    todos: [
      { id: 1, text: "Решать серьёзные делишки", completed: false },
      { id: 2, text: "Принимать ставки", completed: false },
      { id: 3, text: "Покуривать сигаретку", completed: false },
    ],
    posts_id: [5],
  },
  {
    id: 3,
    name: "Bella",
    surname: "Ramsy",
    album_id: 3,
    avatar:
      "https://wallpapers.com/images/hd/bella-ramsey-event-appearance-s2clwk2fy1wsh844.jpg",
    todos: [
      { id: 1, text: "Убивать зомби", completed: false },
      { id: 2, text: "Потроллить Паскаля", completed: false },
      { id: 3, text: "Удалить соцсети", completed: false },
    ],
    posts_id: [1, 3],
  },
];

export const MOCK_ALBUMS = [
  {
    id: 1,
    album: [
      "https://wallpapers.com/images/hd/blonde-man-denim-vest-pink-backdrop-dhz2e7cddo95arm6.jpg",
      "https://avatars.mds.yandex.net/i?id=e83719e0dc1798bd2fcca3e283e50e95bae41a9e-16405973-images-thumbs&n=13",
      "https://avatars.mds.yandex.net/i?id=edefd26eb7200431b026d3a036ff6aa9_l-16116239-images-thumbs&n=13",
    ],
  },
  {
    id: 2,
    album: [
      "https://i.pinimg.com/originals/c7/cd/d7/c7cdd72f08b536b92fb59c764c832bcd.jpg",
      "https://wallpapers.com/images/hd/tommy-shelby-4k-restaurant-bults3i7wyvvt49u.jpg",
      "https://avatars.mds.yandex.net/i?id=374f1b09b37ba6a64bf127622a9b60c81d366c41-16336042-images-thumbs&n=13",
    ],
  },
  {
    id: 3,
    album: [
      "https://wallpapers.com/images/hd/bella-ramsey-event-appearance-s2clwk2fy1wsh844.jpg",
      "https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_67fa83124eceef3c6dd0e155_67fa878f32525752e7f8bd00/scale_1200",
      "https://avatars.mds.yandex.net/i?id=10e941f938661ad2b629510c0fa0a586_l-12449075-images-thumbs&n=13",
    ],
  },
];
