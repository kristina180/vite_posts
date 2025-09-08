import "./App.css";
import { MainLayout } from "../shared/layouts/MainLayout";
import { PostList } from "../widgets/PostList/PostList";

import { Modal } from "../shared/ui/Modal/Modal";
import { ThemeProvider } from "../shared/lib/theme/ThemeProvider";
import { useState, type FC } from "react";
import { MOCK_POSTS } from "../shared/mocks/constants";

const App: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <ThemeProvider>
      <MainLayout onOpenModal={() => setIsModalOpen(true)}>
        <PostList posts={MOCK_POSTS} />
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </MainLayout>
    </ThemeProvider>

  );
};

export default App;
