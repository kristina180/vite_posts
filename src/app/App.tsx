import "./App.css";
import { MainLayout } from "../shared/layouts/MainLayout";

import { ThemeProvider } from "../shared/lib/theme/ThemeProvider";
import { useState, type FC } from "react";
import { MOCK_POSTS } from "../shared/mocks/constants";
import { PostListWithLoading } from "../widgets/PostListWithLoading/PostListWithLoading";
import { PostLengthFilter } from "../features/PostLengthFilter/ui/PostLengthFilter";
import type { IPost } from "../widgets/PostList/PostList";


const App = () => {
  const [filteredPosts, setFilterPosts] = useState<IPost[]>(MOCK_POSTS);


  return (
    <ThemeProvider>
      <MainLayout>
        <PostLengthFilter posts={MOCK_POSTS} onFilter={setFilterPosts} />
        {filteredPosts.length > 0 ? (
          <PostListWithLoading isLoading={false} posts={filteredPosts} />
        ) : (
          <div>Нет постов</div>
        )}
      </MainLayout>
    </ThemeProvider>

  );
};

export default App;
