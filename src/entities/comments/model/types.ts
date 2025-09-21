import type { ReactNode } from "react";

export interface IComment {
  text: ReactNode;
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}
