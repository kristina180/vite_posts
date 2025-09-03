import "./App.css";
import { MainLayout } from "../shared/layouts/MainLayout";
import { Modal } from "../shared/ui/Modal/Modal";
import { ThemeProvider } from "../shared/lib/theme/ThemeProvider";
import { useState } from "react";
import { MOCK_POSTS } from "../shared/mocks/constants";
import { PostListWithLoading } from "../widgets/PostList/PostList";
import { PostLengthFilter } from "../features/PostLengthFilter/ui/PostLengthFilter";
import type { IPost } from "../widgets/PostList/PostList";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filteredPosts, setFilterPosts] = useState<IPost[]>([]);

  return (
    <ThemeProvider>
      <MainLayout onOpenModal={() => setIsModalOpen(true)}>
        <PostLengthFilter posts={MOCK_POSTS} onFilter={setFilterPosts} />
        {filteredPosts.length > 0 ? (
          <PostListWithLoading isLoading={false} posts={filteredPosts} />
        ) : (
          <div>Нет постов</div>
        )}
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <Modal.Header>О проекте</Modal.Header>
          <Modal.Body>Это веб-сервис с постами</Modal.Body>
          <Modal.Footer>
            <button onClick={() => setIsModalOpen(false)}>Закрыть</button>
          </Modal.Footer>
        </Modal>
      </MainLayout>
    </ThemeProvider>
  );
}

export default App;
