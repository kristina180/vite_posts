import "./App.css";
import MainLayout from "./shared/layouts/MainLayout";
import PostList from "./widgets/PostList/PostList";
import Modal from "./shared/ui/Modal/Modal";
import { ThemeProvider } from "./shared/lib/theme/ThemeContext";
import { useState } from "react";

function App() {
  const posts = [
    { id: 1, title: "Первый пост", content: "Контент первого поста" },
    { id: 2, title: "Второй пост", content: "Контент второго поста" },
    { id: 3, title: "Третий пост", content: "Контент третьего поста" },
    { id: 4, title: "Четвёртый пост", content: "Контент первого поста" },
    { id: 5, title: "Пятый пост", content: "Контент второго поста" },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <ThemeProvider>
      <MainLayout onOpenModal={() => setIsModalOpen(true)}>
        <PostList posts={posts} />
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </MainLayout>
    </ThemeProvider>
  );
}

export default App;
