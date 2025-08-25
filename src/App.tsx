import "./App.css";
import MainLayout from "./shared/layouts/MainLayout";
import PostList from "./widgets/PostList/PostList";

function App() {
  const posts = [
    { id: 1, title: "Первый пост", content: "Контент первого поста" },
    { id: 2, title: "Второй пост", content: "Контент второго поста" },
    { id: 3, title: "Третий пост", content: "Контент третьего поста" },
  ];

  return (
    <MainLayout>
      <PostList posts={posts} />
    </MainLayout>
  );
}

export default App;
