import "./App.css";
import { MainLayout } from "../shared/layouts/MainLayout";
import { PostList } from "../widgets/PostList/PostList";
import { MOCK_POSTS } from "../shared/mocks/constants";
import type { FC } from "react";

const App: FC<void> = () => {
  return (
    <MainLayout>
      <PostList posts={MOCK_POSTS} />
    </MainLayout>
  );
};

export default App;
