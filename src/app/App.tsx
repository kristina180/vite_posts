import "./App.css";
import { MainLayout } from "../shared/layouts/MainLayout";
import { PostList } from "../widgets/PostList/PostList";
import { Modal } from "../shared/ui/Modal/Modal";
import { ThemeProvider } from "../shared/lib/theme/ThemeProvider";
import { useState } from "react";
import { MOCK_POSTS } from "../shared/mocks/constants";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <ThemeProvider>
      <MainLayout onOpenModal={() => setIsModalOpen(true)}>
        <PostList posts={MOCK_POSTS} />
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </MainLayout>
    </ThemeProvider>
  );
}

export default App;
