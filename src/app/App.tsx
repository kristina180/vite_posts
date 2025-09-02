import "./App.css";
import { MainLayout } from "../shared/layouts/MainLayout";
import { PostList } from "../widgets/PostList/PostList";
import { MOCK_POSTS } from "../shared/mocks/constants";

function App() {
  return (
    <MainLayout>
      <PostList posts={MOCK_POSTS} />
    </MainLayout>
  );
}

export default App;
